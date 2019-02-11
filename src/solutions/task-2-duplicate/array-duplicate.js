'use strict'

const storage = {};

const backupMethod = (methodProperty) => {
  storage[methodProperty.name] = methodProperty;
}

const restoreMethod = (methodProperty) => {
  methodProperty = storage[methodProperty.name];
}

const addDuplicateMethod = () => {
  Array.prototype.duplicate = function () {
    return this.concat(this);
  }
}

export const arrayDuplicate = {
  enable: () => {
    if (!!Array.prototype.duplicate) {
      backupMethod(Array.prototype.duplicate)
    }
    addDuplicateMethod()
  },
  disable: () => {
    !!storage.duplicate ? restoreMethod(Array.prototype.duplicate) : delete Array.prototype.duplicate;
  }
}
