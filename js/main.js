/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/

var date = new Date();
// var day = date.getDay();
// var hours = date.getHours();
// var minutes = date.getMinutes();
// var seconds = date.getMinutes();
// var dateFormated = 'Today is ' + day + '.<br>' + 'Current Time: ' + hours + ':' + minutes + ':' + seconds;
    // returns as "Today is 2. / Current Time: 18:7:7"

// code from https://www.freecodecamp.org/news/how-to-format-dates-in-javascript/
const day = date.toLocaleString('en-us', { weekday: 'long'});
const hour12 = date.toLocaleString('en-us', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});

var dateFormatted = 'Today is ' + day + '.<br>' + 'Current Time: ' + hour12;

document.getElementById("answer1").innerHTML = dateFormatted;

//adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat


/* 2.--------
*/
var year = date.toLocaleDateString('en-us', {year: 'numeric'});
var month = date.toLocaleDateString('en-us', {month: '2-digit'});
var day2 = date.toLocaleDateString('en-us', {day: '2-digit'});
var dates = date.toLocaleDateString('en-us', {year: 'numeric', month: '2-digit', day: '2-digit'});

var datesListed = month + '-' + day2 + '-' + year + '<br>' + dates + '<br>' + day2 + '/' + month + '/' + year;

document.getElementById("answer2").innerHTML = datesListed;

// adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date


/* 3.--------
*/

function myFunction(){
var htmlCode = document.documentElement.innerHTML;
document.getElementById("answer3").innerText = htmlCode;
}

//adapt from https://stackoverflow.com/questions/817218/how-to-get-the-entire-document-html-as-a-string#answer-35917295


/* 4.--------
*/
//

$(function() {
    'use strict';
    // your code will start here...

    console.log('main.js loaded');

    paper.install(window);
    paper.setup(document.getElementById('main-canvas')); 

    var tool = new Tool();
    var c = Shape.Circle(200, 200, 80);
        c.fillColor = 'black';
        var text = new PointText(200 ,200);
        text.justification = 'center';
        text.fillColor = 'white';
        text.fontSize = 20;
        text.content = 'hello world';

    tool.onMouseDown = function(event) {
        var c = Shape.Circle(event.point.x, event.point.y, 20);
        c.fillColor = 'green';  
    }; 

    paper.view.draw();

// ...and end here
}); 

// adapt from Learning Javascript Ethan Brown Chapter 1
