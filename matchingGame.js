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

// Display image when the question mark is clicked 
$("span").click(function(){
    //Resturn previous guesses to question marks if they didn't match
    if(reset === 1 && matched === 0){
        $('#'+id1).children("img").attr("src","http://icons.iconarchive.com/icons/graphicloads/android-settings/64/question-icon.png");
        $('#'+id2).children("img").attr("src","http://icons.iconarchive.com/icons/graphicloads/android-settings/64/question-icon.png");
        id1="";
        id2="";
        reset = 0;
        matched = 0;
    }
    else if (reset === 1 && matched === 1){
            id1 = "";
            id2 = "";
            reset = 0;
            matched = 0;
        }
    
    imageName = $(this).attr("name");
    //if span has not beeen matched
    if(imageName !== "matched") {
        //show span's image
        $(this).children("img").attr("src", imageName);

        //if first spot is empty update first chosen element to include this span's id
        if (chosen[0] === "*"){
            chosen[0] = $(this).attr("id");

        }
        //if not check if second spot in chosen element is empty
        else if (chosen [1] === "*"){
            //update second chosen element to include this span's id
            chosen[1] = $(this).attr("id");

            //check if chosen elements images are the same and chosen elements ids are different
            if ($('#'+ chosen[0]).attr("name") === $('#'+ chosen[1]).attr("name") && chosen[0] !== chosen[1]){
                $('#' +chosen[0]).attr("name", "matched");
                $('#' +chosen[1]).attr("name", "matched");
                resetDispalyFlags();
                matched = 1 ;
            } else {
                resetDispalyFlags();
                matched = 0 ;
            }
        }
        ++clickCount;
        }

        $("#countDisplay").text("Score =" + clickCount + "clicks");
    })

    function resetDispalyFlags() {
        setIdFlags();
        resetChosenElements();
        reset = 1 ;
    }

    function setIdFlags() {
        id1 = chosen [0];
        id2 = chosen [1];
    }

    function resetChosenElements(){
        chosen[0] = "*";
        chosen[1] = "*";
    }
    //Shuffle function is defiend to set randomely images on the board.
    function shuffle(o) {
        for (var j, x, i = o.length; i; j= Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    }