import img1 from "../res/img/Aboutus-1.jpg";
import img2 from "../res/img/Aboutus-2.jpg";
import img3 from "../res/img/Aboutus-3.jpg";
import img4 from "../res/img/Aboutus-4.jpeg";
import img5 from "../res/img/Aboutus-5.jpeg";
import "../Css/AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <div>
        <div className="imgcontainer">
          <img className="img1" src={img1} alt="About Us" />
        </div>
        <div className="imgcontainer">
          <img className="img2" src={img2} alt="About Us" />
        </div>
        <div className="imgcontainer">
          <img className="img3" src={img3} alt="About Us" />
        </div>
        <div className="imgcontainer">
          <img className="img4" src={img4} alt="About Us" />
        </div>
        <div className="imgcontainer">
          <img className="img5" src={img5} alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
