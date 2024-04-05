var buttonIds = $(".btn").map(function() { return this.id; });
var audioWrong=new Audio("sounds/wrong.mp3");
var gamePattern=[];
var userPattern=[];
started=true;
var level=0;

$(document).on("keydown", function() {
    if (started) {
        nextSequence();
        started=false;
    }
});


$(".btn").click( function() {
    userPattern.push($(this).attr("id"));

    animate($(this).attr("id"));
    checkAnswer(userPattern.length-1);
    }
);


function nextSequence() {
    level=userPattern.length ;
    $("h1").text("Level " + level);

    userPattern=[];

    randomColor=buttonIds[Math.round(Math.random()*(buttonIds.length-1))];

     //Show and play next button to click  
     audioElement=new Audio("sounds/" + randomColor + ".mp3");
     audioElement.play();

     $("#" + randomColor).addClass("pressed");

     setTimeout(() => {
         $("#" + randomColor).removeClass("pressed");
     } , 100);
    
    gamePattern.push(randomColor);
}

function animate(name) {

    //play and show what user clicked
    var audioElement=new Audio("sounds/" + name + ".mp3");

    audioElement.play();
    $("#" + name).addClass("pressed");
    
    setTimeout(() => {
        $("#" + name).removeClass("pressed");
    } , 100);

};

function checkAnswer(currentLevel) {
    if (userPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userPattern.length === gamePattern.length) {
            setTimeout(() =>  {
                nextSequence();
            } , 500);
        } 
    } else {

        var wrong=new Audio("sounds/wrong.mp3");
        wrong.play();

        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
  
        setTimeout(function () {
          location.reload();
        }, 1000);


    }
}