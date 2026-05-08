let btnAns = document.querySelector("#btn_add");

function addTwo(a, b) {
  return a + b;
}

btnAns.addEventListener("click", () => {
  let no1 = Number(document.querySelector("#number1").value);
  let no2 = Number(document.querySelector("#number2").value);
  let display = document.querySelector(".result");

  let myAns = addTwo(no1, no2);

  display.innerHTML = `<b>${no1} + ${no2} = ${myAns}</b>`;
});
