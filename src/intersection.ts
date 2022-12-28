function onLoadObserver(): void {
  // настройки
  let options = {
    threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  };

  //Callback function
  let callback = function (entries: any) {
    if (entries[0].isIntersecting) {
      console.log(entries[0]);
      entries[0].target.classList.add("topic-description-animated");
      observer.unobserve(entries[0].target);
    }
  };

  // наблюдатель
  let observer = new IntersectionObserver(callback, options);

  const observableElement: any = document.querySelectorAll(".topic-description");

  observableElement.forEach((element: any) => {
    observer.observe(element);
  });
}
window.addEventListener("load", () => onLoadObserver());
// // console.log(observableElement);
