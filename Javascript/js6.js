// Question 6: 
//Write a function named sumOrDifference that takes two numbers as parameters. If both are even, return their sum; if both are odd, return their difference 
//and if both are different return -1.

function sumOrDifference(x,y){
    if(x%2 == 0 && y%2 == 0)
    {
        return (x+y);
    }
    else if(x%2 != 0 && y%2 != 0)
    {
        return (x-y);
    }
    else
    {
        return (-1);
    }
}
console.log(sumOrDifference(2, 4)); 
console.log(sumOrDifference(3, 5)); 
console.log(sumOrDifference(2, 3)); 
