window.addEventListener("DOMContentLoaded", function () {
    const box = document.getElementById("box");
    const info = this.document.getElementById("info");
    

    box.addEventListener("mouseenter", function () {
        info.innerHTML = getComputedStyle(box).width;
        
        // box.classList.replace("mouseOut","mouseIn");

    })

    box.addEventListener("mouseout", function () {
        // box.classList.replace("mouseIn","mouseOut");

    })
})