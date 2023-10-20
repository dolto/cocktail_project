import React, { useEffect, useState } from "react"; // React 및 useState, useEffect를 import해야 합니다
import img1 from "../../res/img/Aboutus-1.jpg";
import img2 from "../../res/img/Aboutus-2.jpg";
import img3 from "../../res/img/Aboutus-3.jpg";
import img4 from "../../res/img/Aboutus-4.jpeg";
import img5 from "../../res/img/Aboutus-5.jpeg";
import img6 from "../../res/img/Aboutus-6.jpeg";
import AboutUsPage from "../../styled/AboutUs";
import {SectionsContainer, Section} from 'react-fullpage';

let options = {
  anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour', 'sectionFive', 'sectionSix'],
};


const AboutUs = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    const handleScroll = () => {
      const sectionList: NodeListOf<HTMLElement> =
        document.querySelectorAll("section");
      sectionList.forEach((node) => {
        if (window.innerHeight > node.getBoundingClientRect().top) {
          //console.log("is show");
          //console.log(node);
          node.classList.add("show");
        } else {
          //console.log("is not show");
          //console.log(node);
          node.classList.remove("show");
        }
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const imgStyle = {
    height: windowHeight - 6 * parseFloat(getComputedStyle(document.documentElement).fontSize) + "px",  };

  return (
    <AboutUsPage>
      <SectionsContainer {...options}>
        <Section className="section1 show">
          <article className="imgcontainer">
            <img className="img1" src={img1} alt="About Us" style={imgStyle} />
          </article>
          <p>
            🍸 칵테일 레시피
            <br />
            🍾 주류 구매
            <br />
            📝 원데이 클래스까지
          </p>
          <h1>한번에 만나보세요!</h1>
        </Section>
        <Section className="section2">
          <article className="imgcontainer">
            <img className="img2" src={img2} alt="About Us" style={imgStyle} />
          </article>
          <p>
            고생한 나를 좋은 술로 위로하고 싶을 때<br />
            친구, 연인과 함께 분위기를 내고 싶을때
            <br />
            특별한 날을 완성시키는 방법
          </p>
        </Section>
        <Section className="section3">
          <article className="imgcontainer">
            <img className="img3" src={img3} alt="About Us" style={imgStyle} />
          </article>
          <p>
            600여가지가 넘는
            <br />
            칵테일 레시피로
            <br />
            맛있는 주류여행을
            <br />
            떠나보세요!
          </p>
        </Section>
        <Section className="section4">
          <article className="imgcontainer">
            <img className="img4" src={img4} alt="About Us" style={imgStyle} />
          </article>
          <p>
            홈술을 위해 필요한
            <br />
            주류, 쉐이커, 술잔 구매까지 모두
            <br />
            Cocktail Sense에서!
          </p>
        </Section>
        <Section className="section5">
          <article className="imgcontainer">
            <img className="img5" src={img5} alt="About Us" style={imgStyle} />
          </article>
          <p>
            매번 모집글을 직접 찾고
            <br />
            신청따로 결제따로 해야 했던 <br />
            원데이 클래스
            <br />
            이제는 검색, 신청, 결제까지 한번에 하세요
            <br />
          </p>
        </Section>
        <Section className="section6">
          <article className="imgcontainer">
            <img className="img6" src={img6} alt="About Us" style={imgStyle} />
          </article>
          <p>Anyone can easily</p>
          <h1>Cocktail sense</h1>
          <span>you can make cocktails at home</span>
        </Section>
      </SectionsContainer>
    </AboutUsPage>
  );
};

export default AboutUs;
