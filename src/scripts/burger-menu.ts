let burgerButton = document.querySelector(".burger-menu");
let modal = document.querySelector(".modal-menu");

burgerButton.addEventListener("click", burgerMenuToggle);
document.addEventListener("click", (e) => {
	// if (e.target != modal && (e.target as Element).classList.contains("modal-open")) {
	if (e.target != modal && modal.classList.contains("modal-open")) {
		modal.classList.remove("modal-open");
		burgerButton.classList.toggle("pressed");
	}
});
function burgerMenuToggle(e: Event) {
	e.stopPropagation();
	burgerButton.classList.toggle("pressed");
	modal.classList.toggle("modal-open");
}
