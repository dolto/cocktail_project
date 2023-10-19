import styled from "styled-components";

const SearchBar = styled.form`
#autoword{
  z-index: 1;
}
header{
    text-align: center;
    font-family: "Sinoreta_PERSONAL_USE_ONLY";
    color: white;
    font-size: 10rem;
    letter-spacing: 10px;
    grid-column-start: 1;
    grid-column-end: 4;
  }
  .keyword {
    background-color: #D9D9D9;
    border-radius: 8px;
    padding: 10px;
    font-size: 1rem;
    transition: 0.3s;
    user-select: none;
  }
  .keyword:hover{
    background-color: #737579;
  }
  .fa-magnifying-glass{
    margin: 0.5rem;
    scale: 1.5;
  }
  #format{
    position: relative;
    background-color: white;
    width: calc(100% - 20rem);
    margin: auto;
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: 0.5fr 2fr 0.5fr;
    min-height: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-top: 2rem;
    overflow: visible;
  }
  article {
    justify-content: center;
    align-items: center;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  #category {
    display: block;
    height: 43px;
    margin-left: 1rem;
    margin-right: 1rem;
    text-align: center;
    border-color: transparent;
    background-color: transparent;
    color: #565D70;
    font-size: 1rem;
  }
  #input_area{
    display: flex;
    height: 43px;
  }
  #input{
    display: block;
    width: 100%;
    height: 43px;
    font-size: 1rem;
    border-radius: 10px;
    border-color: transparent;
    background-color: transparent;
  }
  #submit{
    display: block;
    width: 100%;
    height: 43px;
    border-radius: 10px;
    font-size: 1rem;
    background: linear-gradient( to top, #050810, #737579);
    color: white;
  }
  #autoword {
    position: absolute;
    background-color: #D9D9D9;
    top: 67px;
    left: 16%;
    right: 16%;
  }
  .nav{
    padding: 0.5rem;
    transition: 0.3s;
  }
  .nav:hover{
    background-color: #737579;
    user-select: none;
  }
  .lol{
    color: blue;
  }
`;

export default SearchBar;