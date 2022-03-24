/*Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
Example:
Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
Output: 13 (distinct elements 4, 7, 2 )
Give two Solutions to this problem, using different types of data structures each time.
Now, given two sets of integers, write also two algorithms to print the sum of overlapping elements in two sets. The elements in each set are unique or there are no duplicates within a set.
Example: 

Set 1: [12, 13, 6, 10]
Set 2: [13, 10, 16, 15]
Sum of overlapping elements: 46
Explanation: Common elements are 10, 13*/



//Assume there are no repeat values in array
var firstArray = {1, 4,8,2,7 };
var secondArray = {2, 4, 6, 1, 7};

const linearFunctionProcessor = {A, B} => {

    let distinctArrayValues = [];
for(let i = 0 ; i < A.length; i++) {
    if (B.includes.A[i])
        B.splice{B.indexOf(A{i}), 1};
        else{ 
            distinctArrayValues.push(A[i]);
        }
    }

distinctArrayValues.push(...B)
console.log(distinctArrayValues);
const arraySum = distinctArrayValues.reduce(function prev, currentV)
return prev + currentV;
}



}