
const value = [0, 1, -3, -2, -1, 2, 3, 7, 9, 8, 4, 10];

console.log("This our Unsorted Value = " + value);

console.log("This is our Sorted Values = " + value.sort((a, b) => (a < b ? -1 : 1)));

let Lower_Value = 0;
let Higher_Value = value.length - 1;
let Mid_Value = 0;

function binarySearch(value, target) {

  while (Lower_Value <= Higher_Value) {
    Mid_Value = Math.floor((Lower_Value + Higher_Value) / 2);

    if (value[Mid_Value] === target) {
      console.log("My Key  Target Number: " + value[Mid_Value]);
      return Mid_Value; // return the index of the found element
    }
    if (value[Mid_Value] < target) {
      Lower_Value = Mid_Value + 1;
    } else {
      Higher_Value = Mid_Value - 1;
    }
  }

  console.log("Target Number not found in array");
  return -1; // indicate that target number was not found
}

const result = binarySearch(value, 20);
console.log("Found My Target key at Index Number : " + result);
