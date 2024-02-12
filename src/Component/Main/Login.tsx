// Login.tsx (main)
// Login(페이지 Main 내부 설치)
// Login.tsx
import React, { useState, useEffect } from 'react';
// 스타일링 파일 삽입
import LoginPage from '../../styled/LoginPage';
// funtion 가져오기
import { isLogin } from '../Fn/Interface/isLogin';
import session from 'express-session';
import { useRecoilState } from 'recoil';
import { SessionID } from '../atom';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [getSessionID, setSessionID] = useRecoilState<string|null>(SessionID);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleLogin = () =>{   
    fetch('http://localhost:3001/login', {
      method : "post",
      headers : {"Content-type": "application/json",
      Accept: "application / json",},
      body : JSON.stringify({
        userId : username, userPassword : password
      })
    }).then(res =>{ 
      console.log(res.status);  // HTTP 상태 코드를 출력합니다.
      console.log(res.statusText);  // HTTP 상태 메시지를 출력합니다.
      console.log(res)
      return res.json()
    }).then((json) => {
        console.log(json) 
        console.log(json.msg)
        if(json.is_logined){
          
          setSessionID(json.is_logined);
          
          nav("/");
          // 쿠키에 데이터 저장
          // document.cookie = `Session_id=${json.is_logined}` + "; path=/";
          // console.log("쿠키 형태")
        }else{
          alert(json.msg)
        }
      if(json.is_logined === true){
      }
    }).catch(error => {console.log("에러 내용 : " +error)})
    
  }

  return (
    <LoginPage>
      <div className="page-container">
        <div className="login-container">
          <header>Login</header>
          <form>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </form>
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </LoginPage>
  );
};

export default Login;