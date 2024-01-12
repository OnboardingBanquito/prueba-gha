const calculator = require('./calculator');
const  en= require('dotenv').config();

const suma = calculator.suma(2,3);

console.log(suma);

console.log(process.env.USERDEV);