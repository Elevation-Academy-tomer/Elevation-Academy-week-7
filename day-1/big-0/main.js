///Exercise 6


// const findDuplicates = function (ages) {
//     let obj = {}
//     for (let i = 0; i < ages.length -1; i++) {
//         if(obj[ages[i]] != undefined && i != 0){
//             console.log(`${ages[i]} has a duplicate`)
//          }
//          else{
//             obj[ages[i]] = ages[i]
//          }
//     }
// }

// findDuplicates([1,2,3,4,5,6,5,9090,1,2])

///Exercise 8

// let numbers = [24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427, 442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852, 896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272, 1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667, 1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198, 2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554, 2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932, 2962, 2984, 2987]


// const findIndex = function(numbers, num){
//     let min = 0
//     let max = numbers.length -1
//     while(min <= max){
//         let i = Math.floor((min + max) /2);
//         if(numbers[i] == num){
//             return i
//         }
//         else if(numbers[i] < num){
//             min = i + 1;
//         }
//         else{
//             max = i - 1;
//         }
//     }
// }

// const i = findIndex(numbers, 2630)
// console.log(i)




//// ALGORITHMS PRACTICE

//Exercise 1

// const printStars = function(num){
//     let j = ""
//     for(let i = 0; i < num; i++){
//         j += "*" 
//         document.getElementById("body").innerHTML += `${j}`
//         document.getElementById("body").innerHTML += "<br>"
//     }
// }


// // printStars(100)

// //Exercise 2

// const printBackwardsStars = function(num){
//     let j = ""
//     let arr = new Array(num)
//     for(let i = 0; i < num; i++){
//             j += "*" 
//             arr[i] = j
//         }

//         arr.reverse().forEach(e => {
//             document.getElementById("body").innerHTML += `${e}`
//              document.getElementById("body").innerHTML += "<br>"
//         });
//     }

   
    


// // printBackwardsStars(6)

//Exercise 3

const checkIfTime = numOfTime => numOfTime != 1 ? printStarSeries(5, --numOfTime) : null

const printStarSeries = function(num, numOfTime){

    printStars(num)
    printBackwardsStars(num)

    return checkIfTime(numOfTime)
}


// printStarSeries(5, 3)

//Exercise 4

// const reverse = function(str){
//     let reversed = ""
//     let i = str.length
//     while(i > 0){
//         reversed += str[i- 1]
//         i--
//     }

//     return reversed
//   }
  
//   reverse("dog") //should return "god"
//   reverse("race car") //should return "rac ecar"

//   //Exercise 5


//   const isPalindrome = function(str){
//     str =  str.toLowerCase()
//     str = str.replace(" ", "")
//     let reversed = reverse(str)
//     return reversed == str ? true : false
//   }

//   let poly = isPalindrome("Taco Cat")
//   console.log(poly)

 //Exercise 6

 const encrypt = function(str){
     let text = str[0]
     text--
     let letter = str.charCodeAt(str[0]) - 1;
     console.log(text)
 }

 encrypt("cat")


