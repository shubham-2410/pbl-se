let CODE=document.getElementById("code");
let num=0;

function randomNum(){
    num = Math.floor(Math.random()*1000)+1000;
    console.log(num);
    CODE.innerText=num;
}
