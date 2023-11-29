const choices = document.getElementById("choices");
const shapeField = document.getElementById("testField");

var shapes = 1;

function InitalizeTest(interval) {
  createTestScreen();
  if (shapes == null) {
    return console.log("You need to pick an amount of shapes first")
  }
  let squares = 0;
  let circles = 0;
  let triangles = 0;
  let runsLeft = 20;
  // Test time taken
  // timetest = Date.now();
  let testInterval = setInterval(function(){
    var result = Math.floor(Math.random() * 3)
    console.log(result)
    if (result == 0) {
      create_square();
      squares++;
    }
  
    if (result == 1) {
      create_circle();
      circles++;
    }
  
    if (result == 2) {
      create_triangle();
      triangles++;
    }
    console.log("\nSquares: " + squares + "\nCircles: " + circles + "\nTriangles: " + triangles);
    runsLeft--;
    if (runsLeft == 0) {
      clearInterval(testInterval);
      createMenuScreen();
      // Call to function to clear test, show result and input field
    }
    // Test time taken
    // console.log(Date.now() - timetest);
  }, interval);
}

function createMenuScreen() {
  choices.style.visibility = "visible";
}

function createTestScreen() {
  choices.style.visibility = "hidden";
}




function create_square() {
  shapeField.innerHTML = "";
  //choices.appendChild();
}

function create_circle() {
  shapeField.innerHTML = "";
}

function create_triangle() {
  shapeField.innerHTML = "";
}
