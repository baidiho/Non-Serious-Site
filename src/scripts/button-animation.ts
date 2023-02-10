let button: NodeListOf<Element> = document.querySelectorAll(".topic-button");
let cubic: NodeListOf<Element> = document.querySelectorAll(".cubic");
function animationButton(e: PointerEvent): void {
  let parent = (e.target as Element).parentNode as HTMLElement;
  parent.classList.add("facade-removing");
  e.target.removeEventListener("click", animationButton);
  parent.onanimationend = () => {
    cubic.forEach((element) => {
      element.classList.add("cubic-visible");
      parent.remove();
    });
  };
}

button.forEach((element: Element) => {
  element.addEventListener("click", animationButton);
});
