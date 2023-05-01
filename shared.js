var backdrop = document.querySelector(".backdrop");
var option = document.querySelector(".options");
var signup = document.getElementById("sign_up_button");
const index = document.querySelectorAll(".sign_option a");

console.log(index);

signup.addEventListener("click", function () {
  backdrop.style.display = "block";
  option.style.display = "flex";
});
backdrop.addEventListener("click", function () {
  backdrop.style.display = "none";
  option.style.display = "none";
});
