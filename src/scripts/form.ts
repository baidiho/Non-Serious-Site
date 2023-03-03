class StorageHandler {
  private form: any;
  private storageWpapper: any;
  private refreshButton: any;

  constructor() {
    this.form = document.querySelector('form[name="my"]');
    this.storageWpapper = document.querySelector(".storage-info");
    this.refreshButton = document.querySelector(".clear");

    /*bind the context *********/

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
