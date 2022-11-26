"use strict";
var Operator;
(function (Operator) {
    Operator["Add"] = "add";
    Operator["Subtract"] = "subtract";
    Operator["Multiply"] = "multiply";
    Operator["Divide"] = "divide";
    Operator["Modulo"] = "modulo";
})(Operator || (Operator = {}));
const operations = [];
const add = function (first, second) {
    return first + second;
};
operations.push([Operator.Add, add]);
const subtract = function (first, second) {
    return first - second;
};
operations.push([Operator.Subtract, subtract]);
const multiply = function (first, second) {
    return first * second;
};
operations.push([Operator.Multiply, multiply]);
const divide = function (first, second) {
    return first / second;
};
operations.push([Operator.Divide, divide]);
const modulo = function (first, second) {
    return first % second;
};
operations.push([Operator.Modulo, modulo]);
const calculator = function (first, second, op) {
    var _a;
    const tuple = (_a = operations.find(tpl => tpl[0] === op)) !== null && _a !== void 0 ? _a : [Operator.Modulo, modulo];
    const operation = tuple[1];
    return operation(first, second);
};
console.log(calculator(4, 6, Operator.Add));
console.log(calculator(13, 3, Operator.Subtract));
console.log(calculator(2, 5, Operator.Multiply));
console.log(calculator(70, 7, Operator.Divide));
console.log(calculator(70, 7, Operator.Modulo));
