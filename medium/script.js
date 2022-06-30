// MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.
var input = prompt("speak please");

if (input === input.toUpperCase()){
    console.log("STOP SHOUTING!");
}
else if (input === input.toLowerCase()) {
    console.log("speak louder...");
}
else{
    console.log("you're speaking normally");   
}
