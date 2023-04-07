// setup for the mug slider

var mugSlider = new slider(["assets/images/R4T.jpg", "assets/images/mug2.jpg"], document.getElementById("primaryMug") );

var right = document.getElementById("pointRightMug");
var left = document.getElementById("pointLeftMug");

right.addEventListener("click", function(){mugSlider.next()})
left.addEventListener("click", function(){mugSlider.previous()})