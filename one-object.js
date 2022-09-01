// 1.0
const person = {
   name: 'Rajib Sarker',
   experties: ['math', 'code', 'general management', 'Lab Practice'],
   family: {
      father: 'F',
      mother: 'M',
      sister: 'S',
      brother: 'M',
   },

   show: function () {
      return `${this.name} most recently activated new functional ${this.experties[1]}`
   },
   contacts: 208364,
}
// console.log(person.show());


// 3.1
const zeroP = () => 89;
// console.log(zeroP());


// 3.2
const dividewithSevente = (number) => number / 17;
// console.log(dividewithSevente(51));


// 3.3
const numberDivideByTwo = (a, b) => (a + b) / 2;
// console.log(numberDivideByTwo(5, 4));


// 3.4
const summation = (a, b) => {
   const first = a + 7;
   const second = b + 7;
   const sum = first + second;
   return sum;
}
// console.log(summation(8, 3));


// 4.0
const arr = [14, 21, 28, 35, 42, 49, 63, 77, 84];
// let num = [];
const result = arr.map(number => number / 7);
// console.log(num);
// console.log(result);

// 5.0
/**
 * map() : .map() executes the same code on every element in an array and returns a new array with the updated elements.
 * forEach() : .forEach(), is used to execute the same code on every element in an array but does not change the array and it returns undefined.
 * .filter(): .filter() checks every element in an array to see if it meets a certain criteria and returns a new array with the elements that return truthy for the criteria.
 * find() : .find() checks every element in an array to see if it meets a certain criteria and returns first matched element
**/


// 6.0
const public = {
   number: 140000,
   income: 900000000,
   country: 'BD',
   region: 'Asia Pacific'
}

const { income } = public;
// console.log(income);

const arr2 = [12, 23, 34, 45, 56, 67, 98, 867, 5, 65, 45, 23, 21];
const balance = arr2[1];
// console.log(balance);