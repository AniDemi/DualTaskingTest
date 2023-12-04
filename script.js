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
    let shape = "";
    var result = Math.floor(Math.random() * 3)
    console.log(result)
    if (result == 0) {
      shape = "square";
      squares++;
    }

    if (result == 1) {
      shape = "circle";
      circles++;
    }

    if (result == 2) {
      shape = "triangle";
      triangles++;
    }
    create_shape(shape);
    console.log("\nSquares: " + squares + "\nCircles: " + circles + "\nTriangles: " + triangles);
    runsLeft--;
    if (runsLeft == 0) {
      clearInterval(testInterval);
      shapeField.innerHTML = "";
      createMenuScreen();
      // Call to function to clear test, show result and input field
    }
    // Test time taken
    // console.log(Date.now() - timetest);
  }, interval);
}

function create_shape(shape) {
  let top = Math.random()*60+20;
  let left = Math.random()*60+20;
  shapeField.innerHTML = "";
  const form = document.createElement("div");
  form.setAttribute("id", shape);
  form.setAttribute("style", "top:" + top + "%;left:" + left + "%;");
  shapeField.appendChild(form);
}

function createMenuScreen() {
  choices.style.visibility = "visible";
}

function createTestScreen() {
  choices.style.visibility = "hidden";
}

