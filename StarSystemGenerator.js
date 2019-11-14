// JavaScript Source Code

var RollButton = document.querySelector("#RollButton");
var RollValue = document.querySelector("#RollValue")
var NumDiceInput = document.querySelector("input[type='number']");

var i;
var NumDice = 0;
var DiceTotal = 0;

NumDiceInput.addEventListener("change", function(){
    NumDice = Number(this.value);
});

RollButton.addEventListener("click", function(){
	DiceTotal = 0;
	RollValue.textContent = d6Roller(NumDice);
});

function d6Roller(n){
	for (i = 0; i < n; i++) {
		DiceTotal += Math.floor(Math.random() * 6) + 1;;
	}
	return DiceTotal
}