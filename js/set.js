// document.addEventListener('touchmove', function(event) {
//     event.preventDefault();
// }, false)

let box = document.getElementById('box')
let currentY;
let ul = document.getElementById('center')
let lis = ul.querySelectorAll('li')
box.addEventListener('touchstart', function(e) {
    var touch = e.touches[0]
    this.startY = touch.pageY;
    this.startX = touch.pageX;
    currentY = ul.offsetTop
    for (let i = 0; i < lis.length; i++) {
        const li = lis[i];
        const liRect = li.getBoundingClientRect();

    }
})
box.addEventListener('touchmove', function(e) {
    var touch = e.touches[0]
    this.endY = this.startY - touch.pageY;
    this.endX = touch.pageX;
    // console.log(this.endX);
    if ((currentY - this.endY) >= -110 && (currentY - this.endY) <= 256) {
        ul.style.top = `${currentY - this.endY}px`
    }
    for (let i = 0; i < lis.length; i++) {
        const li = lis[i];
        const liRect = li.getBoundingClientRect();

        if (liRect.top < 20 || liRect.top > 428) {
            li.style.visibility = 'hidden';
        } else if (liRect.top < 94 || liRect.top > 364) {
            li.style.width = 150 + 'px';
            li.style.marginLeft = 0 + 'px';
            li.style.visibility = 'visible';
            li.style.opacity = 0.4;
        } else if (liRect.top > 94 && liRect.top <= 148 || liRect.top > 310 && liRect.top <= 364) {
            li.style.width = 200 + 'px';
            li.style.marginLeft = -25 + 'px';
            li.style.visibility = 'visible';
            li.style.opacity = 0.6;
        } else if (liRect.top > 148 && liRect.top <= 202 || liRect.top > 256 && liRect.top <= 310) {
            li.style.width = 250 + 'px';
            li.style.marginLeft = -50 + 'px';
            li.style.visibility = 'visible';
            li.style.opacity = 0.8;
        } else if (liRect.top > 202 && liRect.top <= 266) {
            li.style.width = 300 + 'px';
            li.style.marginLeft = -75 + 'px';
            li.style.visibility = 'visible';
            li.style.opacity = 1;
        }
    }
})

box.addEventListener('touchend', function(e) {
    var touch = e.touches[0]
    var len = this.startX - this.endX
    var len2 = this.startY - this.endY
    console.log(len2/10);
    if(Math.abs(len)>100&&Math.abs(len2/10)<50){
        location.href = "./index2.html";
    }
})