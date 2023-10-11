칵테일 프로젝트
-


변동사항
-
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
- recipeLoad() 레시피 로드
- cocktailNameLoad() 레시피 이름 로드
- keywordLoad() 레시피의 재료 목록 로드
- inputRecipeCocktailName(string) 입력받은 문자열에서 칵테일 자동완성문 리스트
- inputRecipeKeyword(string) 입력받은 문자열에서 재료 자동완성문 리스트 반환
