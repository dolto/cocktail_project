// Login.tsx (main)
// Login(페이지 Main 내부 설치)
// Login.tsx
import React, { useState, useEffect } from 'react';
// 스타일링 파일 삽입
import LoginPage from '../../styled/LoginPage';
// funtion 가져오기
import { isLogin } from '../Fn/Interface/isLogin';
import { useNavigate } from 'react-router-dom';



const Signup = () => {
  const nav = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSignup = () =>{   
    fetch('http://localhost:3001/signup', {
      method : "post",
      headers : {"Content-type": "application/json",
      Accept: "application/json",},
      body : JSON.stringify({
        userId : username, 
        userPassword : password,
        userPassword2 : password2
      })
    }).then(res =>{ 
      console.log(res.status);  // HTTP 상태 코드를 출력합니다.
      console.log(res.statusText);  // HTTP 상태 메시지를 출력합니다.
      console.log(res)
      return res.json()
    }).then((json : isLogin) => {
      console.log("msg") 
        console.log(json.msg) 
      if(json.msg === "성공"){
        nav('/login')
      }else{
        alert(json.msg);
      }
    }).catch(error => {console.log("에러 내용 : " +error)})
    
  }

  return (
      <LoginPage>
      <div className="page-container">
        <div className="login-container">
          <header>Sign up</header>

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

            <label htmlFor="password2">Check Password:</label>
            <input
              type="password"
              id="password2"
              name="password2"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />

            <button type="button" onClick={handleSignup}>
              Sign Up
            </button>
          </form>
          <p>
            Do you have an account? <a href="/signup">Sign In</a>
          </p>
        </div>
      </div>
    </LoginPage>
  );
};

export default Signup;