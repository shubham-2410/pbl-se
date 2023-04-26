var backdrop = document.querySelector(".backdrop");
var option = document.querySelector(".options");
var signup = document.getElementById("sign_up_button");
var back = document.getElementById("back");

signup.addEventListener("click", function () {
  backdrop.style.display = "block";
  option.style.display = "flex";
});
backdrop.addEventListener("click", function () {
  backdrop.style.display = "none";
  option.style.display = "none";
});
