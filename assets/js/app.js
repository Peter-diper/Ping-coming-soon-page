const emailInput = document.querySelector(".form--input");
const form = document.querySelector("#main--form");
const erorrMessage = document.querySelector("#error--messsage");
const headerMessage = document.querySelector("h1");
console.log("first");
// event
form.addEventListener("submit", check);

// function
function check(e) {
  e.preventDefault();
  const emailValue = emailInput.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    emailValue.indexOf("@") === -1 ||
    emailValue.length <= 11 ||
    !emailPattern.test(emailValue)
  ) {
    erorrMessage.textContent = "Please provide a valid email address";
    erorrMessage.style.color = "red";
    emailInput.classList.add("form--input--invalid");
    return;
  }

  erorrMessage.style.color = "white";
  emailInput.classList.remove("form--input--invalid");
  headerMessage.textContent = `We Will Send You An Email to ${emailValue} `;
  document.querySelector(".main--form--footer").innerHTML = "";
}
