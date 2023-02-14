let burgerButton = document.querySelector(".burger-menu");
let navList = document.querySelector(".nav-list");
let navBar = document.querySelector(".nav-bar");
console.log(burgerButton);
burgerButton.addEventListener("click", burgerMenuToggle);
function burgerMenuToggle() {
	burgerButton.classList.toggle("pressed");
	navBar.classList.toggle("active");
}
