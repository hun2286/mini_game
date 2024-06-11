
// 프로세스
// 1. 각각의 div를 해당하는 키보드로 입력했을 때! div에게 클래스를 추가해주기
//  - 디자인의 모습을 변경하기 위해서
// 2. 각각의 div에 키보드를 땠을 때, 클래스를 제거

window.addEventListener("keydown", (e) => {
    // 사용자가 입력한 키값이 1이면 -> div의 1번째 영역에 class를 추가
    // 사용자가 입력한 키값이 2라면 -> div의 2번째 영역에 class를 추가
    let div = document.getElementById(e.key) // *******이렇게 넣어주면 여러번 반복 안해도 됨
    div.classList.add("pressed");
})

window.addEventListener("keyup", (e) => {
    let div = document.getElementById(e.key)
    div.classList.remove("pressed")
})

// 실습 정리
// 이벤트 객체를 통해서 다양한 동적인 코딩이 가능
// 사용자가 입력한 값을 받아서 컴퓨터가 알아서 처리할 수 있게 만든다.
// 리듬게임 등과 같은 사용자의 입력이 필요한 경우 반드시 event객체가 필요하다!
