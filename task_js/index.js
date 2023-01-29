//Napišite funkciju koja će primiti niz brojeva i vratiti najveći broj u nizu.
let arr = [1, 2, 78, 3, 4, 5, 6, 7, 8, 9];
function maxNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(maxNumber(arr));

//Napišite funkciju koja će primiti niz stringova i vratiti string sa najvećim brojem karaktera.
let str1 = ["Vladan","Bojan", "Predrag","Ognjen"];

function longestString(arr) {
  let longest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}
console.log(longestString(str1));
