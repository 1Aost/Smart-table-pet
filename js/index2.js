window.onload = () => {
    let voice = document.querySelector(".voice");
    let camera = document.querySelector(".camera");
    let set = document.querySelector(".settings")
    voice.addEventListener("click", () => {
        const regex1 = /\/images\/ICONS\/mic\.png$/;
        let url = voice.children[0].src;
        if (regex1.test(url)) {
            voice.children[0].src = "../images/ICONS/mic2.png"
        } else voice.children[0].src = "../images/ICONS/mic.png"
    })
    camera.addEventListener("click", () => {
        const regex2 = /\/images\/ICONS\/cam\.png$/;
        let url = camera.children[0].src;
        if (regex2.test(url)) {
            camera.children[0].src = "../images/ICONS/cam2.png"
        } else camera.children[0].src = "../images/ICONS/cam.png"
    })
    set.addEventListener('click', function() {
        location.href = "./set.html"
    })
}