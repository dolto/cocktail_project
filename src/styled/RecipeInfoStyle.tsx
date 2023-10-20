import styled from "styled-components";

const RecipeInfoStyle = styled.div`
  .ingredient_img {
    width: 90px;
    height: 86px;
    object-fit: contain;
    background-color: white;
    margin-bottom: 0.2rem;
    border-radius: 8px;
  }
  .ingredient_list{
    display: flex;
    align-items: center;
  }
  .ingredients_info{
    margin: 0.5rem;
  }
  .recipe-container {
    display: flex;
    margin: 16px;
    margin-left: 75px;
    margin-right: 75px;
    flex-direction: row;
  }

  .left-section {
    flex: 1;
    position: sticky;
    top: 0;
  }

  .image-container {
    position: relative;
    width: 650px;
    height: 700px;
  }

  .image-container img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    text-align: center;
    justify-content: flex-end;

    .nav-info {
      display: flex;
      justify-content: space-around;
      background-color: white;
      border-radius: 40px;
      padding: 20px 50px;

      a {
        display: block;
        text-align: center;
        padding: 10px;
        color: black;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: background-color 0.3s;

        &:hover {
          background-color: #555;
          border-radius: 45%;
        }
      }
    }
  }
  .overlay h2 {
    font-family: "Sinoreta_PERSONAL_USE_ONLY";
    font-size: 105px;
    letter-spacing: 5px;
    margin-bottom: 33px;
    color: #A5ffc9;
    -webkit-text-stroke: 1px #444444; /* 텍스트 테두리의 두께와 색상 */
  }


  .right-section {
    flex: 1;
    overflow-x: auto;
    max-height: 100vh;
    color: white;
  }

  #header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #ffb2b2;
    margin-bottom: 20px;
  }

  #header span {
    font-size: 50px;
    margin: 0;
    font-family: "Sinoreta_PERSONAL_USE_ONLY";
  }

  #header h2 {
    font-size: 30px;
    margin: 8px 0;
  }

  #taste,
  #ingredients,
  #recipe,
  #garnish,
  #description {
    margin-bottom: 40px;
  }

  #taste h2,
  #ingredients h2,
  #recipe h2,
  #garnish h2,
  #description h2 {
    font-size: 35px;
    color: #ffb2b2;
    margin-bottom: 15px;
  }

  #taste p,
  #ingredients li,
  #recipe ul li,
  #garnish p,
  #description p {
    font-size: 25px;
    color: #cdcdcd;
  }
`;

export default RecipeInfoStyle;
