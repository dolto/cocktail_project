import styled from "styled-components";

const SearchBar = styled.form`
  background-color: white;
  width: calc(100% - 10rem);
  margin: auto;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 0.5fr 2fr 0.5fr;
  height: 67px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  .keyword {
    background-color: #D9D9D9;
    border-radius: 8px;
    padding: 10px;
    font-size: 1rem;
  }
  .fa-magnifying-glass{
    margin: 0.5rem;
    scale: 1.5;
  }
  section {
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
`;

export default SearchBar;