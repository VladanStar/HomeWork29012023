// Napišite funkciju koja će primiti niz brojeva i vratiti najveći broj u nizu.
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

// Napišite funkciju koja će primiti niz stringova i vratiti string sa najvećim brojem karaktera.
let str1 = ["Vladan", "Bojan", "Predrag", "Ognjen"];

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

// Napišite funkciju koja će primiti niz objekata i filtrirati ga po jednom od parametara objekta.

let students = [
  {
    name: "Raj",
    Age: "15",
    RollNumber: "123",
    Marks: "99",
  },
  {
    name: "Aman",
    Age: "14",
    RollNumber: "223",
    Marks: "69",
  },
  {
    name: "Vivek",
    Age: "13",
    RollNumber: "253",
    Marks: "89",
  },
];

var newArray = students.filter(function (el) {
  return el.Age >= 15 && el.RollNumber <= 200 && el.Marks >= 80;
});
console.log(newArray);


// Napišite funkciju koja će primiti dva niza i spojiti ih u jedan niz.
let text1 = "Hello";
let text2 = "world!";
let text3 = "Have a nice day!";
let result = text1.concat(" ", text2, " ", text3);

console.log(result)


// Napišite funkciju koja će primiti niz brojeva i vratiti niz sa parnim brojevima.
function getEvenNumbers() {
  var arr = [1, 2, 3, 4, 5, 6];

  for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
         console.log(arr[i] )
      }
  }
}
getEvenNumbers();

//Napišite funkciju koja će proći kroz dvodimenzionalni niz i vratiti niz sa elementima iz svake podniza.

let arr2 = [
  [1, 2],
  [3, 4],

];
let flatArray = [].concat.apply([], arr2);
console.log(flatArray)

//Napišite funkciju koja će primiti niz i vratiti niz bez duplikata elemenata.

let arr3 = ['A', 'B', 'A', 'C', 'B'];

function uniq(a) {
  var seen = {};
  return a.filter(function(item) {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}

console.log(uniq(arr3));

//  Napišite funkciju koja će primiti niz i vratiti novi niz sa elementima iz originalnog niza sortiranim u rastućem redosledu.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
console.log(fruits)


function sortDescending(arr) {
  var arr4 = [1, 2, 3, 4, 5, 6];
  return arr4.sort((a, b) => b - a);
}

//Napišite funkciju koja će primiti niz i vratiti novi niz sa elementima iz originalnog niza sortiranim u opadajućem redosledu.