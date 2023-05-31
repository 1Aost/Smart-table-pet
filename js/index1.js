window.onload=()=>{
    f1();
    f2();
    f3();

    // 智能休眠唤醒
    // sleep_wake();

    // 眼神追踪，情绪检测
    // trace()
}

// let box2=document.querySelector('.box2')
// let box1=document.querySelector('.box1')
// let box3=document.querySelector('.box3')
// console.log(box1);
// let img = box2.getElementsByTagName('img')

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

// 智能休眠唤醒
function sleep_wake() {
    eel.function1()(function(data){
        //传入值为0，关机操作，box1隐藏，box2显示，先播放tired后close
        if(data===0){
            img.src = "../images/change/tired.gif"
            box1.style.display = 'none'
            box3.style.display = 'none'
            box2.style.display = 'block'
            setTimeout(()=>{
                img.src = "../images/change/close.gif"   
            },1700)
            setTimeout(() => {
                box1.style.display = 'none'
                box3.style.display = 'block'
                box2.style.display = 'none'
            }, 3800);
        }
        //传入值为1，开机操作，box1隐藏，box2显示，播放开机gif
        else if (data === 1){
            img.src = "../images/change/open.gif"
            box1.style.display = 'none'
            box3.style.display = 'none'
            box2.style.display = 'block'
            setTimeout(()=>{
                box1.style.display = 'block'
                box3.style.display = 'none'
                box2.style.display = 'none'
            },2600)
        }
    });
};

// 眼神追踪，情绪检测
function trace() {
    eel.function2()(function(data){
        // 数组data中存储这三个信息：0/1表示是否是人像，当为1时，才进行眼神追踪和情绪检测
        if(data[0]===1){
            //当为1时，进入该函数
            let emotion = data[1];
            let coordinate = [data[2],data[3]]

            // 情绪检测
            // 6 -- 不变化 
            // 2,4 -- hug
            // 0,1,5 -- comfort
            // 3 -- happy
            if(emotion===0||emotion===1||emotion===5){
                img.src = "../images/change/comfort.gif"
                box1.style.display = 'none'
                box3.style.display = 'none'
                box2.style.display = 'block'
                setTimeout(() => {
                    box1.style.display = 'block'
                    box3.style.display = 'none'
                    box2.style.display = 'none'
                }, 2500);
            }else if(emotion===2||emotion===4){
                img.src = "../images/change/hug.gif"
                box1.style.display = 'none'
                box3.style.display = 'none'
                box2.style.display = 'block'
                setTimeout(() => {
                    box1.style.display = 'block'
                    box3.style.display = 'none'
                    box2.style.display = 'none'
                }, 2100);
            }else if(emotion===3){
                img.src = "../images/change/happy.gif"
                box1.style.display = 'none'
                box3.style.display = 'none'
                box2.style.display = 'block'
                setTimeout(() => {
                    box1.style.display = 'block'
                    box3.style.display = 'none'
                    box2.style.display = 'none'
                }, 2400);
            }

            // 眼神追踪
        }
    });
};

function f2() {
    let box2=document.querySelector('.box2')
    let box1=document.querySelector('.box1')
    let box3=document.querySelector('.box3')
    let img = box2.querySelector('img')
    let eye1 = document.querySelector('.eye1')
    let eye2 = document.querySelector('.eye2')
    let left = eye1.querySelector('img')
    let right = eye2.querySelector('img')
    
    let btn=document.querySelectorAll("button");
    
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
        
        let data = [1,3,2,5]
        if(data[0]===1){
            //当为1时，进入该函数
            let emotion = data[1];
            let coordinate = [data[2],data[3]]
            // 6 -- 不变化 
            // 2,4 -- hug
            // 0,1,5 -- comfort
            // 3 -- happy
            if(emotion===0||emotion===1||emotion===5){
                img.src = "../images/change/comfort.gif"
                box1.style.display = 'none'
                box3.style.display = 'none'
                box2.style.display = 'block'
                setTimeout(() => {
                    box1.style.display = 'block'
                    box3.style.display = 'none'
                    box2.style.display = 'none'
                }, 2500);
            }else if(emotion===2||emotion===4){
                img.src = "../images/change/hug.gif"
                box1.style.display = 'none'
                box3.style.display = 'none'
                box2.style.display = 'block'
                setTimeout(() => {
                    box1.style.display = 'block'
                    box3.style.display = 'none'
                    box2.style.display = 'none'
                }, 2100);
            }else if(emotion===3){
                img.src = "../images/change/happy.gif"
                box1.style.display = 'none'
                box3.style.display = 'none'
                box2.style.display = 'block'
                setTimeout(() => {
                    box1.style.display = 'block'
                    box3.style.display = 'none'
                    box2.style.display = 'none'
                }, 2400);
            }
        }
    })
    
    btn[1].addEventListener("click",()=>{
        img.src = "../images/change/open.gif"
        box1.style.display = 'none'
        box3.style.display = 'none'
        box2.style.display = 'block'
        setTimeout(()=>{
            box1.style.display = 'block'
            box3.style.display = 'none'
            box2.style.display = 'none'
        },2900)
    })
    btn[2].addEventListener('click',()=>{
        let eye1=document.querySelector('.eye1').querySelector("img");
        let eye2=document.querySelector('.eye2').querySelector("img");
        let mouth=document.querySelector(".mouth").querySelector("img");
        let left=Number(window.getComputedStyle(eye1).left.slice(0,-2));
        let top=Number(window.getComputedStyle(eye1).top.slice(0,-2));
        let mL=Number(window.getComputedStyle(mouth).left.slice(0,-2));
        let timer=setInterval(()=>{
            // console.log("aaa",left,top,mL);
            if(left>70 && top > 53 && mL >98){
                // console.log(left,top,mL);
                clearInterval(timer)
            }else {
                left+=5; 
                top+=3;
                mL+=4;
            }
            // console.log("123",left,top,mL);

            eye1.style.left=left+"px";
            eye2.style.left=left+"px";
            eye1.style.top=top+"px";
            eye2.style.top=top+"px";
            mouth.style.left=mL+"px";
        },10);
    })
}

function f3() {
    let eye1=document.querySelector('.eye1').querySelector("img");
    let eye2=document.querySelector('.eye2').querySelector("img");
    let mouth=document.querySelector(".mouth").querySelector("img");
    let left=Number(window.getComputedStyle(eye1).left.slice(0,-2));
    let top=Number(window.getComputedStyle(eye1).top.slice(0,-2));
    let mL=Number(window.getComputedStyle(mouth).left.slice(0,-2));
    // console.log(left,top,mL);

    let timer=setInterval(()=>{
        if(left<10 || top<10 || mL<10) {
            clearInterval(timer);
        }else {
            left-=5;
            top-=3;
            mL-=4;
            // left+=5;
            // top-=3;
            // mL+=4;
        }
        eye1.style.left=left+"px";
        eye2.style.left=left+"px";
        eye1.style.top=top+"px";
        eye2.style.top=top+"px";
        mouth.style.left=mL+"px";
    },10);
    
    
    // mouth.style.left=""
    
}