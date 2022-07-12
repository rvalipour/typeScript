"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = exports.calculateDiscount = void 0;
function calculateDiscount(amount, discount) {
    return amount * (100 - discount) * 0.01;
}
exports.calculateDiscount = calculateDiscount;
function sum(...numbers) {
    return numbers.reduce((total, current) => total + current, 0);
}
exports.sum = sum;
