/* Bonfire: Factorialize a Number

http://www.freecodecamp.com/challenges/factorialize-a-number

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arithmetic Operators

++++Tests++++
factorialize(5) should return a number.
factorialize(5) should return 120.
factorialize(10) should return 3628800.
factorialize(20) should return 2432902008176640000.
factorialize(0) should return 1.
*/

function factorialize(num) {
    
    // refernce MSDN: https://msdn.microsoft.com/en-us/library/wwbyhkx4(v=vs.94).aspx 
    // If the number is less than 0, reject it.
    if (num < 0) {
        return -1;
    }
  
    // If the number is 0, its factorial is 1.
    else if (num === 0) {
        return 1;
    }
  
    var tmp = num;
    while (num-- > 2) {
        tmp *= num;
    }
    return tmp;
  
}

factorialize(5);