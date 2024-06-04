import React from 'react';
import ReactDom from 'react-dom/client';

import { camelCase } from 'lodash-es';

let str = 'Вітаю знову';

str = camelCase(str);

console.log(str);

function getSum(a, b) {
  return a * b;
}
const resulte = getSum(5, 6);
console.log('результат', resulte);

let number1 = 15;
let number2 = 8;
let sum = number1 + number2;
console.log(sum);

function newNumbers1() {
  let numbers1 = [1, 2, 3, 4, 5];
  return [...numbers1.slice(0, 2), 6, 7, ...numbers1.slice(2)];
}
console.log(newNumbers1());

const numbersquared = (a) => a.map((a) => a * a);
let number = [1, 3, 5, 9, 15];
console.log(number);
console.log(numbersquared(number));

const numbArray = (a) => a.map((a) => a + a);
let numb = [1, 3, 5, 9, 15];
console.log(numb);
console.log(numbArray(numb));

const element = <h1>Знову Вітаю </h1>;

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(element);
