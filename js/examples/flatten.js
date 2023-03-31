// version 01
function flatten01(array) {
  return array
    .toString()
    .split(",")
    .map((v) => +v);
}

// version02
function flatten02(array) {
  return JSON.parse("[" + Array.prototype.toString.call(array) + "]");
}

// version03
function flatten03(array) {
  return Array.prototype.flat.call(array, Infinity);
}

let array = [1, 2, 3, [4, 5, [6, 7]]];

console.log("version01:", flatten01(array));
console.log("version02:", flatten02(array));
console.log("version03:", flatten03(array));
