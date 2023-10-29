const container = document.querySelector(".container");
const heartIcon = document.querySelector("i");
let clickCount = 0;

container.addEventListener("click", () => {
    heartIcon.style.transform='translate(-50%, -50%) scale(1)'
    heartIcon.style.opacity = 0.8;

    setTimeout(()=>{
        heartIcon.style.opacity=0
    },1000)

    setTimeout(()=>{
        heartIcon.style.opacity=0
        heartIcon.style.transform='translate(-50%, -50%) scale(0)'
    },1000)

});


