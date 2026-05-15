const birthDate = document.querySelector("#birthDate");
const calBtn = document.querySelector("#calBtn");
const result = document.querySelector("#result");

calBtn.addEventListener("click", () => {
  const birth = new Date(birthDate.value);

  const today = new Date();
//   console.log(birth);
//   console.log(today);
// console.log((birth.is));
  let age = today.getFullYear() - birth.getFullYear();

  result.textContent = `You are ${age} years old`;
});
