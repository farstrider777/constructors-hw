function Person (object) {
  object = object || {};
  this.cool = object.cool !== undefined;
  this.pet = function(dogPetted){dogPetted.status = "happy";};
  this.feed = function(dogFed){dogFed.hungry = false;};
}

export { Person };
