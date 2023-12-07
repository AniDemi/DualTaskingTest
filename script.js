const choices = document.getElementById("choices");
const shapeField = document.getElementById("testField");
const testDesc = document.getElementById("testDesc");
const startButton = document.getElementById("startButton");
const inputField = document.getElementById("inputField");
const submitResult = document.getElementById("submitResult");
const description = document.getElementById("description");

var trackShapes = 2;
var intervals = [20, 10, 5, 25];
var currentTest = 0;
var squares;
var circles;
var triangles;
var twoShapeResult = "";
var oneShapeResult = "";


function startTest() {
  console.log(intervals[currentTest]);
  console.log(trackShapes);
  createTestScreen();
  updateTestDesc();
  
  squares = 0;
  circles = 0;
  triangles = 0;
  let runsLeft = 30;
  // Test time taken
  timetest = Date.now();
  // Run test
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
      // Control variabels
      setTimeout(() => {
        shapeField.innerHTML = "";
        inputResults();
        
      }, intervals[currentTest]);
    }
    // Test time taken
    console.log(Date.now() - timetest);
  }, intervals[currentTest]);
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

function createTestScreen() {
  choices.style.display = "none";
}

function createMenuScreen(phase) {
  submitResult.style.display = "none";
  inputField.style.display = "none";
  inputField.innerHTML = "";
  choices.style.display = "block";
  if (phase == "nowait") {
    updateTestDesc();
    startButton.innerHTML = "Continue";
    choices.style.display = "block";
  }
  if (phase == "wait") {
    updateTestDesc();
    startButton.innerHTML = "Start";
    choices.style.display = "block";
  }
}

function inputResults() {
  if (trackShapes == 2) {
    createInput("circlecount", "Circles");
    createInput("squarecount", "Squares");
    //Two input fields
    //Show results?
  } else {
    createInput("circlecount", "Circles");
    //One input field
    //Show results?
  }
  submitResult.style.display = "block";
  inputField.style.display = "block";
}

function createInput(id, shape) {
  const div = document.createElement("div");
  const text = document.createElement("p");
  const input = document.createElement("input");
  input.setAttribute("id", id);
  div.setAttribute("id", "inputStyle");

  div.appendChild(text);
  div.appendChild(input);
  inputField.appendChild(div);
  text.textContent = shape + ":";
}

function submitInput() {
  if (trackShapes == 2) {
    let squarecount = document.getElementById("squarecount").value;
    let circlecount = document.getElementById("circlecount").value;
    twoShapeResult += Math.round(10*100*(1-(Math.abs((circles-circlecount))/circles)))/10 + ", " + Math.round(10*100*(1-(Math.abs((squares-squarecount))/squares)))/10 + ", ";
    console.log(twoShapeResult);
  } else {
    let circlecount = document.getElementById("circlecount").value;
    oneShapeResult += Math.round(10*100*(1-(Math.abs((circles-circlecount))/circles)))/10 + ", ";
    console.log(oneShapeResult);
  }

  currentTest++;
  if (currentTest >= 4) {
    currentTest = 0;
    trackShapes--;
    if (trackShapes == 0) {
      createFinishScreen();
      return
    } else {
      createMenuScreen("wait");
      return
    }
  }
  createMenuScreen("nowait");
}

function createFinishScreen() {
  twoShapeResult = twoShapeResult.slice(0,-2);
  twoShapeResult += ";";
  oneShapeResult = oneShapeResult.slice(0,-2);
  oneShapeResult += ";";
  console.log(twoShapeResult);
  console.log(oneShapeResult);
  submitResult.style.display = "none";
  shapeField.style.display = "none";
  inputField.innerHTML = "";
  description.innerHTML = "";
  description.innerHTML = " You have finished all the tests, down below you can find two strings that have already been formatted. " + 
  "In the first string every pair of numbers is the percantage of circles and squares found, respectively, for each time interval. " + 
  "In the second string every number is the percantage of circles found for each time interval. " + 
  "The intervals were 2000ms, 1000ms, 500ms, and 250ms.";
  testDesc.innerHTML = "To finish this study please copy and paste the strings within the quotation marks into the google form";
  createField(twoShapeResult, 2);
  createField(oneShapeResult, 1);
}

function createField(content, type) {
  text = document.createElement("p");
  if (type == 2) {
    text.textContent += "Results for counting two shapes: ";
  }
  if (type == 1) {
    text.textContent += "Results for counting one shape: ";
  }
  text.textContent += "\""+content+"\"";
  inputField.appendChild(text);
}

function updateTestDesc() {
  if (trackShapes == 2) {
    testDesc.innerHTML = "Each shape stays on the screen for " + intervals[currentTest] +"ms" + "<br/>" + "Your task is to count the amount of squares and circles shown";
  } else {
    testDesc.innerHTML = "Each shape stays on the screen for " + intervals[currentTest] +"ms" + "<br/>" + "Your task is to only count the amount of circles shown";
  }
}



