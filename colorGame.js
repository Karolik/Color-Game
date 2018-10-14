// Define the variables
let colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)",
  ];

var squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.querySelector("#colorDisplay");
const messageDisplay = document.querySelector("#message");
const navBar = document.querySelector("header");

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
      navBar.style.background = clickedColor;
    }
    else {
      this.style.backgroundColor = "#232323"; //The square becomes black(invisible)
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

