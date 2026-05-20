const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let text = btn.innerHTML;
  if (text == "On") {
    btn.innerHTML = "Off";
   
    btn.classList.add("btn")
    bgtn
  } else if (text == "Off") {
    btn.innerHTML = "On";
    btn.style.color = "blue";
  }

  // alert(text);
});
