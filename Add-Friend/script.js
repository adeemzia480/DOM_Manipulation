let reqButton = document.querySelector("#reqButton")
let profileStatus = document.querySelector("#status")
let flag = 0;

reqButton.addEventListener('click',()=>{

    if(flag == 0){
        profileStatus.innerHTML = "Request Sent"
        profileStatus.style.color = "grey"
    
        setTimeout(()=>{
            profileStatus.innerHTML = "Friends"
            profileStatus.style.color = "green"
            reqButton.innerHTML = "UnFriend"
        },10000)
        flag = 1;
    }
    else{
        profileStatus.innerHTML = "Stranger"
        profileStatus.style.color = "orange"
        reqButton.innerHTML = "Add Friend"
        flag = 0;
    }
})