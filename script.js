const toggle = document.querySelector("#icon");
const body = document.querySelector("body");
const container = document.querySelector(".container")

toggle.addEventListener("click", function () {
    this.classList.toggle("bi-moon");
    if (this.classList.toggle("bi-brightness-high")){
        body.style.background = "white"
        body.style.color = "black"
        container.style.background = "rgba(85, 78, 78, .4)";
        body.style.transition = "1.5s"
    }else{
        body.style.background = "black";
        body.style.color = "white";
        container.style.background = "rgba(255, 255, 255, 0.2)";
        body.style.transition = "1.5s"
        
    }
})