import styled from "styled-components";

const AboutUsPage = styled.header`
/* AboutUs.css */

section{
  opacity: 0.3;
  transform: translate(0, 2rem);
  transition: 1s;
}
.show{
  transform: translate(0, 0);
  opacity: 1;
}

.section1{
  position: relative;
}
.section1 p {
  display: flex;
  position: absolute;
  line-height: 70px;
  top: 20%;
  left: 20%;
  color: white; /* 텍스트의 색상을 조절할 수 있습니다 */
  font-size: 3.5rem;
}
.section1 h1 {
  position: absolute;
  top: 60%;
  left: 20%;
  color: white; /* 텍스트의 색상을 조절할 수 있습니다 */
  font-size: 6rem;
}
.section2 {
  position: relative;
}
.section2 p {
  text-align: center;
  line-height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; /* 텍스트의 색상을 조절할 수 있습니다 */
  font-size: 3rem;
}
.section3 {
  position: relative;
}
.section3 p {
  text-align: right;
  line-height: 100px;
  position: absolute;
  top: 50%;
  right: 30%;
  transform: translate(50%, -50%);
  color: white; /* 텍스트의 색상을 조절할 수 있습니다 */
  font-size: 3rem;
}
.section4 {
  position: relative;
}
.section4 p {
  text-align: center;
  line-height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; /* 텍스트의 색상을 조절할 수 있습니다 */
  text-shadow: 4px 4px 4px black;
  font-size: 3rem;
}
.section5 {
  position: relative;
}
.section5 p {
  text-align: center;
  line-height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; /* 텍스트의 색상을 조절할 수 있습니다 */
  text-shadow: 4px 4px 4px black;
  font-size: 3rem;
}
.section6 {
  position: relative;
}
.section6 p {
  text-align: center;
  line-height: 100px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; /* 텍스트의 색상을 조절할 수 있습니다 */
  text-shadow: 2px 4px 2px black;
  font-size: 2rem;
}
.section6 h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; /* 텍스트의 색상을 조절할 수 있습니다 */
  text-shadow: 4px 4px 2px black;
  font-size: 6rem;
}



.imgcontainer {
  position: relative;
  width: 100%;
  text-align: center;
}
.imgcontainer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* 20% 투명도의 검은색 레이어 */
}
.imgcontainer img {
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
.img3 {
  height: 100vh; /* 이미지 높이를 브라우저 창의 높이에 맞게 조절 */
  width: auto; /* 이미지 너비를 자동으로 조절하여 비율 유지 */
}
`;

export default AboutUsPage;
