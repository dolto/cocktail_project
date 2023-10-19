import styled from "styled-components";

const FooterStyle = styled.div`
  display: flex;
  justify-content: right;
  padding: 20px;

  .footer-container {
    display: flex;
    flex-direction: row; 
  }

  .Info {
    margin-right: 80px;
  }

  .Info h1 {
    font-size: 24px;
    color: white;
    margin-bottom: 30px;
  }

  .Info span {
    font-size: 14px;
    color: #9B9B9B;
    margin-bottom: 30px;
  }


  .Header-nav,
  .Personal-page {
    margin-right: 80px;
  }

  .Header-nav h1,
  .Personal-page h1 {
    font-size: 24px;
    color: white;
    margin-bottom: 30px;
  }

  li {
    margin-bottom: 18px;
  }

  a {
    text-decoration: none;
    color: #9B9B9B;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default FooterStyle;
