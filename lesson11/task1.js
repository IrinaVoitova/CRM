'use strict';


const foon = (arr) => {
  const getRandom = () => {
    const x = Math.trunc(Math.random() * 11);
    return x;
  };
  const z = getRandom();
  arr.push(z);
  const y = arr.reduce((acc, item) =>
    acc + item);
  if (y < 50) {
    return foon(arr);
  }
  return arr;
};
console.log(foon([1, 2]));
