///////////CGV 메인페이지 JS/////////////

///// 로딩 구역/////////////////////////
//이벤트 : load, DOMContentLoaded
window.addEventListener("DOMContentLoaded", ()=>{

    // 호출확인
    console.log("로딩완료");

    //////////////////////////////////////////////////
    // 극장가는길 클릭시 구글맵 보이기//////////////////
    /////////////////////////////////////////////////
    // 이벤트 대상 : .goMV
    let boss1 = document.querySelector(".boss1");
    // 변경대상 : .gmap
    let f1 = document.querySelector(".f1");


    // 변경방법 : goMV 클릭시 gmap에 클래스 "on" 넣기빼기
    // 사용 메서드 : classList.toggle()
    boss1.onmouuseover = ()=>{
        //구글맵박스에 on 넣기
        f1.classList.add(".on");
    };

});/////////////로딩구역
