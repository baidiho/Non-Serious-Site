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
    this.burgerButton.classList.toggle("burger-menu-pressed");
    this.nav.classList.toggle("nav-open");
  }
  onInstanceInit() {
    this.burgerButton.addEventListener("click", this.burgerMenuToggle);
    document.addEventListener("click", (e) => {
      if (e.target != this.nav && this.nav.classList.contains("nav-open")) {
        this.burgerMenuToggle(e);
      }
    });
  }
}
const burgerMenu = new Burger();
burgerMenu.onInstanceInit();
