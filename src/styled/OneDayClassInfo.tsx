import styled from "styled-components";

const OnedayClassInfoPage = styled.div`
  .page-container {
    padding: 20px;
    padding-left: 20rem;
    padding-right: 20rem;
    padding-top: 5rem;
    justify-content: center;
    display: flex;
  }

  .class-container {
    height: fit-content;
    width: auto;
    background-color: #252525;
    padding: 80px;
    padding-top: 60px;
  }

  h2 {
    color: white;
    font-size: 2.5rem;
    font-weight: bold;
    padding-bottom: 60px;
  }
  button{
    width: 100%;
    background-color: #4e4e4e;
    color: white;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 30px;
    border-color: transparent;
    border: 1.5px solid white;
    transition: background-color 0.3s ease;
  }
  button:hover{
    background-color: #a4a4a4;
  }
  img {
    width: 100%; /* 이미지 너비를 100%로 설정하여 부모 요소의 너비에 맞게 크기 조정 */
    height: 400px;
    object-fit: cover; /* 이미지를 가득 채우도록 설정 */
    object-position: center center; /* 이미지의 가로와 세로 중앙에 위치하도록 설정 */
    margin-bottom: 2rem;
  }
  p {
    color: white;
    font-size: 1rem;
  }
  
  .text-container{
    margin-top: 2rem;
    h2{
        padding-top: 2rem;
        font-size: 2rem;
        padding-bottom: 2rem;
    }
    p{
        padding: 10px;
    }
  }
`;

export default OnedayClassInfoPage;
