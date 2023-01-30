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
    ime: "Zoran",
    godine: "25",
   prosek: "9.8",
   uspeh: "99",
  },
  {
    ime: "Aleksandar",
    godine: "19",
   prosek: "10",
   uspeh: "69",
  },
  {
    ime: "Vladimir",
    godine: "23",
   prosek: "6.7",
   uspeh: "89",
  },
];

var newArray = students.filter(function (el) {
  return el.godine >= 15 && el.prosek <= 200 && el.uspeh >= 80;
});
console.log(newArray);


// Napišite funkciju koja će primiti dva niza i spojiti ih u jedan niz.
let t1 = [1,2,3,4];
let t2 =[5,6,7,8,9,10];


// console.log(spajanje(text1,text2))
function concatArr (array1, array2){

 return [...array1, ...array2];
}
console.log(concatArr(t1,t2))


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

var arr4 = [1, 2, 3, 4, 5, 6];
function sortDescending(arr) {
 
  return arr4.sort((a, b) => a - b);
}
console.log(sortDescending(arr4))

//Napišite funkciju koja će primiti niz i vratiti novi niz sa elementima iz originalnog niza sortiranim u opadajućem redosledu.

let array = [40,100,1,5,25,10];
let sortedArray = array.sort(function(a,b){return b-a});
console.log(sortedArray);

// Napišite  JavaScript funkciju koja će primiti niz i vratiti broj ponavljanja svakog elementa u nizu.

const arr6 = ['M', 'M', 'M', 'S', 'S', 'S', 'R', 'C', 'S', 'S', 'S'];


function countOccurrences(arr) {
  return arr.reduce(function(a, b){
    a[b] = a[b] + 1 || 1
    return a;
  }, {});
}
console.log(countOccurrences(arr6));
