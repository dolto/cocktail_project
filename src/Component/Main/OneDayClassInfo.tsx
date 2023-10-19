import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OneDayClassInfoPage from "../../styled/OneDayClassInfo";
import ClassLocation from "../Fn/Interface/ClassLocation";
import OneDayClassLoad from "../Fn/OneDayClassLoad";

const OneDayClassInfo: React.FC = () => {
  const index = useParams()?.index as string; // Type assertion

  const [classLocation, setClassLocation] = useState<ClassLocation | null>(
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
