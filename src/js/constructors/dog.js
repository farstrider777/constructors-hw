function Dog (object) {
  object = object || {};
  this.color = object.color;
  this.hungry = object.hungry;
  this.status = "normal";
}



export { Dog };
