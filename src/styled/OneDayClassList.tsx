import styled from "styled-components";

const OnedayClassListPage = styled.div`
  @keyframes identifier {
    0% {
      opacity: 0.05;
      transform: translate(0, 2rem);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0rem);
    }
  }
  .page-container {
    padding: 20px;
    padding-left: 10rem;
    padding-right: 10rem;
  }

  .class-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  .card{

  }

  .class-card {
    flex-direction: column;
    height: 600px;
    padding: 20px;
    border: 1px solid #3e3e3e;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    img {
      width: 100%; /* 이미지 너비를 100%로 설정하여 부모 요소의 너비에 맞게 크기 조정 */
      height: 70%;
      object-fit: cover; /* 이미지를 가득 채우도록 설정 */
      object-position: center center; /* 이미지의 가로와 세로 중앙에 위치하도록 설정 */
    }

    h2 {
      color: white;
      font-size: 1.5rem;
      margin: 0;
      padding-top: 1rem;
    }

    p {
      color: white;
      margin: 10px 0 0; /* 하단에만 margin을 추가하여 p 태그가 하단에 붙어있게 됩니다. */
    }

    a {
      text-decoration: none;
      color: black;
      font-weight: bold;
    }
  }
`;

export default OnedayClassListPage;
