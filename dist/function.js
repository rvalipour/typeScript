"use strict";
function calculateDiscount(amount, discount) {
    return amount * (100 - discount) * 0.01;
}
function sum(...numbers) {
    return numbers.reduce((total, current) => total + current, 0);
}
