////////////////////////////////
// Easy Going: Write a for loop that will log the numbers 1 through 20.
//  for(let i = 1; i <= 20; i++){
//      console.log(`This logs the number ${i}`)
//  }
////////////////////////////////


////////////////////////////////
// Get Even: Write a for loop that will log only the even numbers in 0 through 200
// for(let i = 0; i <= 200; i = i+2){
//     console.log(`I logged every even number, now we're at ${i}`)
// }
////////////////////////////////


////////////////////////////////
// Fizz Buzz: This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

// Write a javascript application that logs all numbers from 1 - 100.
// for(let i = 1; i <= 100; i++){
//     console.log(i)
//     if(i % 3 === 0 && i % 5 === 0){ // // If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
//         console.log("FizzBuzz")
//     } else if(i % 5 === 0){ //// If a number is divisible by 5 log "Buzz" instead of the number.
//         console.log("Buzz")
//     } else if(i % 3 === 0){ // // If a number is divisible by 3 log "Fizz" instead of the number.
//         console.log("Fizz")
//     }else {
//         console.log(i)
//     }
// }
////////////////////////////////


////////////////////////////////
// Wild Wild Life: Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
// 1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// plantee.splice(2, 1, 5001)
// console.log(plantee)

// 2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// wolfy.splice(3, 1, "Gotham City")
// console.log(wolfy)
// 3. Give D'Art a second hometown by adding "Hawkins"
// dart.push("Hawkins")
// console.log(dart)

// 4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
// wolfy.shift()
// console.log(wolfy)

// wolfy.unshift("Gameboy")
// console.log(wolfy)
////////////////////////////////


////////////////////////////////
// Yell at the Ninja Turtles:
// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// 2. Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.
// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
// for (let turtle of ninjaTurtles) {
//     console.log(turtle.toUpperCase());
//   }
////////////////////////////////


////////////////////////////////
// Methods, Revisited: Here is a list of favMovies:
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// console.log(favMovies.indexOf("Titanic")) //Console log: the index of Titanic

// Do the following and console.log the final results

//1.use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
//favMovies.sort()
//console.log(favMovies) // Sorts using ASCII
// 2. Use the method pop
//favMovies.pop()
//console.log(favMovies) // Removes the last element (volver) from end of the array
//3. push "Guardians of the Galaxy" 
//favMovies.push("Guardians of the Galaxy")
//console.log(favMovies) // Adds new element (Guardians of the Galaxy) to the end of the array
//4. Reverse the array
//favMovies.reverse()
//console.log(favMovies) // Reverses the array in place, (the first becomes the last, last becomes first, etc.)
//5. Use the shift method
//favMovies.shift()
//console.log(favMovies) // Removes the specified element (Guardians of the galaxy) from the array (like pop but reversed)
//6. unshift - what does it return?
//favMovies.unshift()
//console.log(favMovies) // Adds the specified element to the array (like push but reversed)
//7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
//favMovies.splice(14, 1, "Avatar")
//console.log(favMovies) // changes the content of the array by REMOVING OR REPLACING element with a new element in place 
//8. slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
//9. store the value of your slice in a variable, console.log it - Thought question: what is going on here?
//10. console.log your final results
// const middleArrayLength = Math.floor(favMovies.length / 2);  ////Finds The Middle of the array
// const firstHalfArray = favMovies.slice(0, middleArrayLength);
// const lasttHalfArray = favMovies.slice(middleArrayLength)
// console.log(firstHalfArray)
// console.log(lasttHalfArray)
// console.log(firstHalfArray.indexOf("Fast and Furious"))

// 11. After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
//We get a value number of -1
////////////////////////////////


////////////////////////////////
// Where is Waldo: With the following multi-dimensional array
// 1. Remove Eggbert (hint look at the slice/splice method(s))
// 2. Change "Neff" to "No One"
// 3. Access and console.log "Waldo"

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];
// whereIsWaldo.splice(1, 1)
// console.log(whereIsWaldo)
// whereIsWaldo[1].splice(2, 1, "No One")
// console.log(whereIsWaldo)

// let arr = whereIsWaldo[2][1].splice(1)
// console.log(`The desired value is ${arr}`)
////////////////////////////////


////////////////////////////////
//  Excited Kitten:
// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     const kittyTalk = Math.floor(Math.random() * 3);
//     if (kittyTalk === 0) {
//       console.log("...human...why you taking pictures of me?...");
//     } else if (kittyTalk === 1) {
//       console.log("...the catnip made me do it...");
//     } else {
//       console.log("...why does the red dot always get away...");
//     }
//   } else {
//     console.log("Love me, pet me! HSSSSSS!");
//   }
// }

////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// // First, we sort the array in ascending order
// nums.sort((a, b) => a - b);

// // Next, we calculate the middle index of the array
// const middleIndex = Math.floor(nums.length / 2);

// // If the array has an odd number of elements, the median is the middle element
// if (nums.length % 2 !== 0) {
//   console.log(nums[middleIndex]);
// }
// // If the array has an even number of elements, the median is the average of the two middle elements
// else {
//   const median = (nums[middleIndex - 1] + nums[middleIndex]) / 2;
//   console.log(median);
// }

