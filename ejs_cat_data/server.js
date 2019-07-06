
var express = require("express");
console.log("Let's find out what express is", express);

var app = express();
console.log("Let's find out what app is", app);

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/', function(request, response) {  
   console.log("The request object", request);
   console.log("The response object", response);
   response.send("<h1>Hello Express</h1>");
})
//------------------------------------------------------------------

app.get("/cats", function (request, response){
    var cats_array = [
        {name: "Greg", img: 'images/cat-emperor-costume-7.jpg'}, 
        {name: "Renahy", img: 'images/shocked.jpg'}, 
        {name: "Jay-queline", img:'images/2_face.jpg'}, 
    ];
    response.render('cats', {cats: cats_array});
})
//---------------------------------------------------------------------
app.get("/Greg", function (request, response){
    var greg = [
        {name: "Greg", favFood: 'lasagna', age: 'At least 2007 Years old', sleepSpot:['On the couch','Hammock in the Bahamas'], img: 'images/cat-emperor-costume-7.jpg'}, 
    ];
    response.render('details', {cats: greg});
})

app.get("/Renahy", function (request, response){
    var cats_array = [
        {name: "Renahy", favFood: 'Chicken', age: '27 Years Old', sleepSpot:['Under the couch','In the window'], img: 'images/shocked.jpg'}, 
    ];
    response.render('details', {cats: cats_array});
})

app.get("/Jay-queline", function (request, response){
    var cats_array = [
        {name: "Jay-queline", favFood: 'Ney York Cheese Cake', age: '5 Human Years', sleepSpot:['On your Face','In the Bathtub'], img:'images/2_face.jpg'}, 
    ];
    response.render('details', {cats: cats_array});
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})

