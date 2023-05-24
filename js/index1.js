window.onload=()=>{
    f1();
    f2();
}
function f1() {
    let start,move,num;
    let box1=document.querySelector(".box1");
    // 触摸开始
    box1.addEventListener("touchstart",function(e) {
        /**
         * e:TouchEvent
         */
        console.log('触摸开始',e);
        start=e.touches[0].pageY;
        console.log(start);
    })
    // 触摸移动
    box1.addEventListener("touchmove",(e)=>{
        console.log("触摸移动");
        move=e.touches[0].pageY;
    })
    // 触摸结束
    box1.addEventListener("touchend",function(e) {
        console.log("触摸结束",e);
        // 触摸结束时的位置
        num=start-move;
        if(start<=480 && start>=470 && num>15) {
            console.log(123);
            location.href="./index2.html";
            // setInterval(()=>{
            //     // box.offsetTop--;
            //     console.log(window.getComputedStyle(box).top);
            // },1000);
        }
    })
}
function f2() {
    let btn=document.querySelectorAll("button");
    let tired=document.querySelector(".tired");
    let alert=document.querySelector(".alert");
    let standby1=document.querySelector(".standby1");
    let standby2=document.querySelector(".standby2");
    let data={
        standby1: false,
        standby2: false,
        tired: false,
        alert: false
    }
    function nor() {
        standby1.style.display='none';
        standby2.style.display='none';
        tired.style.display='none';
        alert.style.display='none';
    }
    function func(a) {
        nor();
        a.style.display="block";
    }
    const envResolver={
        "standby1":()=>{
            return func(standby1);
        },
        "standby2":()=>{
            return func(standby2);
        },
        "alert":()=>{
            return func(alert);
        },
        "tired":()=>{
            return func(tired);
        }
    }
    data={
        standby1: true,
        standby2: false,
        tired: false,
        alert: false
    }
    // let dn=data.filters((item)=>{
    //     return item;
    // })
    btn[0].addEventListener("click",()=>{
        data={
            standby1: true,
            standby2: false,
            tired: false,
            alert: false
        }
        
        envResolver["standby1"]()
    })
    btn[1].addEventListener("click",()=>{
        data={
            standby1: false,
            standby2: true,
            tired: false,
            alert: false
        }
        envResolver["standby2"]()
    })
    btn[2].addEventListener("click",()=>{
        data={
            standby1: false,
            standby2: false,
            tired: false,
            alert: true
        }
        envResolver["alert"]()
    })
    btn[3].addEventListener("click",()=>{
        data={
            standby1: false,
            standby2: false,
            tired: true,
            alert: false
        }
        envResolver["tired"]()
    })
}