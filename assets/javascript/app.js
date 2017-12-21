$('#start').on('click', function () {
    // subwrapper will remove start button and replace with questions
    // $('#subwrapper').remove();
    game.start();
})

var questions = [{
    question: "Where was the movie 'Gone with the Wind', filmed?",
    answers: ["New York", "Hollywood", "South Carolina", "Los Angeles", "Atlanta"],
    correctAnswer: "Atalnta"
}, {
    question: "Which Actress was in the 1959 hit movie, Some Like Hot?",
    answers: ["Audrey Hepburn", "Katharine Hepburn", "Vivien Leigh", "Marilyn Monroe", "Ann Rutherford"],
    correctAnswer: "Marilyn Monroe"
}, {
    question: "Who is Coco Chanel was born?",
    answers: ["chocolate bar", "cake", "perfume", "designer", "dress"],
    correctAnswer: "designer"
}, {
    question: "Who famously said 'Girls can do everything men can do...just backwards and in heels.'",
    answers: ["Eva Gardner", "Ginger Rogers", "Elizabeth Taylor", "Madonna", "Fred Astaire"],
    correctAnswer: "Ginger Rogers"
}, {
    question: "What is Freddie Mercury?",
    answers: ["car", "planet", "metal", "singer", "rock"],
    correctAnswer: "singer"
}, {
    question: "How old would Kurt Cobain be today, 2017?",
    answers: ["50", "48", "51", "65", "55"],
    correctAnswer: "50"
}];

var game = {
    correct: 0,
    incorrect: 0,
    // seconds
    counter: 30,
    countdown: function () {
        // created counter function that will 'start' below
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up");
            // this method will run when game is done
            game.done();
        }
    },
    start: function () {
        // insert time, 1000seconds
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">30</span> Seconds</h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            // append to subwrapper
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2');
            // subloop
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-" +i+ "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
            }
        }
    },
    done: function(){
        $.each($("input[name='question-0']:checked"),function() {
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incoreect++;
            }
        });
        $.each($("input[name='question-1']:checked"),function() {
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incoreect++;
            }
        });
        $.each($("input[name='question-2']:checked"),function() {
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incoreect++;
            }
        });
        $.each($("input[name='question-3']:checked"),function() {
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incoreect++;
            }
        });
        $.each($("input[name='question-4']:checked"),function() {
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incoreect++;
            }
        });
        $.each($("input[name='question-5']:checked"),function() {
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incoreect++;
            }
        });
        this.result();
    },
    result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h2>All done!</h2>");
        // print all correct and incorrect answers
        $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
        // print questions not answered
        $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
}