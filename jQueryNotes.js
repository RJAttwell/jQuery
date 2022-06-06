//jQuery
//The most popular JavaScript library
//Allows us to not write as much code. Example:

document.querySelector("h1"); 
//is the same as:
$("h1");

//$() is short for jQuery()

//How to incorportate jQuery into website
//Can use the CDN to add jQuery to a project. Most popular is the google CDN so most people will already have this cached. 
//Paste <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> in the body section
//Post it above your regular javascript script code

//Can also use:
$(document).ready(function){
    $("h1").css("color", "red");
});

//Waits until website is ready to run jQuery code. Putting CDN at end of the website code does the same thing though.


//Minifying code:
//Reduces file size and loading times