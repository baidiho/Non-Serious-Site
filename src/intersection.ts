// настройки
let options = {
	threshold: [0.8]
};

// функция обратного вызова
let callback = function (entries: any) {
	console.log(entries[0].target);
};

// наблюдатель
let observer = new IntersectionObserver(callback, options);
const observableElement: any = document.querySelectorAll(".topic-container").forEach((element) => {
	observer.observe(element);
});
// console.log(observableElement);
