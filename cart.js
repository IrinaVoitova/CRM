'use strict';


const cart = {
  items: [],
  totalPrice: 0,
  counts: 0,
  discount: 0,

  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    }
    if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
  },

  get getDiscount() {
    return this.discount;
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.counts = 0;
    return cart;
  },

  add(name, price, count) {
    const obj = {
      name,
      price,
      count: count ?? '1',
    };
    this.items.push(obj);
    return obj;
  },

  calculateItemPrice() {
    let resultPrice = [];
    resultPrice = this.items.map(item => item.price);
    console.log(resultPrice);
    let resultCount = [];
    resultCount = this.items.map(item => item.count);
    console.log(resultCount);
    const resultSum = [];
    for (let i = 0; i < resultPrice.length; i++) {
      const a = resultPrice[i];
      const b = resultCount[i];
      resultSum.push((a * b) - a * b * this.discount / 100);
    }
    const calculatemPrice = resultSum.reduce((acc, item) => acc + item);
    return calculatemPrice;
  },

  increaseCount(z) {
    let resultCount2 = [];
    resultCount2 = this.items.map(item => item.count);
    console.log(resultCount2);
    const calculatemPrice2 = resultCount2.reduce((acc, item) =>
      Number(acc) + Number(item));
    return calculatemPrice2 + (z ?? 0);
  },
  print() {
    const ItemsStr = JSON.stringify(this.items);
    console.log(ItemsStr);
    console.log(`Общая стоимость корзины составляет ${this.totalPrice} рублей`);
  },
};


const obj1 = cart.add('томат', '16');
const obj2 = cart.add('яблоко', '9', '10');
const obj3 = cart.add('апельсин', '20', '1');
const obj4 = cart.add('огурец', '50', '12');
console.log(obj1, obj2, obj3, obj4);
console.log(cart.items);
cart.setDiscount = 'METHED';
console.log(cart.getDiscount);
cart.counts = cart.increaseCount();
console.log(cart.counts);
Object.defineProperty(cart, 'totalPrice', {
  get() {
    return cart.calculateItemPrice();
  },
  set() {},
});
cart.totalPrice = 100;
cart.print();
console.log(cart.clear());
