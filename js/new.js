///////////new terraria JS/////////////

///// 로딩 구역/////////////////////////
//이벤트 : load, DOMContentLoaded
window.addEventListener("DOMContentLoaded", ()=>{

    // 호출확인
    console.log("로딩완료");

    let boss1 = document.querySelector(".boss1");
    let boss2 = document.querySelector(".boss2");
    let boss3 = document.querySelector(".boss3");

    let f1 = document.querySelector(".f1");
    let f2 = document.querySelector(".f2");

    boss1.onmouseover = ()=>{
        f1.classList.add("on");
    };
    boss1.onmouseout = ()=>{
        f1.classList.remove("on");
    };


    boss2.onmouseover = ()=>{

        f1.classList.add("on");
        f2.classList.add("on");
    };
    boss2.onmouseout = ()=>{

        f1.classList.remove("on");
        f2.classList.remove("on");
    };

    boss3.onmouseover = ()=>{

        f2.classList.add("on");
    };
    boss3.onmouseout = ()=>{

        f2.classList.remove("on");
    };


    f1.onmouseover = ()=>{

        f1.classList.add("on");
    };
    f1.onmouseout = ()=>{

        f1.classList.remove("on");
    };

    f2.onmouseover = ()=>{

        f2.classList.add("on");
    };
    f2.onmouseout = ()=>{

        f2.classList.remove("on");
    };
});/////////////로딩구역
