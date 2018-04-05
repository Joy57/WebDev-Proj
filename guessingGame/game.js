//create a secret num
var secretNum = 4;

//ask user for guess
var guess = prompt("Guess my secret number: ");

//check if guess is correct
if (guess == secretNum){
    alert("Oh! you got it correct.");
}
else if(guess > secretNum){
    alert("too high");
}
else if (guess <secretNum){
    alert("too low");
}
else {
    alert("try again...!");
}
