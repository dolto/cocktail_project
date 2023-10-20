import styled from "styled-components";

const Store = styled.div`
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
  .store-container {
    display: flex;
    margin: 16px;
    margin-left: 75px;
    margin-right: 75px;
    margin-top: 50px;
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
    bottom: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    text-align: center;
    justify-content: flex-end;
    background: rgba(0, 0, 0, 0.6);
  }

  .overlay h2 {
    font-family: "Sinoreta_PERSONAL_USE_ONLY";
    font-size: 80px;
    margin-bottom: 300px;
    color: #ffffff;
    -webkit-text-stroke: 1px #444444;
  }

  .right-section {
    flex: 1;
    max-height: 70vh;
    overflow-x: auto;
    color: white;
  }

  .store-item {
    display: flex;
    margin-bottom: 20px;
  }

  .item-image {
    flex: 1;
    margin-right: 20px;
  }

  .item-image img {
    /* max-width: 100%;
    height: auto; */
    width: 225px;
    height: 170px;
    object-fit: cover;
  }

  .item-info {
    flex: 3;
  }

  .item-info h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .item-info p {
    font-size: 16px;
  }
`;
export default Store;
