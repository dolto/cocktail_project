//깃허브 레포지토리의 파일 내용을 불러오는 함수

const getData = (owner: string, repo: string, path: string) => {
    // GitHub API 엔드포인트 URL 생성
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    // GitHub API로 GET 요청 보내기
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // 파일 내용은 data.content에 base64로 인코딩된 형태로 포함됩니다.
        const content = atob(data.content);

        // 파일 내용 출력 또는 처리
        console.log(content);
        document.body.innerText = content;
    })
    .catch(error => {
        console.error('에러 발생:', error);
    });
}

export default getData;