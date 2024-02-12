const express = require('express')
const session = require('express-session')
const cors = require('cors')
const path = require('path');
const app = express()
const port = 3001

const db = require('./ConnectToMySQL');
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');

app.use(express.static(path.join(__dirname, '/build')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const MySQLStore = require('express-mysql-session')(session);
const sessionStore = new MySQLStore(db.options);
const conn = db.connectToMySQL();


app.use(session({
	key: 'session_cookie_name',
    secret: '~',
	store: sessionStore,
	resave: false,
	saveUninitialized: false
}))

// app.get('/authcheck', (req, res) => {      
//     const sendData = { isLogin: "" };
//     if (req.session.is_logined) {
//         sendData.isLogin = "True"
//     } else {
//         sendData.isLogin = "False"
//     }
//     res.send(sendData);
// })

app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');
    });
});

app.post("/login", (req, res) => { // 데이터 받아서 결과 전송
    const username = req.body.userId;
    const password = req.body.userPassword;
    // const sendData = {isLogin: String}
    
    if (username && password) {      // id와 pw가 입력되었는지 확인
        conn.query(`SELECT * FROM usertable WHERE username = ?`, [username], function (error, results) {
            if (error) throw error;
            if (results.length > 0) {       // db에서의 반환값이 있다 = 일치하는 아이디가 있다.
                
                console.log("세션 값" + req.session.id)
                bcrypt.compare(password , results[0].password, (err, result) => {    // 입력된 비밀번호가 해시된 저장값과 같은 값인지 비교
                    if (result === true) {                 // 비밀번호가 일치하면
                        req.session.is_logined = req.session.id;     // 세션 정보 갱신
                        req.session.msg = "성공"
                        req.session.nickname = username;
                        req.session.save(function () {
                            // sendData.isLogin = "True"
                            res.send(req.session);
                        });
                    }
                    else{                                   // 비밀번호가 다른 경우
                        req.session.is_logined = false; 
                        req.session.msg = "비밀번호 정보가 일치하지 않습니다."
                        res.send(req.session);
                    }
                })                      
            } else {    // db에 해당 아이디가 없는 경우
                req.session.msg = "아이디 정보가 일치하지 않습니다."
                res.send(req.session);
            }
        });
    } else {            // 아이디, 비밀번호 중 입력되지 않은 값이 있는 경우
        req.session.msg = "아이디와 비밀번호를 입력하세요!"
        res.send(req.session);
    }
});

app.post("/signup", (req, res) => {  // 데이터 받아서 결과 전송
    const username = req.body.userId;
    const password = req.body.userPassword;
    const password2 = req.body.userPassword2;
    
    const sendData = { msg: "" };

    console.log("여기까지1 : " + username + ":" + password)

    if (username && password && password2) {
        // DB에 같은 이름의 회원아이디가 있는지 확인
        conn.query('SELECT * FROM usertable WHERE username = ?', [username], function(error, results, fields) { 
            if (error){ console.log(error); throw error;}
            if (results.length <= 0 && password == password2) {         
                const hasedPassword = bcrypt.hashSync(password, 10);    // 입력된 비밀번호를 해시한 값
                conn.query('INSERT INTO usertable (username, password) VALUES(?,?)', [username, hasedPassword], function (error, data) {
                    if (error) throw error;
                    req.session.save(function () {                        
                        sendData.msg = "성공"
                        res.send(sendData);
                    });
                    console.log("세션 값" + req.session.id)
                });
            } else if (password != password2) {                     // 비밀번호가 올바르게 입력되지 않은 경우                  
                sendData.msg = "입력된 비밀번호가 서로 다릅니다."
                console.log("여기까지7")
                res.send(sendData);
            }
            else {                                                  // DB에 같은 이름의 회원아이디가 있는 경우            
                sendData.msg = "이미 존재하는 아이디 입니다!"
                console.log("여기까지8")
                res.send(sendData);  
            }            
        });        
    } else {
        sendData.msg = "아이디와 비밀번호를 입력하세요!"
        console.log("여기까지9")
        res.send(sendData);  
    }
});



app.post("/Import_recipe", (req, res) => {  // 데이터 받아서 결과 전송
    console.log("여기까지1")
    // 기타 사항 기본값 정의
    const kn_name = req.body.Kor_name;
    const en_name = req.body.Name;
    const rcip_img = req.body.Image;
    const rcip_taste = req.body.Taste;
    const rcip_recipe = req.body.Method;
    const rcip_garnish = req.body.Garnish;
    const rcip_explanation = req.body.Histoy;
    console.log("여기까지2")
    // 재료 변수 
    const ingredient_count = Object.keys(req.body.Ingredients).length;
    console.log("여기까지3" + ingredient_count)
    let ingredient = "";
    let volume = "";
    let optional = "";
    const sendData = { msg: "", id_recipe:"" };
    // 모든 데이터가 정의 되어 있다면 = null이 아니라면
    if (kn_name && en_name && rcip_img && rcip_taste && rcip_recipe && rcip_garnish && rcip_explanation) {
        //console.log("여기까지4" + kn_name + "11" + en_name+ "11" + rcip_img+ "11" + rcip_taste+ "11" + rcip_recipe + "11"+ rcip_garnish+ "11" + rcip_explanation)
        // 데이터 집어넣기
        // 개많네 진짜.
        conn.query('INSERT INTO users_recipe (kn_name, en_name, rcip_img, rcip_taste, rcip_recipe, rcip_garnish, rcip_explanation) VALUES(?,?,?,?,?,?,?)', [kn_name, en_name, rcip_img, rcip_taste, rcip_recipe, rcip_garnish, rcip_explanation], function(error, results) { 
            // 이후 에러 있으면 뱉기.
            console.log("여기까지5")
            if (error) throw error;
            console.log("여기까지6")
            // 에러 없으면 데이터 삽입 성공

            getId().then(id => {
                id_recipe = id
                console.log("받아온 아이디 " +id)
            }).catch(error => console.error('Error getting id:', error));
            setTimeout(function() {
            console.log("현재 아이디 발급 완료 : " + id_recipe)
                //재료 테이블 삽입
                for(i = 0; i < ingredient_count; i++){
                    ingredient = req.body.Ingredients[i].Name;
                    volume = req.body.Ingredients[i].Volume;
                    optional = req.body.Ingredients[i].Optional;
                    if (id_recipe && ingredient && volume) {
                        // 쿼리문 집어넣기
                        conn.query('INSERT INTO recipe_ingredient (id_recipe, ingredient, volume, optional) VALUES(?,?,?,?)', [id_recipe, ingredient, volume, optional], function(error, results, fields) {
                            // 이후 에러 있으면 뱉기.
                            if (error) throw error;
                            // 에러 없으면 데이터 삽입 성공.
                            sendData.msg = "성공"
                            sendData.id_recipe = id_recipe+"";
                            res.send(sendData);
                        });
                    }
                    else {
                        sendData.msg = "모든 항목을 작성해 주세요."
                        res.send(sendData);
                        return;
                    }
                } 
            }, 3000);
        });        
    } else {
        res.send(sendData);
    }
    console.log("모든 재료 삽입 완료")
    sendData.isSuccess = "모든 재료 삽입 성공"
    // res.send(sendData);
});


app.get('/getRecipes', async (req, res) => {
    try {
        const results = await new Promise((resolve, reject) => {
            conn.query('SELECT * FROM users_recipe', [], function(error, results){
                if(error) reject(error);
                
                const mappedResults = results.map((db_) => {
                    return new Promise((resolve, reject) => {
                        conn.query('SELECT * FROM recipe_ingredient where id_recipe = ?', [db_.id_recipe], function(error, ingredientResults){
                            if(error) reject(error);
                            
                            const temp = {...db_, ingredient: ingredientResults};
                            resolve(temp);
                        });
                    });
                });
                
                Promise.all(mappedResults)
                    .then(resolve)
                    .catch(reject);
            });
        });
        
        res.send(results);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


// app.get('/getRecipes', (req, res) => {    
//     conn.query('SELECT * FROM users_recipe', [], function(error, results){
        
//         if(error) throw error;
        
//         results = results.map((db_)=>{
//             let temp = {...db_}
//             conn.query('SELECT * FROM recipe_ingredient where id_recipe = ?', [db_.id_recipe], function(error, results){
//                 temp.ingredient = results
//                 console.log("temp 입니다.")
//                 console.log(temp);
//             })
//             return temp;
//         })
//         console.log("results 입니다.")
//         console.log(results);
//         res.send(results);
//     })
// })
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


// ID를 확인하고 새로운 ID를 발급하는 함수
function getId() {
    return new Promise((resolve, reject) => {
         
        conn.query('SELECT MAX(id_recipe) AS max_id FROM users_recipe', function (error, results, fields) {
            if (error) reject(error);
            else {
                console.log('The max id_recipe is: ', results[0].max_id);
                resolve(results[0].max_id);
            }
        });
    });
};
