// setup for the school slider.
// i tried to make this a little neater but my text editor didnt like my tabbing
// hope its readable on your side!

var schoolSlider = new slider(
    [
        "assets/images/school.jpg", 
        "assets/images/school2.jpg",
        "assets/images/school3.jpg",
        "assets/images/school4.jpg"
    ], 
    document.getElementById("secondarySchoolImg") 
);

var right = document.getElementById("pointRight");
var left = document.getElementById("pointLeft");

right.addEventListener("click", function(){schoolSlider.next()})
left.addEventListener("click", function(){schoolSlider.previous()})