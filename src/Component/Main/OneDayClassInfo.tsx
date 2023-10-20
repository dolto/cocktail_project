import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import OneDayClassInfoPage from "../../styled/OneDayClassInfo";
import ClassLocation from "../Fn/Interface/ClassLocation";
import OneDayClassLoad from "../Fn/OneDayClassLoad";
import { useRecoilValue, useRecoilState } from "recoil";
import { Classs } from "../atom";

const OneDayClassInfo: React.FC = () => {
//   const index = useParams()?.index as string; // Type assertion

//   const [classLocation, setClassLocation] = useState<ClassLocation | null>(
//     null
//   );
const [classLocations, setClassLocations] = useRecoilState(Classs);
const [getData, setData] = useSearchParams();
const id = getData.get('id');

useEffect(() => {
    const fetchData = async () => {
      try {
        // 클래스 데이터가 사용 가능하지 않은 경우에만 클래스 데이터를 가져옵니다.
        if (classLocations.length === 0) {
          const loadedClassLocations = await OneDayClassLoad();
          setClassLocations(loadedClassLocations);
        }
      } catch (error) {
        console.error("클래스 데이터를 불러오는 중 오류 발생:", error);
      }
    };

    fetchData();
  }, [classLocations, setClassLocations]);
  const classLocation = classLocations.find((location) => location.ID === id);
  
  return (
    <OneDayClassInfoPage>
      {classLocation && (
        <main className="page-container">
          <section className="class-container">
            <h2>{classLocation.Subtitle}</h2>
            <img src={classLocation.Image} alt={classLocation.Subtitle} />
            <button>클래스 결제하기</button>
            <article className="text-container">
              <h2>클래스 신청 주의사항</h2>
              <p>
                해당 클래스의 일정 및 정보, 요약 및 공지, 클래스 진행순서를
                숙지하고 결제 해주시기 바랍니다.
              </p>
              <p>
                클래스 결제시 해당 사항에 대해 숙지하고 동의한 것으로 간주
                합니다.
              </p>
              <p>클래스에 대한 문의는 해당 진행자에게 문의하시기 바랍니다.</p>
              <h2>클래스 일정 및 정보</h2>
              <p>주소 - {classLocation.Address}</p>
              <p>매장명 - {classLocation.Shop}</p>
              <p>일정 - {classLocation.Schedule}</p>
              <p>가격 - {classLocation.Price}</p>
              <p>{classLocation.Address_category}</p>
              <h2>클래스 요약 및 공지</h2>
              <p style={{ lineHeight: "2rem" }}>
                {classLocation.Infomation.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    <div>{line}</div>
                  </React.Fragment>
                ))}
              </p>
              <h2>클래스 진행</h2>
              <p style={{ lineHeight: "2rem" }}>
                {classLocation.Curriculum.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    <div>{line}</div>
                  </React.Fragment>
                ))}
              </p>
            </article>
          </section>
        </main>
      )}
    </OneDayClassInfoPage>
  );
};

export default OneDayClassInfo;
