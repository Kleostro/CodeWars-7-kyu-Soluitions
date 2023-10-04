/*
Calculate Two People's Individual Ages

ESCRIPTION:

Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None or {-1, -1} in C if:

sum < 0
difference < 0
Either of the calculated ages come out to be negative

SOLUTION: 
*/

function getAges(sum,difference){
     sum/= 2
     difference /= 2
     if ((difference<0||sum<0) || (sum+difference<0||sum-difference<0)) return null;
     return [sum+difference,sum-difference]
};
