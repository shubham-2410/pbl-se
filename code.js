let CODE = document.getElementById("code");
let num = 0;

function randomNum() {
  num = Math.floor(Math.random() * 10000);
  console.log(num);
  CODE.innerText = num;
}
