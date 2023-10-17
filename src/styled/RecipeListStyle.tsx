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
    grid-template-columns: repeat(4, 1fr); /* 4열 */
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
    object-fit: cover;
  }
  .recipe-card h3{
    color: white;
    font-size: 24px;
    margin-top: 10px; 
  }
  .recipe-card span {
    color: #828282;
    font-size: 16px;
  }
`;
export default RecipeListStyle;
