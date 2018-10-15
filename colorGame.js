// Define the variables
let numSquares = 6;
let colors = generateRandomColors(numSquares);
const squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
const colorDisplay = document.querySelector("#colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const nav = document.querySelector("nav");
const resetButton = document.querySelector(".reset");
const easy = document.querySelector(".easy");
const hard = document.querySelector(".hard");

//Easy button funtionality - only 3 squares
easy.addEventListener("click", function(){
  easy.classList.add("selected"); //Add the color of the button
  hard.classList.remove("selected");
  //Generate 3 new colors
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  for(let i=0; i<squares.length; i++) {
    if(colors[i]){  //For squares that have these 3 colors generated, display colors on squares
      squares[i].style.background = colors[i];
    }
    else{
      squares[i].style.display = "none";  //hide the other 3 squares that don't have colors generated
    }
  }
})

//Hard button functionality
hard.addEventListener("click", function(){
  hard.classList.add("selected");
  easy.classList.remove("selected");
  //Generate 6 new colors
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  for(let i=0; i<squares.length; i++) {
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
  }
})

//Reset the game when pressed the resetButton
resetButton.addEventListener("click", function(){
  //Generate all new colors
  colors = generateRandomColors(numSquares);
  //Pick a new random color from array
  pickedColor = pickColor();
  //Change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //Change colors of squares
  for(let i=0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  //Set back the background of the heading to the default color
  h1.style.backgroundColor = "#5C5CE7";
  nav.style.color = "#5C5CE7";
  //Change the text back to "New colors"
  resetButton.textContent = "NEW COLORS";
})

//Set the RGB text in the header to the RGB of the selected color
colorDisplay.textContent = pickedColor;

// Set the color of the squares to the color of the color variables
for(let i=0; i < squares.length; i++){
  //Add initial color to squares
  squares[i].style.backgroundColor = colors[i];
  //Add click listeners to squares
  squares[i].addEventListener("click", function(){
    //Grab color of clicked square
    let clickedColor = this.style.backgroundColor
    //Compare color to picked color
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";  //Change the button text from "New colors" to "Play again?"
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
      nav.style.color = clickedColor;
    }
    else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  })
}

function changeColors(color){
  //Loop through all the squares
  for(let i=0; i < squares.length; i++){
    //Change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

//Picked color is the random of the given colors
function pickColor(){
  //Pick a random number
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//Get random colors for the squares
function generateRandomColors(num){
  //Make an array
  let arr = [];
  //Add random colors to array
  for(let i = 0; i < num; i++){
    //Get random color and push into arr
    arr.push(randomColor());
  }
  //Return that array
  return arr;
}

function randomColor(){
  //Pick a "red" form 0 - 255
  let r = Math.floor(Math.random() * 256);
  //Pick a "green" form 0 - 255
  let g = Math.floor(Math.random() * 256);
  //Pick a "blue" form 0 - 255
  let b = Math.floor(Math.random() * 256);
  
  return "rgb(" + r +", " + g + ", " + b + ")";
}
