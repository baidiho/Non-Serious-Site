const form: any = document.querySelector('form[name="my"]');
const elements: any = form.elements;
console.log(form);
function formSumbit(e: Event) {
  e.preventDefault();
  window.localStorage.setItem("firstname", elements.firstname.value);
  window.localStorage.setItem("lastname", elements.lastname.value);
}
form.addEventListener("submit", formSumbit);
