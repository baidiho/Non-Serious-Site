function onLoadObserver(): void {
  // настройки
  let options = {
    threshold: [0.25],
  };
  //Callback function
  let callback = function (entries: any) {
    if (entries[0].isIntersecting) {
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
