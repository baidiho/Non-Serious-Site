let burgerButton = document.querySelector(".burger-menu");
let navList = document.querySelector(".nav-list");
let navBar = document.querySelector(".nav-bar");
let modal = document.querySelector(".modal-menu");
console.log(burgerButton);
burgerButton.addEventListener("click", burgerMenuToggle);
function burgerMenuToggle() {
  burgerButton.classList.toggle("pressed");
  modal.classList.toggle('modal-open')
  // // navBar.classList.toggle("active");
  // if (navBar.classList.contains("close")) {
  //   navBar.classList.replace("close", "open");
  // } else navBar.classList.replace("open", "close");
  // // navBar.classList.replace("open", "active");
  // // console.log(navBar.classList);
}
