window.onload=()=>{
    let start,move,num;
    let box=document.querySelector(".box");
    // 触摸开始
    box.addEventListener("touchstart",function(e) {
        console.log('触摸开始');
        start=e.touches[0].pageY;
        console.log(start);
    })
    // 触摸移动
    box.addEventListener("touchmove",(e)=>{
        console.log("触摸移动");
        move=e.touches[0].pageY;
        console.log(move);
    })
    // 触摸结束
    box.addEventListener("touchend",function(e) {
        console.log("触摸结束");
        num=start-move;
        if(num>15) {
            location.href="./index2.html"
        }
    })
}