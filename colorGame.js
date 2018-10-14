// Define the variables
let colors = generateRandomColors(6);
 /*[
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)",
  ];*/

const squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
const colorDisplay = document.querySelector("#colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const nav = document.querySelector("nav");

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
