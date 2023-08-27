/*
Shortest Word

ESCRIPTION:

  Simple, given a string of words, return the length of the shortest word(s).
  
  String will never be empty and you do not need to account for different data types.

SOLUTION: 
*/
const findShort = (s) => {
  s = s.split(' ')
  let arr = []
  console.log(s);
  for(let i = 0; i < s.length; i++) {
   arr.push(s[i].length)
  }
  return Math.min(...arr)
}
