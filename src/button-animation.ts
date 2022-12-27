let button: any = document.querySelector(".topic-demonstration-button");
function animationButton(e: any): void {
	let parent = e.target.parentNode;
	parent.classList.add("hiding");

	button.style.display = "none";
}
button.addEventListener("click", animationButton, true);
console.log(document.querySelectorAll(".topic-wrapper"));
