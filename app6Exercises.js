//a vector type
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(x, y) {
    return new Vec(this.x + x, this.y + y);
  }
  minus(x, y) {
    return new Vec(this.x - x, this.y - y);
  }
  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

let myVec = new Vec(2, 2);
console.log(myVec.plus(2, 2));
console.log(myVec.minus(2, 2));
console.log(myVec.length);

//=================================================================================//

// a group data structure... a custom representation of a set data structure in js

const Group = class {
  constructor() {
    this.content = [];
  }
  add(x) {
    if (!this.content.includes(x)) this.content.push(x);
  }
  delete(x) {
    let xInd = this.content.indexOf(x);
    if (xInd !== -1) {
      let value = this.content[xInd];
      this.content = this._remove(xInd);
      return value;
    }
  }
  _remove(index) {
    return this.content.slice(0, index).concat(this.content.slice(index + 1));
  }
  has(x) {
    return this.content.includes(x);
  }
  static from(iterable) {
    let grp = new Group();
    for (let item of iterable) {
      grp.add(item);
    }
    return grp;
  }
  get length() {
    return this.content.length;
  }

  [Symbol.iterator] = function () {
    return new groupIterator(this);
  };
};

let myGroup = Group.from([1, 2, 3, 4]);
console.log(myGroup);
console.log(myGroup.has(1));
console.log(myGroup.delete(1));
console.log(myGroup.length);
myGroup.add(5);
console.log(myGroup);

// class for iterating through the group
class groupIterator {
  constructor(group) {
    this.position = 0;
    this.group = group;
  }
  next() {
    if (this.position === this.group.length) return { done: true };
    let value = {
      position: this.position,
      value: this.group.content[this.position++],
    };
    return { value, done: false };
  }
}

for (let { position, value } of myGroup) {
  console.log(position, value);
}

/*if you have overwritten a property that came from Object.prototype, you can call that property on your object again by getting it from the Object.prototype acenstral object and calling it using Object.prototype.call(this); 
this will be the object on which you are calling it upon */
