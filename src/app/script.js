const form = document.querySelector("form");
const email = document.getElementById("mail");
const error = document.getElementById("error")

const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

const isValidEmail = () => {
  const validity = email.value.length !== 0 && emailRegExp.test(email.value);
  return validity;
};

const setEmailClass = (isValid) => {
  email.className = isValid ? "valid" : "invalid";
};

const updateError = (isValid) => {
  if (isValid) {
    error.textContent = "";
    error.removeAttribute("class");
  } else {
    error.textContent = "I expect an email, darling!";
    error.setAttribute("class", "active");
  }
};

const handleInput = () => {
  const validity = isValidEmail();
  setEmailClass(validity);
  updateError(validity);
};

const handleSubmit = (e) => {
  e.preventDefault();

  const validity = isValidEmail();
  setEmailClass(validy);
  updateError(validity);
};

const validity = isValidEmail();
setEmailClass(validity);

email.addEventListener("input", handleInput);

form.addEventListener("submit", handleSubmit);

