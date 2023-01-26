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
	private form: any;
	private storageWpapper: any;
	private refreshButton: any;

	constructor() {
		this.form = document.querySelector('form[name="my"]');
		this.storageWpapper = document.querySelector(".storage-info");
		this.refreshButton = document.querySelector(".clear");

		/*bind the context because it lost when adding listener ****************************/

		this.formSumbit = this.formSumbit.bind(this);
		this.storageHandler = this.storageHandler.bind(this);
		this.clearStorage = this.clearStorage.bind(this);
		this.storageHandler = this.storageHandler.bind(this);
	}

	formSumbit(e: Event) {
		e.preventDefault();
		[...this.form.elements].forEach((element: any) => {
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

	onIntsanceInit(): void {
		this.form.addEventListener("submit", this.formSumbit);
		this.storageHandler();
	}
}
const StorageInstance = new StorageHandler();
StorageInstance.onIntsanceInit();
