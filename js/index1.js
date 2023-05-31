window.onload=()=>{
    f1();
    f2();
    // say_hello_js();
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
/**
 * 待机：暂时不做
 * 
 * function2：
 * 情绪检测，眼神追踪：（0/1,1/2/3/4/5/6，坐标）
 * 情绪检测：上方0123456切换表情变化
 *      6 -- 不变化 
 *      2,4 -- hug
 *      0,1,5 -- comfort
 *      3 -- happy
 *  
 * 眼神追踪：坐标
 * 
 * function1：
 * 智能休眠唤醒：0,1
 * 0：关机，tired完后close
 * 1：开机，open
 * 
 */
// function say_hello_js() {
//     eel.function1()(function(data){
//         //传入值为0，关机操作，box1隐藏，box2显示，先播放tired后close
//         if(data===0){
//             img.src = "../images/change/tired.gif"
//             box1.style.display = 'none'
//             box2.style.display = 'block'
//             setTimeout(()=>{
//                 img.src = "../images/change/close.gif"
//             },1700)
//         }
//         //传入值为1，开机操作，box1隐藏，box2显示，播放开机gif
        
//     });
// };
function f2() {
    
    let btn=document.querySelectorAll("button");
    let box2=document.querySelector('.box2')
    let box1=document.querySelector('.box1')
    let box3=document.querySelector('.box3')
    let img = box2.querySelector('img')
    // console.log(img);
    let data={
        // 待机
        standby1: false,
        standby2: false,
        standby3: false,

        // 开心
        happy: false,//2400ms
        // 疲惫
        tired: false,//1700ms
        // 安慰
        comfort: false,//2600ms
        // 拥抱
        hug: false,//2100ms

        // 警告
        alert: false,//2200ms

        // 开关机
        close: false,//2200ms
        open:false//2400ms
    }
    let data2 = Object.entries(data)
    function func(a) {
        // nor();
        a.style.display="block";
    }
    btn[0].addEventListener("click",()=>{
        img.src = "../images/change/tired.gif"
        box1.style.display = 'none'
        box3.style.display = 'none'
        box2.style.display = 'block'
        setTimeout(()=>{
            img.src = "../images/change/close.gif"
        },1700)

        // 关机后，怎么把盒子三放上边，你搞搞，我这个没搞完，得上课了









    })
    
    btn[1].addEventListener("click",()=>{
        img.src = "../images/change/hug.gif"
        box1.style.display = 'none'
        box2.style.display = 'block'
    })
} 