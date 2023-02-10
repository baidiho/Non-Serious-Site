let button: NodeListOf<Element> = document.querySelectorAll(".topic-button");
let cubic: NodeListOf<Element> = document.querySelectorAll(".cubic");
function animationButton(e: PointerEvent): void {
  let clickTarget = e.target as Element;
  let parent = clickTarget.parentNode as HTMLElement;
  parent.classList.add("facade-removing");
  clickTarget.removeEventListener("click", animationButton);
  clickTarget.remove();
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
