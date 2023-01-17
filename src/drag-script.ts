let startElement: any;
class DragObj {
  onDragStart(event: any) {
    event.dataTransfer.setData("text/html", event.target.innerHTML);
    event.dataTransfer.effectAllowed = "move";
    startElement = event.target;
    event.target.classList.add("grid-item-drag");
  }
  onDragEnter(event: any) {
    event.target.classList.add("grid-item-over");
  }
  onDragLeave(event: any) {
    event.target.classList.remove("grid-item-over");
  }
  onDragEnd(event: any) {
    if (event.target != startElement) {
      event.dataTransfer.clearData();
      startElement.classList.remove("grid-item-drag");
    }
    startElement.classList.remove("grid-item-drag");
  }
  onDrop(event: any) {
    if (event.target != startElement) {
      startElement.innerHTML = event.target.innerHTML;
      event.target.innerHTML = event.dataTransfer.getData("text/html");
      event.target.classList.remove("grid-item-over");
    }
    event.target.classList.remove("grid-item-over");
  }
  onDragOver(e: any) {
    e.preventDefault();
  }
}

const dragInst = new DragObj();
const draggableObj = document.querySelectorAll(".grid-item");

draggableObj.forEach((element) => {
  element.addEventListener("dragstart", dragInst.onDragStart);
  element.addEventListener("dragenter", dragInst.onDragEnter);
  element.addEventListener("dragleave", dragInst.onDragLeave);
  element.addEventListener("drop", dragInst.onDrop);
  element.addEventListener("dragend", dragInst.onDragEnd);
  element.addEventListener("dragover", dragInst.onDragOver);
});
