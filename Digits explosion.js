/*
Digits explosion

ESCRIPTION:

Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
"312" should return "333122"
"102269" should return "12222666666999999999"

SOLUTION: 
*/

const explode = (s) => {
  let arr = [...s]
  let result = ''
  arr.forEach((letter) => {
    letter === '0' ? result : result += letter.repeat(+letter)
  })
  return result;
}

SOLUTION #2: 
const explode = (s) => s.split('').map((letter) => letter.repeat(+letter)).join('')
