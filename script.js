var shapes = 1;

function InitalizeTest(interval) {
  if (shapes == null) {
    return console.log("You need to pick an amount of shapes first")
  }
  let squares = 0;
  let circles = 0;
  let triangles = 0;
  let runsLeft = 20;
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
      // Call to function to clear test, show result and input field
    }
  }, interval);
}




function create_square() {

}

function create_circle() {

}

function create_triangle() {

}
