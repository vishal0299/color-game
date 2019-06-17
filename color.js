var numSquares = 6;
var colors=generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var colorPicked=pickColor();

var colorDisplay= document.getElementById("colorDisplay");
colorDisplay.textContent = colorPicked;

var command = document.querySelector("#command")

var h1 = document.querySelector("h1");

var resetButton = document.getElementById("reset");

var easyBtn = document.getElementById("easyBtn")
var hardBtn = document.getElementById("hardBtn")

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	colorPicked = pickColor();
	colorDisplay.textContent = colorPicked;
	for(var i = 0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor=colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	colorPicked = pickColor();
	colorDisplay.textContent = colorPicked;
	for(var i = 0;i<squares.length;i++)
	{
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display = "block";
	}
})

resetButton.addEventListener("click",function(){
	//generate new colors
	colors=generateRandomColors(numSquares);
	//pick a new random color from array
	colorPicked=pickColor();
	//change color display to mach picked color
	colorDisplay.textContent = colorPicked;
	command.textContent = "";
	this.textContent = "new colors"
	//change colors of square
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
})

for(var i=0;i<squares.length;i++)
{
	//add initial colors
	squares[i].style.backgroundColor=colors[i];

	//add click eventlisenter
	squares[i].addEventListener("click",function(){
		var colorClicked = this.style.backgroundColor;
		if(colorClicked === colorPicked)
		{	
			command.textContent = "Correct"
			changeColor(colorClicked);
			h1.style.backgroundColor = colorClicked;
			reset.textContent = "Play Again?";			}
		else
		{
			this.style.backgroundColor = "#232323";
			command.textContent="Try Again"
		}
	})
}

function changeColor(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color
	}
}

function pickColor()
{
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr = []
	for(var i=0;i<num;i++)
	{
		arr.push(randomColor())
	}
	return arr;
}

function randomColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}