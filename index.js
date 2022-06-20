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
//Use the .attr dot notation 
$("img").attr("src");

//Set attribute of an anchor tag
$("a").attr("href", "https://www.yahoo.com");

//Will print out all the classes set to an element
$("h1").attr("class");

//ADDING EVENT LISTENERS WITH JQUERY
$("h1").click(function(){           //click adds an event listener and calls the callback function once it registers a click
    $("h1").css("color", "purple")
});

//Don't need to bother with a for loop as jQuery will look through the website and select all elements with the tag you set

//Will log what key is pressed when typing inside the input box
$("input").keypress(function(event){
    console.log(event.key)
});

//Challenge 1:
//Changes h1 text to whatever is pressed on the keyboard
$(document).keypress(function(){
    $("h1").text(event.key)
});

//Change colour of text by hovering over it with mouse:
$("h1").on("mouseover", function(){
    $("h1").css("color", "green")
});

//Can check Event reference page on MDN docs for other actions

//ADDING/REMOVING ELEMENTS USING JQUERY
//Lets say we want to add a button before the h1
$("h1").before("<button>New</button>");
//Allows us to create new HTML elements at anytime via jQuery

$("h1").after("<button>New</button>");

//There is also prepend and append which will add an element inside the h1 tag (or whatever other element you put) compared to before/after that adds it outside the h1 tag

//Example:
//Before = <button>New</button> <h1>Hello</h1>
//Prepend = <h1><button>New</button>Hello</h1>

//Will remove all buttons inside the current webpage
$("button").remove() 