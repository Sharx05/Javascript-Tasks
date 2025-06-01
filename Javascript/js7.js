// Question 7: Write a function named sumPostitveArray which accepts a parameter
//If the array contains any negative numbers, return the sum of all positive numbers only.

function sumPositiveArray(array)
{
    let sum=0;
    for(var i=0;i<array.length;i++)
    {
        if(Math.abs(array[i]) == array[i])
        {
            sum+=array[i];
        }
    }
    return sum;
}

console.log(sumPositiveArray([1, -2, 3, 4, -5])); 
console.log(sumPositiveArray([-1, -2, -3, -4])); 
