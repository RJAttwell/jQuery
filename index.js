//MANIPULATING STYLES WITH JQUERY
//Using jQuery to target the h1 and change the css colour property to red
$("h1").css("color", "red");

$("button");
//replaces document.querySelectorAll("button");

//Can find out the current value of a particular property by using:
console.log($("h1").css("font-size"));
//One property = getting the value, two properties = setting the value

//Can add CSS from styles.css file via jQuery:
$("h1").addClass("bigTitle");

//Can also remove CSS with:
$("h1").removeClass("bigTitle");

//To add/remove multiple classes:
$("h1").addClass("bigTitle margin50");

//Can query if an element possesses a class:
$("h1").hasClass("bigTitle"); //Will return a boolean 
