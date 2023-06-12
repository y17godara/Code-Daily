/*
  Question:
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

/*
  Answer:
  Logic:
  - Convert both strings to lowercase
  - Remove all the spaces from both strings
  - Sort both strings
  - Compair the lenght of string else false
  - Compare both strings
*/


function isAnagram(str1, str2) {
  /* Removing space from both strings */
  str1 = str1.replace(/\s/g, ""); // /\s/g as a whole means "find all whitespace characters in the string" and replace it with ""
  str2 = str2.replace(/\s/g, ""); // /\s/g as a whole means "find all whitespace characters in the string" and replace it with ""

  // Convert both strrings to lower case
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  /* Comparing lenght of both strings */
  if (str1.length != str2.length) {
    return false;
  }

  /* Sort the characters of both strings and compare them */
  str1 = str1.split();
  str2 = str2.split();

  return true;
}

// Main
let str1 = "THIS IS TEST IS IT LOWER oer not"
let str2 = "THES IS TEST CSE fdfd";
isAnagram(str1, str2)