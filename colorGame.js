// Define the variables
let colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)",
  ];

const squares = document.querySelectorAll(".square");
let pickedColor = colors[3];
let colorDisplay = document.querySelector("#colorDisplay");

//Set the RGB text in the header to the RGB of the selected color
colorDisplay.textContent = pickedColor;

// Set the color of the squares to the color of the color variables
for(let i=0; i < squares.length; i++){
  //Add initial color to squares
  squares[i].style.backgroundColor = colors[i];
  //Add click listeners to squares
  squares[i].addEventListener("click", function(){
    //Grab color of clicked square
    var clickedColor = this.style.backgroundColor
    //Compare color to picked color
    if(clickedColor === pickedColor){
      alert("Correct!");
    }
    else {
      alert("WRONG");
    }
  })
}
