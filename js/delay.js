const showBtn = document.querySelector("#showBtn");
const message = document.querySelector("#message");

function displayMessage() {
  message.textContent = "Welcome to Aptech Port Harcourt";
}

showBtn.addEventListener("click", function () {
  message.textContent = "Please wait....";

  setTimeout(displayMessage, 3000);
  
});
