class DrawingArrowLine extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    if (this.firstLineIsDrawn) {
    } else {
      this.origX = coord[0];
      this.origY = coord[1];
    }
  }

  onDragging(coord, event) {
    if (this.firstLineIsDrawn) {
      this.contextDraft.strokeStyle = "#df4b26";
      this.contextDraft.lineJoin = "round";
      this.contextDraft.lineWidth = 5;
      // this.contextDraft.lineCap = "round";
      // this.contextDraft.strokeStyle = canvasSettings.colorStroke;
      // this.contextDraft.lineWidth = canvasSettings.brushSize;
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      this.contextDraft.lineTo(coord[0], coord[1]);
      this.contextDraft.stroke();
    } else {
      this.contextDraft.strokeStyle = "#df4b26";
      this.contextDraft.lineJoin = "round";
      this.contextDraft.lineCap = "round";
      this.contextDraft.lineWidth = 5;
      // this.contextDraft.strokeStyle = canvasSettings.colorStroke;
      // this.contextDraft.lineWidth = canvasSettings.brushSize;
      this.contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      this.contextDraft.lineTo(coord[0], coord[1]);
      this.contextDraft.stroke();
    }
  }

  onMouseMove() {}
  onMouseUp(coord, event) {
    if (this.firstLineIsDrawn) {
      this.contextReal.strokeStyle = "#df4b26";
      this.contextReal.lineJoin = "round";
      this.contextReal.lineWidth = 5;
      // this.contextReal.lineCap = "round";
      // this.contextReal.strokeStyle = canvasSettings.colorStroke;
      // this.contextReal.lineWidth = canvasSettings.brushSize;
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.beginPath();
      this.contextReal.moveTo(this.origX, this.origY);
      this.contextReal.lineTo(coord[0], coord[1]);
      this.contextReal.stroke();
    } else {
      this.contextDraft.strokeStyle = "#df4b26";
      this.contextReal.lineJoin = "round";
      this.contextReal.lineCap = "round";
      // this.contextReal.strokeStyle = canvasSettings.colorStroke;
      // this.contextReal.lineWidth = canvasSettings.brushSize;
      this.endX = coord[0];
      this.endY = coord[1];
      this.contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      this.contextDraft.lineTo(this.endX, this.endY);
      this.contextDraft.stroke();
      this.firstLineIsDrawn = true;
    }
  }
  onMouseLeave() {}
  onMouseEnter() {}
}