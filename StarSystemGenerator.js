// JavaScript Source Code

var RollButton = document.querySelector("#RollButton");
var RollValue = document.querySelector("#RollValue")
var NumDiceInput = document.querySelector("input[type='number']");

var i;
var NumDice = 0;
var DiceTotal = 0;

var NumStarsDisplay = document.querySelector("#NumStarsDisplay");
var NumStar = 0;

NumDiceInput.addEventListener("change", function(){
    NumDice = Number(this.value);
});

RollButton.addEventListener("click", function(){
	DiceTotal = 0;
	RollValue.textContent = d6Roller(NumDice);
	removeElementsByClass("NewStarLine")
	StarGenerator();
	for (i = 0; i < NumStar; i++) {
		StarLine(i+1);
	}
});

function d6Roller(n){
	for (i = 0; i < n; i++) {
		DiceTotal += Math.floor(Math.random() * 6) + 1;
	}
	return DiceTotal
}

/* Star Generator */

function StarGenerator(){
	StarRoll = d6Roller(3);
	if(StarRoll <= 10){
		NumStarsDisplay.textContent = "1 Star";
		NumStar = 1;
	} else if (StarRoll >= 11 && StarRoll <= 15) {
		NumStarsDisplay.textContent = "2 Stars";
		NumStar = 2;
	} else {
		NumStarsDisplay.textContent = "3 Stars";
		NumStar = 3;
	}
}

function StarLine(n){
	var para = document.createElement("p");
	var node = document.createTextNode("This is Star " + n);
	para.appendChild(node);
	para.classList.add("NewStarLine")
	var element = document.getElementById("StarDetails");
	element.appendChild(para);
}

function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
