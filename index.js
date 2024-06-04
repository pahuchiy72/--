import { camelCase } from 'lodash-es';

let str = 'Вітаю знову';

str = camelCase(str);

console.log(str);

const sumArray = (a) => a + a;
const number = [1, 2, 3, 4, 5];
console.log(number);
console.log(sumArray(number));
