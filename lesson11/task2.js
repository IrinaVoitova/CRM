'use strict';

const rectangle = {
  get area() {
    return (this.trueWidth * this.trueHeight) + `см^2`;
  },
  get perimeter() {
    return (this.trueWidth + this.trueHeight) * 2 + `см`;
  },
  set width(w) {
    if (typeof w === 'number') {
      this.trueWidth = w;
    }
  },
  set height(h) {
    if (typeof h === 'number') {
      this.trueHeight = h;
    }
  },
  trueWidth: 5,
  trueHeight: 5,
};
rectangle.width = 25;
rectangle.height = 7;

console.log(rectangle);
console.log(rectangle.perimeter);
console.log(rectangle.area);
