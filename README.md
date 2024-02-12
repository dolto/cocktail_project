
# Cocktail Sense 프로젝트
React + TypeScript 칵테일 레시피 사이트


## 🖥️ 프로젝트 소개
집에서도 술을 즐길 수 있게 가지고 있는 재료에 맞춰 다양한 칵테일 레시피를 찾아주는 사이트입니다.
<br>

## 🕰️ 개발 기간
* 23.10.05일 - 23.10.21일

### 🧑‍🤝‍🧑 맴버구성
 - 팀장  : 홍도완 - 개발 총괄, 프로젝트 구조 설계, 깃허브 레포지토리 관리, 각종 버그 및 문제점 보완
 - 팀원1 : 임홍인 - 칵테일 및 매장 자료 정리, 데이터 Json파일로 저장하여 API 제작 및 데이터베이스화
 - 팀원2 : 이은비 - 피그마로 웹디자인 설계, Header/Footer 제작, 레시피 리스트•상세정보(info)•칵테일 바 페이지 제작
 - 팀원3 : 유세훈 - 피그마로 웹디자인 설계, 메인페이지 제작, 원데이크래스 리스트•상세정보 페이지 제작

### ⚙️ 개발 환경
- **Editor** : Visual Studio Code
- **Framework** : React(18.2.0)
- **Database** : 자체 제작 칵테일 레시피•칵테일 바•원데이클래스 API - <a href="https://github.com/PowerGanjiHongin/IBA_Cocktail_recipe_API" >상세보기 - Github로 이동</a>

### 로컬 호스트로 서버 열어보기
1. Server폴더에 ConnectToMySQL.js 를 생성
2. 다음과 같이 코드를 작성
'''
const mysql = require('mysql');

function connectToMySQL() {
    let connection = mysql.createConnection({
      host: '호스트이름',
      port : 포트번호,
      user: '유저명',
      password: '패스워드',
      database: 'cocktail_sense',
      });
      connection.connect(function(err) {
        if (err) {
            console.error('데이터베이스 연결에 실패했습니다. 오류: ' + err.stack);
            return '데이터베이스 연결에 실패했습니다. 오류: ' + err.stack;
        }
        console.log('데이터베이스에 성공적으로 연결되었습니다. 연결 ID: ' + connection.threadId);
    });

    return connection;
}
const options  = {
    host: '호스트이름',
    user: '유저명',
    password: '패스워드',
    database: 'cocktail_sense',
    port: 포트번호,
  
    clearExpired : true ,             // 만료된 세션 자동 확인 및 지우기 여부
    checkExpirationInterval: 10000,   // 만료된 세션이 지워지는 빈도 (milliseconds)
    expiration: 10006060*2,         // 유효한 세션의 최대 기간 2시간으로 설정 (milliseconds) 
  };
  module.exports = { connectToMySQL, options };
'''
3. 리액트 프로젝트 빌드 '''npm run build'''
4. build폴더를 Server폴더로 이동
5. Server폴더의 Server.js를 node로 실행 '''node .\Server\Server.js'''
6. Dump.zip파일을 압출풀고, mysql에 임포트 (테이블만 임포트 하는 것을 추천)
7. 사용하는 mysql계정에 mysql_native_password속성 적용 (https://1mini2.tistory.com/88)

## 📌 주요 기능
#### About US (메인 페이지)
- 메인 배너 이미지 React-fullpage 라이브러리로 자동 스크롤
#### 레시피 리스트
- 칵테일 레시피 API 연동
- ID에 맞는 정보 입력
#### 레시피 상세정보
- 맛, 재료, 제조법, 가니쉬, 설명 제공
- 리스트에서 선택한 ID값에 맞는 레시피 상세정보 출력

#### 레시피 검색바
- 칵테일 바 API 연동
- 칵테일 이름 및 재료 검색 가능
- 검색 단어를 각각의 아이템으로 묶어서 필수 조건으로 필터링하여 검색 가능
- 단순 단어 검색도 가능
#### 칵테일 바 리스트
- 칵테일 바 API 연동
- 매장 이미지, 위치, 등 상세정보 표시
#### 원데이 클래스 리스트
- 원데이클래스 API 연동
- 진행중인 원데이클래스 간단 정보 출력
#### 원데이 클래스 상세정보
- 원데이클래스 API 연동
- 결제 전 원데이클래스 상세 정보 표시
- 원데이클래스 신청 주의사항 표시

#### 로그인•회원가입
- 추후 구현 예정
<br>
<br>


## 🛠 참고사항 🛠
작업 분할을 위한 파일 정의 및, 구현해야 기능을 구현해야할 폴더를 구분함

1. src/Component: 컴포넌트와 구현해야할 기능 및 정의된 인터페이스를 담은 폴더
2. src/Component/Fn: 기능요구서에 담긴 함수들을 정의한 파일모음
3. src/Component/Fn/Interface: 프로젝트에서 받을 데이터 양식이 적힌 Interface파일 모음
4. src/Component/Header: 페이지의 상단부분에 출력할 컴포넌트들
5. src/Component/Main: 페이지의 중단부분에 출력할 컴포넌트들
6. src/Component/Footer: 페이지의 하단부분에 출력할 컴포넌트들
7. src/styled: 각 페이지의 스타일 컴포넌트들을 정의할 부분들 (vscode의 vscode-styled-components 확장 필요)
8. src/res: 각 페이지에서 사용할 사진과 같은 컨텐츠들 (안에 폴더를 만들거나 사진을 삽입하는 건 독립적으로 수행할 것)

그외 
- App.tsx 부분에 라우팅 초본 작성

현재 구현된 메서드
- 모두!

