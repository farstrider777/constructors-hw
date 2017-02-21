function Person (object) {
  object = object || {};
  this.cool = object.cool
  this.pet = function(dog_petted){dog_petted.status = "happy"}
};

export { Person };
