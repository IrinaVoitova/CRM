'use strict';


const cart = {
    items: [],
    totalPrice: 0,
    counts: 0,
    
    clear() {
        this.items = [];
        this.totalPrice = 0;
        this.counts = 0;
        return cart
    },

    Add(name, price, count) {
        const obj = {
        name: name,
        price: price,
        count: count ?? '1',
        };
        for (let key in obj) {
            this.items.push(obj)
        return obj;
        }
    },

    calculateItemPrice() {
        let resultPrice = [] = this.items.map(item => item.price);
        console.log(resultPrice);
        let resultCount = [] = this.items.map(item => item.count);
        console.log(resultCount);
        const resultSum = [];
        for (let i = 0; i < resultPrice.length; i++) {
            const a = resultPrice[i];
            const b = resultCount[i];
                resultSum.push(a * b)
        }
        const calculatemPrice = resultSum.reduce((acc, item) => {
        return acc + item
        })
        return calculatemPrice
    },

    increaseCount(z) {
        let resultCount2 = [] = this.items.map(item => item.count);
        console.log(resultCount2);
        const calculatemPrice2 = resultCount2.reduce((acc, item) => {
            return Number(acc) + Number(item)
        })
        return calculatemPrice2 + (z ?? 0)
    },
    
    getTotalPrice() {
        return `${this.totalPrice}`
    },

    print() {
        const ItemsStr = JSON.stringify(this.items)
        console.log(ItemsStr)
        console.log(`Общая стоимость корзины составляет ${this.totalPrice} рублей`)
    },
};


const obj1 = cart.Add("томат", "16");
const obj2 = cart.Add("яблоко", "9", "10");
const obj3 = cart.Add("апельсин", "20", "1");
const obj4 = cart.Add("огурец", "50", "12");
console.log(obj1);
console.log(cart.items);
cart.totalPrice = cart.calculateItemPrice();
console.log(cart.totalPrice);
cart.counts = cart.increaseCount();
console.log(cart.counts);
console.log(cart.getTotalPrice());
cart.print();
console.log(cart.clear());

