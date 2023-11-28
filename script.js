var shapes = 1;
var squares;
var circles;
var triangles;

function InitalizeTest(interval) {
  if (shapes == null) {
    return console.log("You need to pick an amount of shapes first")
  }
  squares = 0;
  circles = 0;
  triangles = 0;
  var testInterval = setInterval(pickshape(testInterval), interval);
  console.log("\nSquares: " + squares + "\nCircles: " + circles + "\nTriangles: " + triangles);

}

function pickshape(testInterval) {
  var result = Math.floor(Math.random() * 3)
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
}

function create_square() {

}

function create_circle() {

}

function create_triangle() {

}
