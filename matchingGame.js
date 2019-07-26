var imageName ;
var clickCount=0 ; // Var to store the number of click
var chosen = ["*","*"] ; // Array to store the randomly chosen square
var reset = 0; // var to reset the game 
var matched = 0; // variable to store the score (Number of matched zone)
var id1 = ""; // variable to store the id of the first choosen image
var id2 = ""; // variable to store the id of the second choosen image

var numberOfImages = 20; // 

//Function to randomize the choosen locations
var images = ["http://icons.iconarchive.com/icons/limav/game-of-thrones/512/Baratheon-icon.png",
"http://icons.iconarchive.com/icons/limav/game-of-thrones/512/Stark-icon.png",
"http://icons.iconarchive.com/icons/limav/game-of-thrones/512/Lannister-icon.png",
"http://icons.iconarchive.com/icons/limav/game-of-thrones/512/Targaryen-icon.png",
"http://icons.iconarchive.com/icons/limav/game-of-thrones/512/Greyjoy-icon.png",
"http://icons.iconarchive.com/icons/limav/game-of-thrones/512/Martell-icon.png",
"http://icons.iconarchive.com/icons/limav/game-of-thrones/512/Arryn-icon.png",
"http://icons.iconarchive.com/icons/limav/game-of-thrones/256/Tyrell-icon.png"];

var images = shuffle(image);

//set span titles to corresponding image name
for (var i=1; i<= numberOfImages; i++){
    $('#'+i).attr("name",images[i-1]);
} 