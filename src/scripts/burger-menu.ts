// let burgerButton = document.querySelector(".burger-menu");
// let nav = document.querySelector("nav");

// burgerButton.addEventListener("click", burgerMenuToggle);
// document.addEventListener("click", (e) => {
//   if (e.target != nav && nav.classList.contains("nav-open")) {
//     nav.classList.remove("nav-open");
//     burgerButton.classList.toggle("pressed");
//   }
// });
// function burgerMenuToggle(e: Event) {
//   e.stopPropagation();
//   burgerButton.classList.toggle("pressed");
//   nav.classList.toggle("nav-open");
// }

class Burger {
  public burgerButton: Element;
  public nav: Element;
  constructor() {
    this.burgerButton = document.querySelector(".burger-menu");
    this.nav = document.querySelector("nav");
    this.burgerMenuToggle = this.burgerMenuToggle.bind(this);
  }
  burgerMenuToggle(e: Event) {
    e.stopPropagation();
    this.burgerButton.classList.toggle("pressed");
    this.nav.classList.toggle("nav-open");
  }
  onInstanceInit() {
    this.burgerButton.addEventListener("click", this.burgerMenuToggle);
    document.addEventListener("click", (e) => {
      if (e.target != this.nav && this.nav.classList.contains("nav-open")) {
        this.nav.classList.remove("nav-open");
        this.burgerButton.classList.toggle("pressed");
      }
    });
  }
}
const burgerMenu = new Burger();
burgerMenu.onInstanceInit();
