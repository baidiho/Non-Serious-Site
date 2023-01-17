const form: any = document.querySelector('form[name="my"]');
const elements: any = form.elements;
const storageWpapper = document.querySelector(".storage-info");
const refreshButton = document.querySelector(".clear");

function formSumbit(e: Event) {
	e.preventDefault();
	Array.from(elements).forEach((element: any) => {
		if (element.type == "text") {
			window.localStorage.setItem(`${element.name}`, `${element.value}`);
		}
	});
	storageHandler();
}

function storageHandler() {
	if (window.localStorage.length == 0) {
		storageWpapper.classList.remove("storage-info-visible");
		return;
	} else {
		const paragraphs = document.querySelectorAll(".storage-info p");
		paragraphs.forEach((para: HTMLElement) => {
			para.textContent = window.localStorage.getItem(para.dataset.name);
		});
		storageWpapper.classList.add("storage-info-visible");
		refreshButton.addEventListener("click", clearStorage);
	}
}
function clearStorage() {
	window.localStorage.clear();
	refreshButton.removeEventListener("click", clearStorage);
	storageHandler();
}

window.addEventListener("load", storageHandler);
form.addEventListener("submit", formSumbit);
async function start() {
	return await Promise.resolve("asyns is working");
}
start().then(console.log);

// const form: any = document.querySelector('form[name="my"]');
// const elements: any = form.elements;
// const refreshButton = document.querySelector(".clear");
// function formSumbit(e: Event) {
// 	e.preventDefault();
// 	window.localStorage.setItem("firstname", elements.firstname.value);
// 	window.localStorage.setItem("lastname", elements.lastname.value);
// 	storageHandler();
// }

// function storageHandler() {
// 	if (window.localStorage.length == 0) {
// 		console.log("i am empty");
// 		const asdas = document.querySelector(".storage-info");
// 		asdas.classList.remove("storage-info-visible");
// 		return;
// 	} else {
// 		const paragraphs = document.querySelectorAll(".storage-info p");
// 		paragraphs.forEach((para: HTMLElement) => {
// 			para.textContent = window.localStorage.getItem(para.dataset.name);
// 		});
// 		const asdas = document.querySelector(".storage-info");
// 		asdas.classList.add("storage-info-visible");
// 		refreshButton.addEventListener("click", clearStorage);
// 	}
// }
// function clearStorage() {
// 	window.localStorage.clear();
// 	refreshButton.removeEventListener("click", clearStorage);
// 	storageHandler();
// }

// window.addEventListener("load", storageHandler);
// form.addEventListener("submit", formSumbit);
// class StorageForm {

// }
