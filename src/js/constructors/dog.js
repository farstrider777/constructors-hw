function Dog (object) {
  object = object || {};
  this.color = object.color;
  this.hungry = object.hungry === undefined;

  this.status = "normal";
}



export { Dog };
