/* Bonfire: Reverse a String

http://www.freecodecamp.com/challenges/reverse-a-string

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global String Object
String.split()
Array.reverse()
Array.join()

++++Tests++++
reverseString("hello") should return a string.
reverseString("hello") should become "olleh".
reverseString("Howdy") should become "ydwoH".
reverseString("Greetings from Earth") should return "htraE morf sgniteerG".
*/

function reverseString(str) {
 
 return str.split("").reverse().join(""); 

}

reverseString("hello");