/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Stephanie Rose Calma     Student ID: srcalma    Date: May 15, 2023
*
********************************************************************************/ 
console.separator = function () {
  console.log("\n********************************************************************************\n")
}

//console.separator();
//console.log("Hello World!");

var serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
var serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
var serverResponses = ["Welcome to WEB700 Assignment 1", "This assignment was prepared by Stephanie Calma", "Stephanie Calma: srcalma@myseneca.ca", "User Logged In", "Main Panel", "Logout Complete"];

function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverPaths.length; i++) {
      if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
        return `200: ${serverResponses[i]}`;
      }
    }
    
    return `404: Unable to process ${httpVerb} request for ${path}`;
  }

console.separator();
console.log(httpRequest("GET", "/"));
console.log(httpRequest("GET", "/about"));
console.log(httpRequest("PUT", "/"));
console.separator();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function automateTests() {
  var testVerbs = ["GET", "POST"];
  var testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

  function randomRequest() {
    var randVerb = testVerbs[getRandomInt(testVerbs.length)];
    var randPath = testPaths[getRandomInt(testPaths.length)];

    var output = httpRequest(randVerb, randPath);
    //console.log(`Random httpRequest for "${randVerb}" and "${randPath}"`);
    console.log(output);
    //console.separator();
  }

  setInterval(randomRequest, 1000);
}

automateTests();


  