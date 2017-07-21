// this is app.js file
// goes in javascript folder -->inside assets --> TriviaGame
// for javascript and jquery



///Survival

//making sure the DOM is ready
$(document).ready(function() {

    //Global vars
    var correctAnswer = 0;
    var wrongAnswer = 0;
    var noAnswer = 0;
    var nextIndex= 0;
    var timeRemaining = 0;
    var timer;

    //main functions
    $("#maingame, #endScreen").hide();
    $('#A, #B, #C').click(answerCheck);
    $("#StartButton").click(init);
    $("#ReStartButton").click(initAgain);

    
    //store your game in an array/object. Here are all my questions and info needed.
    var questions = [{
            //index 0 
            question: "What are NOT the ingredients for a mimosa?",
            choices: ["A:Orange Juice<br> ", "B:Tequila<br>", "C:Cahampagne"],
   
            answer: "B"
        },

        {
            question: "What keeps snails from NOT invading your garden?",
            choices: ["A:Eggshells<br>  ", "B:Coffee Grounds?<br>  ", "C:Smelly Shoes"],
            image: "images/CashMeOutside.jpg",
            answer: "C"
        },

        {
            question: "What is the one thing you should never feed your dog",
            choices: ["A: Steak? <br>", "B: dogfood<br>", "C: grapes"],
           
            answer: "C"

        },
        
        }
    ];
    function loadNextQuestion() {
    		if (questions.length === nextIndex) {
    			//game over
    			$("#maingame").hide();
	        	$("#endScreen").show();
                clearTimeout(timer);
		    }
		    else {
	        startTimer();
	        $("#question").html(questions[nextIndex].question)
	        $("#answers").html(questions[nextIndex].choices)
    		}
    }

    // My timer -A user will have 45 seconds to select the correct answer
    function incrementTimer() {
        timer = setTimeout(function() {
            $('#time').text(timeRemaining);
            if (timeRemaining <= 0) {
                //unanswered
				noAnswer++;
                nextIndex++;
                $(".noguess").html(noAnswer);
                loadNextQuestion();
            } else {
                timeRemaining = timeRemaining - 1;
                incrementTimer();
            }
        }, 1000);
    }

    function startTimer() {
        clearTimeout(timer);
        timeRemaining = 15; // in seconds
        incrementTimer();
    }

   
    function answerCheck() {
        var userGuess = $(this).html();
      
        if (userGuess === questions[nextIndex].answer) {
            //guessed right
            correctAnswer++;
            nextIndex++;
            console.log(nextIndex)
            $('.wins').html(correctAnswer);
            loadNextQuestion();
	        }
         else {
            //guessed wrong
            wrongAnswer++;
            nextIndex++;
            $('.losses').html(wrongAnswer);
            loadNextQuestion();
        	}
    }

    //starting our game. Hiding the start screen and displaying the first Q. also starting counter.
    function init() {
        $("#startScreen").hide();
        $("#maingame").show();
        startTimer();
        // $("#photo").html("<img src ='" + questions[0].image + "'>");
        $("#question").append(questions[0].question);
        $("#answers").append(questions[0].choices);
    }

    //re-starting game
    function initAgain() {
        $("#endScreen").hide();
        correctAnswer = 0;
        wrongAnswer = 0;
        noAnswer = 0;
        nextIndex= 0;
        timeRemaining = 0;
        $('.wins').html(correctAnswer);
        $('.losses').html(wrongAnswer);
        $(".noguess").html(noAnswer);
        startTimer();
        $("#question").append(questions[0].question);
        $("#answers").append(questions[0].choices);
        $("#maingame").show();

    }
     
});