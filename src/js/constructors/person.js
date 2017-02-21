function Person (object) {
  object = object || {};
  this.cool = object.cool !== undefined;
  this.pet = function(dog_petted){dog_petted.status = "happy"}
  this.feed = function(dog_fed){dog_fed.hungry = false}
};

export { Person };
