// (function () {
// 	const form: any = document.querySelector('form[name="my"]');
// 	const storageWpapper = document.querySelector(".storage-info");
// 	const refreshButton = document.querySelector(".clear");

// 	function formSumbit(e: Event) {
// 		e.preventDefault();
// 		// Array.from(form.elements).forEach((element: any) => {
// 		[...form.elements].forEach((element: any) => {
// 			if (element.type == "text") {
// 				window.localStorage.setItem(`${element.name}`, `${element.value}`);
// 			}
// 		});
// 		storageHandler();
// 	}

// 	function storageHandler(): void {
// 		if (window.localStorage.length == 0) {
// 			storageWpapper.classList.remove("storage-info-visible");
// 		} else {
// 			const paragraphs = document.querySelectorAll(".storage-info p");
// 			paragraphs.forEach((para: HTMLElement) => {
// 				para.textContent = window.localStorage.getItem(para.dataset.name);
// 			});
// 			storageWpapper.classList.add("storage-info-visible");
// 			refreshButton.addEventListener("click", clearStorage);
// 		}
// 	}

// 	function clearStorage() {
// 		window.localStorage.clear();
// 		refreshButton.removeEventListener("click", clearStorage);
// 		storageHandler();
// 	}

// 	window.addEventListener("load", storageHandler);
// 	form.addEventListener("submit", formSumbit);
// })();
// interface FormsElements extends HTMLFormControlsCollection {
// 	firstname: HTMLInputElement;
// 	lastname: HTMLInputElement;
// 	submit: HTMLButtonElement;
// }
class StorageHandler {
	form: any;
	storageWpapper: any;
	refreshButton: any;

	constructor() {
		this.form = document.querySelector('form[name="my"]');
		this.storageWpapper = document.querySelector(".storage-info");
		this.refreshButton = document.querySelector(".clear");
	}

	formSumbit(e: Event) {
		e.preventDefault();
		console.log(this.form);
		Array.from(this.form.elements).forEach((element: any) => {
			// [...this.form.elements].forEach((element: any) => {
			if (element.type == "text") {
				window.localStorage.setItem(`${element.name}`, `${element.value}`);
			}
		});
		this.storageHandler();
	}

	storageHandler(): void {
		if (window.localStorage.length == 0) {
			this.storageWpapper.classList.remove("storage-info-visible");
		} else {
			const paragraphs = document.querySelectorAll(".storage-info p");
			paragraphs.forEach((para: HTMLElement) => {
				para.textContent = window.localStorage.getItem(para.dataset.name);
			});
			this.storageWpapper.classList.add("storage-info-visible");
			this.refreshButton.addEventListener("click", this.clearStorage);
		}
	}

	clearStorage(): void {
		window.localStorage.clear();
		this.refreshButton.removeEventListener("click", this.clearStorage);
		this.storageHandler();
	}

	onClassInit(): void {
		this.form.addEventListener("submit", this.formSumbit);
		console.log(typeof this.form.elements);
		console.log(this.form.elements);
	}
}
const StorageInstance = new StorageHandler();
StorageInstance.onClassInit();
// StorageInstance.form.addEventListener("submit", StorageInstance.formSumbit);
// console.log(StorageInstance.form.elements);
