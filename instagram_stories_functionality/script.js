let arr = [ {dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
story:"https://images.unsplash.com/photo-1529680459049-bf0340fa0755?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"},
{dp:"https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
story:"https://images.unsplash.com/photo-1513374933342-24bf646c8f5f?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{dp:"https://images.unsplash.com/photo-1441622915984-05d13dfb3d8c?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
story:"https://images.unsplash.com/photo-1441690636075-59519564be46?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{dp:"https://images.unsplash.com/photo-1495366691023-cc4eadcc2d7e?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
story:"https://images.unsplash.com/photo-1512359573855-953710d3f7a8?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{dp:"https://images.unsplash.com/photo-1555992643-a97955e6aae6?auto=format&fit=crop&q=80&w=1530&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
story:"https://images.unsplash.com/photo-1555992644-5240d9269aaf?auto=format&fit=crop&q=80&w=1530&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}]


let stories = document.querySelector(".stories-section");

let clutter = "";
arr.forEach((elem, index)=>{
    clutter += `<div class="story">
    <img id="${index}" src="${elem.dp}">
</div>`
})

stories.innerHTML = clutter
stories.addEventListener('click',(dets)=>{
    let fullStory = arr[dets.target.id].story
    let fullScreen = document.querySelector(".full-screen")
    fullScreen.style.display = "block"
    fullScreen.style.backgroundImage = `url(${fullStory})`;
    setTimeout(()=>{
        fullScreen.style.display = "none"
    },3000)
})