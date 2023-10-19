import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OnedayClassListPage from "../../styled/OneDayClassList";
import ClassLocation from "../Fn/Interface/ClassLocation";
import OneDayClassLoad from "../Fn/OneDayClassLoad";

const OneDayClassList: React.FC = () => {
    const [classlists, setClassLists] = useState<ClassLocation[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const classData = await OneDayClassLoad();
                setClassLists(classData);
            } catch (error) {
                console.error("원데이 클래스 데이터를 불러오는 중 에러가 발생했습니다.", error);
            }
        };
        fetchData();
    }, []);

    return (
        <OnedayClassListPage>
            <div className="page-container">
                <div className="class-grid">
                    {classlists.map((classLocation, index) => (
                        <div key={index} className="class-card">
                            <Link to={`/OneDayClass/Info/${index}`}> {/* 이 부분이 추가된 부분 */}
                                <img src={classLocation.Image} alt={classLocation.Subtitle} />
                                <h2>{classLocation.Subtitle}</h2>
                                <p>매장명: {classLocation.Shop}</p>
                                <p>가격: {classLocation.Price}</p>
                                <p>매장명: {classLocation.Shop}</p>
                                <p>아이디: {classLocation.ID}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </OnedayClassListPage>
    );
};

export default OneDayClassList;
