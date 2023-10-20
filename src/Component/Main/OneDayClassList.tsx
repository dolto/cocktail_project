import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OnedayClassListPage from "../../styled/OneDayClassList";
import { useRecoilState } from "recoil";
import { Classs } from "../atom";

const OneDayClassList: React.FC = () => {
  //let [getclasslocations, setclasslocations] = useRecoilState<ClassLocation[]>(Classs);
  const [classLocations, setClassLocations] = useRecoilState(Classs);

  return (
    <OnedayClassListPage>
      <div className="page-container">
        <div className="class-grid">
          {classLocations.map((classLocation, index) => (
            <div key={index} className="class-card">
              <Link
                to={`/OneDayClass/Info/${classLocation.ID}`}
                className="card"
                style={{
                  transform: "translate(0, 2rem)",
                  opacity: 0.05,
                  animation: "identifier 0.7s forwards",
                  animationDelay: `${(index + 1) * 0.2}s`,
                }}>
                {" "}
                {/* 이 부분이 추가된 부분 */}
                <img src={classLocation.Image} alt={classLocation.Subtitle} />
                <h2>{classLocation.Subtitle}</h2>
                <p>매장명: {classLocation.Shop}</p>
                <p>일정: {classLocation.Schedule}</p>
                <p>가격: {classLocation.Price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </OnedayClassListPage>
  );
};

export default OneDayClassList;
