let button: any = document.querySelectorAll(".topic-demonstration-button");
let cubic = document.querySelectorAll(".cubic");
function animationButton(e: any): void {
  let parent = e.target.parentNode;
  parent.classList.add("hiding");
  e.target.style.display = "none";
  e.target.removeEventListener("click", animationButton);
  parent.onanimationend = () => {
    cubic.forEach((element) => {
      element.classList.add("cubic-visible");
    });
  };
}
console.log(button);
button.forEach((element: any) => {
  element.addEventListener("click", animationButton, true);
});
console.log(document.querySelectorAll(".topic-wrapper"));
