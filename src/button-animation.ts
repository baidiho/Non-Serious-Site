let button: any = document.querySelector(".button-animation");
let cubic = document.querySelectorAll(".cubic");
function animationButton(e: any): void {
	let parent = e.target.parentNode;
	parent.classList.add("hiding");
	button.style.display = "none";
	button.removeEventListener("click", animationButton);
	parent.onanimationend = () => {
		cubic.forEach((element) => {
			element.classList.add("cubic-visible");
		});
	};
}
button.addEventListener("click", animationButton, true);
console.log(document.querySelectorAll(".topic-wrapper"));
