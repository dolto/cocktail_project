import styled from "styled-components";
const MyRecipePage = styled.form`
    &{
        margin: auto;
        margin-top: 3rem;
        width: calc(100% - 30rem);
    }
    .NameSet{
        width: 100%;
        display: grid;
        grid-template-columns: 10rem 1fr;
        grid-gap: 1rem;
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
    .myRecipeName{
        width: 100%;
        font-size: 2.2rem;
        color: #ffb2b2;
        font-family: "AppleSDGothicNeoSB";
    }
    #myRecipeNameInput,
    #myRecipeTheumnaleInput,
    #myRecipeEngNameInput{
        width: calc(100% - 1rem);
    }
    h2{
        font-size: 2.2rem;
        color: #ffb2b2;
        margin-bottom: 15px;
        font-family: "AppleSDGothicNeoSB";
    }
    textarea{
        width: 100%;
        resize: vertical;
        height: 15rem;
        font-size: 1rem;
        font-family: "AppleSDGothicNeoSB";
    }
    .inviewContainer{
        display: grid;
        grid-template-columns:1fr 1fr;
        grid-gap: 3rem;
    }
    .addIngredientsBtn{
        outline: none;
        width: 100%;
        font-size: 1rem;
        font-weight: bold;
        height: 2rem;
        border: #a4a4a4 0.15rem solid;
        background-color: #ffb2b2;
        font-family: "AppleSDGothicNeoSB";
        transition: 0.3s;
    }
    .addIngredientsBtn:hover{
        background-color: #ff6c40;
        transition: 0.3s;
    }
    img{
        border: #a4a4a4 0.15rem solid;
        width: 720px;
        height: 720px;
        color: #ffb2b2;
        font-family: "AppleSDGothicNeoSB";
    }
    button, textarea, input{
        border-radius: 1rem;
        outline: none;
    }
    .customIngredients{
        display: flex;
        border: #a4a4a4 0.15rem solid;
        width: calc(100% - 3rem);
        color: #ffb2b2;
        font-family: "AppleSDGothicNeoSB";
        margin: 1rem;
        padding: 0.5rem;
        justify-content: space-around;
    }

    .customIngredients{
        position: relative;
    }
    .customIngredients > input{
        height: 1rem;
    }
    .AutoWord{
        z-index: 12;
        position: absolute;
        top: 2rem;
        left: 5rem;
        background-color: #a4a4a4;
        color: black;
        cursor: pointer;
    }
    .word{
        transition: 0.3s;
    }
    .word:hover{
        transition: 0.3s;
        background-color: #ff6c40;
    }
    .choise{
        background-color: #ff6c40;
    }
    .lol{
        color: blue;
    }
    .submitBtn{
        min-width: 10rem;
        width: 30%;
        align-self: center;
        font-size: 1rem;
        font-weight: bolder;
        background-color: #ffb2b2;
        text-align: center;
        border: none;
        height: 3rem;
        transition: 0.3s;
    }
    .submitBtn:hover{
        transition: 0.3s;
        width: 100%;
        background-color: #ff6c40;
    }
    .submitNav{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
`;
export default MyRecipePage;