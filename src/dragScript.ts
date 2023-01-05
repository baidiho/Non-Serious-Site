const draggableObj = document.querySelectorAll(".grid-item");

class dragObj {
  private target: any;
  onDragStart(event: any) {
    event.dataTransfer.setData("text/plain", event.target.textContent);
    this.target = event.target;
    console.log(this.target);
    console.log("start");
  }
  onDragEnd(event: any) {
    // this.target.textContent = "";
    // this.target = null;
    console.log("end");
    console.log(this.target);
  }
  onDrop(e: any) {
    if (e.target != this.target) {
      const data = e.dataTransfer.getData("text");
      e.target.textContent = data;
      console.log(this.target);
      console.log("drop");
    }
  }
}
draggableObj.forEach((element) => {
  const dragInst = new dragObj();

  element.addEventListener("dragstart", dragInst.onDragStart);
  element.addEventListener("drop", dragInst.onDrop);
  element.addEventListener("dragover", (event: any) => {
    event.preventDefault();
  });
  element.addEventListener("dragend", dragInst.onDragEnd);
});
