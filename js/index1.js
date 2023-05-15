window.onload=()=>{
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
            location.href="./index2.html";
            // setInterval(()=>{
            //     // box.offsetTop--;
            //     console.log(window.getComputedStyle(box).top);
            // },1000);
        }
    })
}