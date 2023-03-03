function clickOnStatusCircle(e: Event) {
	let pressedButton = document.querySelector(".status-item-active");
	if (pressedButton) {
		pressedButton.classList.remove("status-item-active");
	}
	(e.target as Element).classList.add("status-item-active");
}
[...document.querySelectorAll(".status-item-circle")].forEach((element) => {
	element.addEventListener("click", clickOnStatusCircle);
});
