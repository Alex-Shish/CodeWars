/* Gradually Adding Parameters
Instructions:
This kata is all about adding numbers.
You will create a function named add. This function will return the sum of all the arguments. 
Sounds easy, doesn't it??
Well here's the twist. The inputs will gradually increase with their index as parameter to the function.
  add(3,4,5); 
  returns ( 3 * 1 ) + ( 4 * 2 ) + ( 5 * 3 ) = 26
  Remember the function will return 0 if no arguments are passed.
  Example
    add(); //=> 0
    add(1,2,3); //=> 14
    add(1,4,-5,5); //=> 14
*/

function add() {
    let result = 0
    const arr =Array.from(arguments) 
    if (!arr.length) return 0
    for (let i = 0; i < arr.length; i++) {
      result += arr[i] * (i + 1)
    }
    return result
  }

  console.log(add(3,4,5)) // 26
  console.log(add())   //0