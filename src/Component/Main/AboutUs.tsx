import React, { useEffect, useState } from "react"; // React 및 useState, useEffect를 import해야 합니다
import img1 from "../../res/img/Aboutus-1.jpg";
import img2 from "../../res/img/Aboutus-2.jpg";
import img3 from "../../res/img/Aboutus-3.jpg";
import img4 from "../../res/img/Aboutus-4.jpeg";
import img5 from "../../res/img/Aboutus-5.jpeg";
import img6 from "../../res/img/Aboutus-6.jpeg";
//import "../Css/AboutUs.css";
import AboutUsPage from "../../styled/AboutUs";

const AboutUs = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imgStyle = {
    height: windowHeight + "px", // 이미지 높이를 브라우저 높이에 맞게 설정
  };

  return (
    <AboutUsPage>
        <div>
          <div className="section1">
            <div className="imgcontainer">
              <img className="img1" src={img1} alt="About Us" style={imgStyle} />
            </div>
            <p>
              🍸 칵테일 레시피
              <br />
              🍾 주류 구매
              <br />
              📝 원데이 클래스까지
            </p>
            <h1>한번에 만나보세요!</h1>
          </div>
          <div className="section2">
            <div className="imgcontainer">
              <img className="img2" src={img2} alt="About Us" style={imgStyle} />
            </div>
            <p>
              고생한 나를 좋은 술로 위로하고 싶을 때<br />
              친구, 연인과 함께 분위기를 내고 싶을때
              <br />
              특별한 날을 완성시키는 방법
            </p>
          </div>
          <div className="section3">
            <div className="imgcontainer">
              <img className="img3" src={img3} alt="About Us" style={imgStyle} />
            </div>
            <p>
              600여가지가 넘는
              <br />
              칵테일 레시피로
              <br />
              맛있는 주류여행을
              <br />
              떠나보세요!
            </p>
          </div>
          <div className="section4">
            <div className="imgcontainer">
              <img className="img4" src={img4} alt="About Us" style={imgStyle} />
            </div>
            <p>
              홈술을 위해 필요한
              <br />
              주류, 쉐이커, 술잔 구매까지 모두
              <br />
              Cocktail Sense에서!
            </p>
          </div>
          <div className="section5">
            <div className="imgcontainer">
              <img className="img5" src={img5} alt="About Us" style={imgStyle} />
            </div>
            <p>
              매번 모집글을 직접 찾고
              <br />
              신청따로 결제따로 해야 했던 <br />
              원데이 클래스
              <br />
              이제는 검색, 신청, 결제까지 한번에 하세요
              <br />
            </p>
          </div>
          <div className="section6">
            <div className="imgcontainer">
              <img className="img6" src={img6} alt="About Us" style={imgStyle} />
            </div>
            <p>Anyone can easily</p>
            <h1>Cocktail sense</h1>
          </div>
        </div>
    </AboutUsPage>
  );
};

export default AboutUs;
