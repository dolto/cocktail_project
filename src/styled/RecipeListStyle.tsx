import styled from "styled-components";

const RecipeListStyle = styled.form`
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
    padding-left: 90px;
    padding-right: 88.24px;
  }

  .recipe-grid {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr)); // 유연한 그리드 설정
    grid-gap: 64px;
    grid-column-gap: 12.28px;
    justify-items: center;
  }

  .recipe-card {
    width: 310px;
    height: 400px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }

  .recipe-card img {
    width: calc(100%);
    height: calc(100% - 6rem);
  }

  .recipe-card span {
    color: #828282;
    font-size: 16px;
    margin-top: 10px; 
  }
  .recipe-card h3{
    color: white;
    font-size: 24px;
  }

  .recipe-card p {
    color: #828282;
    font-size: 16px;
    margin-top: 10px; 
  }

`;
export default RecipeListStyle;
