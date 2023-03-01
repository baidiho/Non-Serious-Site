import "./styles/style.scss";
import "./scripts/button-animation";
import "./scripts/burger-menu";
import typewriter from "./scripts/type-writter";
import observer from "./scripts/intersection";
import "./scripts/drag-script";
import "./scripts/form";
import "./scripts/status-bar";
import "./scripts/posts-controller";
import "./scripts/Singleton";

window.addEventListener("load", () => {
  typewriter();
  observer();
});
