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

//MANIPULATING TEXT WITH JQUERY
$("h1").text("Bye"); //Changes text of an HTML element

$("button").text("Don't click me"); //Changes text of every HTML element that matches the criteria (Elements called "button")

$("button").html("<em>Hey</em>") //.html changes the html instead of just the text

//Most things done via jQuery as done using methods, preferencing it with the dot notation

//MANIPULATING ATTRIBUTES WITH JQUERY