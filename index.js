var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
userClickedPattern = [];

$("button").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
});


function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4 );
    var chosenRandomColour = buttonColours[randomNumber];
    gamePattern.push(chosenRandomColour);
    $("#"+ chosenRandomColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(chosenRandomColour);
}

function animatePress(currentColour){

    $("#"+currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);

}

function playSound(name){
    var audio = new Audio('sounds/'+name+ '.mp3');
    audio.play();
    
}


