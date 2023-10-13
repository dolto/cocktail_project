import styled from "styled-components";
import Sinoreta_PERSONAL_USE_ONLY from "../res/font/Sinoreta_PERSONAL_USE_ONLY.woff";

const HeadMenuPage = styled.header`
  @font-face {
  font-family: "Sinoreta_PERSONAL_USE_ONLY";
  src: url(${Sinoreta_PERSONAL_USE_ONLY}) format("woff");
}

background-color: #050505;
display: grid;
grid-template-columns: auto auto auto;
/* 그리드 레이아웃, 로고, 네비게이션, 로그인 버튼 간격 설정 */
align-items: center;
padding: 0 20px;
height: 6rem;

.container {
  display: flex;
  justify-content: space-between;
}

.content {
  display: flex;
  align-items: center;
  font-family: "Sinoreta_PERSONAL_USE_ONLY";
  font-size: 24px;
  color: white;
  margin-left: 150px;
}

.content>img {
  width: 53px;
  height: 53px;
}

.link-style {
  text-decoration: none;
  color: inherit;
  transition: font-size 0.3s ease;
}

.link-style:hover {
  font-size: 25px;
}

nav {
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
}

nav ul {
  list-style: none;
  display: flex;
  padding: 0;
}

nav li {
  margin-right: 34.31px;
}

nav li:last-child {
  margin-right: 0;
}

.login-button {
  display: flex;
  align-items: center;
}

.login-button a {
  color: white;
  font-size: 18px;
  margin-right: 20px;
  transition: font-size 0.3s ease;
}

.login-button a:hover {
  font-size: 25px;
}

.login-button button {
  background-color: #4262FF;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 20px;
  /* 둥근 테두리 설정 */
  border-color: transparent;
  /* 테두리 색을 투명으로 설정 */
  transition: background-color 0.3s ease;
}

.login-button button:hover {
  background-color: #ff6c40;
}  
`;

export default HeadMenuPage;