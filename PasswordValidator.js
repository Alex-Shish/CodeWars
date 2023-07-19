/*
Password validator 7 kyu
Description
Your job is to create a simple password validation function, as seen on many websites.

The rules for a valid password are as follows:

There needs to be at least 1 uppercase letter.
There needs to be at least 1 lowercase letter.
There needs to be at least 1 number.
The password needs to be at least 8 characters long.
You are permitted to use any methods to validate the password.

Examples:
password("Abcd1234"); ===> true
password("Abcd123"); ===> false
password("abcd1234"); ===> false
password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890"); ===> true
password("ABCD1234"); ===> false
password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> true;
password("!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> false;

Extra info
You will only be passed strings.
The string can contain any standard keyboard character.
Accepted strings can be any length, as long as they are 8 characters or more.
*/

function password(str) {
    let arr = str.split('');
    console.log(arr)
    let alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let alPh = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let count = 0;
    if(arr.length >= 8) count++;
    for(let i = 0; i < arr.length; i++){
      if(alph.includes(arr[i])) {
         count++;
         break;
         }
      }
    for(let i = 0; i < arr.length; i++){
      if(alPh.includes(arr[i])){
         count++;
         break;
         }
    }
    for(let i = 0; i < arr.length; i++){
      if(nums.includes(arr[i])){
         count++;
         break;
      }
    }
      return count === 4;
    }

    console.log(password("Abcd1234"));                               // true
    console.log(password("Abcd123"));                                // false
    console.log(password("abcd1234"));                               // false
    console.log(password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890"));   // true
    console.log(password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,"));        // true