(function () {
	const form: any = document.querySelector('form[name="my"]');

	const storageWpapper = document.querySelector(".storage-info");
	const refreshButton = document.querySelector(".clear");

	function formSumbit(e: Event) {
		e.preventDefault();
		Array.from(form.elements).forEach((element: any) => {
			if (element.type == "text") {
				window.localStorage.setItem(`${element.name}`, `${element.value}`);
			}
		});
		storageHandler();
	}

	function storageHandler(): void {
		if (window.localStorage.length == 0) {
			storageWpapper.classList.remove("storage-info-visible");
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
})();

// class StorageHandler {
// 	form: any = document.querySelector('form[name="my"]');
// 	elements: any = this.form.elements;
// 	storageWpapper = document.querySelector(".storage-info");
// 	refreshButton = document.querySelector(".clear");

// 	storageHandler(): void {
// 		if (window.localStorage.length == 0) {
// 			this.storageWpapper.classList.remove("storage-info-visible");
// 		} else {
// 			const paragraphs = document.querySelectorAll(".storage-info p");
// 			paragraphs.forEach((para: HTMLElement) => {
// 				para.textContent = window.localStorage.getItem(para.dataset.name);
// 			});
// 			this.storageWpapper.classList.add("storage-info-visible");
// 			this.refreshButton.addEventListener("click", this.clearStorage);
// 		}
// 	}
// 	formSumbit(e: Event) {
// 		e.preventDefault();
// 		Array.from(this.elements).forEach((element: any) => {
// 			if (element.type == "text") {
// 				window.localStorage.setItem(`${element.name}`, `${element.value}`);
// 			}
// 		});
// 		this.storageHandler();
// 	}
// 	clearStorage() {
// 		window.localStorage.clear();
// 		this.refreshButton.removeEventListener("click", this.clearStorage);
// 		console.log("clear is work");
// 		this.storageHandler();
// 	}
// }
// const storageExemplar = new StorageHandler();
// window.addEventListener("load", storageExemplar.storageHandler);
// storageExemplar.form.addEventListener("submit", storageExemplar.formSumbit);
