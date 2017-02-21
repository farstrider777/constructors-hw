function Person (object) {
  object = object || {};
  this.cool = object.cool
  this.pet = function(){sadie.status = "happy"}
};

export { Person };
