import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OneDayClassInfoPage from "../../styled/OneDayClassInfo";
import ClassLocation from "../Fn/Interface/ClassLocation";
import OneDayClassLoad from "../Fn/OneDayClassLoad";
import LocationInfo from "../Fn/Interface/LocationInfo";

const OneDayClassInfo: React.FC = () => {
  const index = useParams()?.index as string; // Type assertion

  const [classLocation, setClassLocation] = useState<ClassLocation | null>(
    null
  );
  const [locationInfo, setLocationInfo] = useState<LocationInfo | null>(
    null
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const classData = await OneDayClassLoad();
        const selectedClass = classData[parseInt(index)];
        setClassLocation(selectedClass);
      } catch (error) {
        console.error(
          "원데이 클래스 데이터를 불러오는 중 에러가 발생했습니다.",
          error
        );
      }
    };
    fetchData();
  }, [index]);

  return (
    <OneDayClassInfoPage>
      {classLocation && (
        <div className="page-container">
          <div className="class-container">
            <h2>{classLocation.Subtitle}</h2>
            <img src={classLocation.Image} alt={classLocation.Subtitle} />
            <button>클래스 신청하기</button>
            <div className="text-container">
              <h2>클래스 일정 및 정보</h2>
              <p>{classLocation.Address}</p>
              <p>매장명: {classLocation.Shop}</p>
              <p>{classLocation.Schedule}</p>
              <p>가격: {classLocation.Price}</p>
              <p>{classLocation.Address_category}</p>
              <h2>클래스 진행</h2>
              <p>{locationInfo?.Infomation}</p>
            </div>
          </div>
        </div>
      )}
    </OneDayClassInfoPage>
  );
};

export default OneDayClassInfo;
