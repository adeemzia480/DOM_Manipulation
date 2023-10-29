const main = document.querySelector("#main");
const cursor = document.querySelector(".cursor");
  
main.addEventListener('mousemove', (event) => {
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
});
  