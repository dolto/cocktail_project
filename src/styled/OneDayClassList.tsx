import styled from "styled-components";

const OnedayClassListPage = styled.div`
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

  .class-card {
    background: #f7f7f7;
    flex-direction: column;
    height: 370px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    img {
      max-width: 100%;
      height: auto;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 1.5rem;
      margin: 0;
    }

    p {
      margin: 10px 0;
    }

    a {
      text-decoration: none;
      color: black;
      font-weight: bold;
    }
  }
`;

export default OnedayClassListPage;
