/*
Exes and Ohs

ESCRIPTION:

  Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
  
  Examples input/output:
  
  XO("ooxx") => true
  XO("xooxx") => false
  XO("ooxXm") => true
  XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
  XO("zzoo") => false
  

SOLUTION: 
*/
const XO = (str) => {
  let countX = 0;
  let countO = 0;
  str = str.toLowerCase()
  for(let i = 0; i < str.length; i++) {
    if (str[i] === 'x') {
      countX += 1
    } else if (str[i] === 'o') {
          countO += 1
    }
  }
  if(countX === countO) {
    return true
  } else {
    return false
  }
}
