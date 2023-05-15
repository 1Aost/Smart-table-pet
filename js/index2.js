window.onload = () => {
    // 获取元素
    let voice = document.querySelector(".voice");
    let camera = document.querySelector(".camera");
    let set = document.querySelector(".settings");
    let time=document.querySelector(".time");
    /* 一些变量 */
    const open="#9C3232",close="#788392";
    let day=new Date();
    /* 加上以及删除动画函数 */
    function animate(obj) {
        // 按下时加上动画
        obj.classList.add("ani");
        setTimeout(()=>{
            obj.classList.remove("ani");
        },2500);
    }
    /* 匹配函数 */
    function matching(obj,regex,uu1,uu2) {
        let url = obj.children[0].src;
        if (regex.test(url)) {
            obj.children[0].src = uu2;
            obj.style.backgroundColor=close;
        } else {
            obj.children[0].src = uu1;
            obj.style.backgroundColor=open;
        }
    }
    /* 获取时间函数 */
    /* function getDay() {
        let month=day.getMonth(); //0-11
        let dd=day.getDate();
        let wek=day.getDay();//周日返回0
        let weks=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
        return (month+1)+'月'+dd+'日'+weks[wek];
    } */
    function getTime() {
        let hours=day.getHours();
        let minutes=day.getMinutes();
        hours=hours>10?hours:"0"+hours;
        minutes=minutes>10?minutes:"0"+minutes;
        return hours+":"+minutes;
    }
    time.children[0].innerHTML=getTime();
    // time.children[1].innerHTML=getDay();
    setInterval(()=>{
        time.children[0].innerHTML=getTime();
        // time.children[1].innerHTML=getDay();
    },1000);
    voice.addEventListener("click", () => {
        animate(voice);
        // 按下时修改图片背景色
        const regex1 = /\/images\/ICONS\/mic\.png$/;
        const uu1="../images/ICONS/mic.png",uu2="../images/ICONS/mic2.png";
        matching(voice,regex1,uu1,uu2);
    })
    camera.addEventListener("click", () => {
        animate(camera);
        const regex2 = /\/images\/ICONS\/cam\.png$/;
        const uu1="../images/ICONS/cam.png",uu2="../images/ICONS/cam2.png";
        matching(camera,regex2,uu1,uu2);
    })
    set.addEventListener('click', function() {
        animate(set);
        location.href = "./set.html"
    })
}