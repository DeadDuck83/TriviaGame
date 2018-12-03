
$(document).ready(function () {
    // global variables  
    var questionNumber = 0;

    var questionsAnswers = [
        {
            question: "In what place was Christmas once illegal?",
            opt1: "Russia",
            opt2: "Brazil",
            opt3: "England",
            opt4: "France",
            answer: "England"
        },
        {
            question: "In California, it is illegal to eat oranges while doing what?",
            opt1: "Bathing",
            opt2: "Driving",
            opt3: "Gardening",
            opt4: "Working on a computer",
            answer: "Bathing"
        },
        {
            question: "Coulrophobia means fear of what?",
            opt1: "Sacred Things",
            opt2: "Clowns",
            opt3: "Old People",
            opt4: "Jews",
            answer: "Clowns"
        },
        {
            question: "How many dimples are there on a regular golf ball?",
            opt1: "418",
            opt2: "336",
            opt3: "294",
            opt4: "377",
            answer: "336"
        },
        {
            question: "Which of the following is the longest running American animated TV show?",
            opt1: "Rugrats",
            opt2: "TV Funhouse",
            opt3: "Pokemon",
            opt4: "Simpsons",
            answer: "Simpsons"
        },
        {
            question: "Every year, over 8,800 people injure themselves with what apparently harmless, tiny object?",
            opt1: "Knife",
            opt2: "Toothpick",
            opt3: "Baseball Bat",
            opt4: "Pencil",
            answer: "Toothpick"
        },
        {
            question: "How many pounds of pressure do you need to rip off your ear?",
            opt1: "11",
            opt2: "17",
            opt3: "7",
            opt4: "2",
            answer: "7"
        },
        {
            question: "At what temperature are Fahrenheit and Celsius the same?",
            opt1: "-40",
            opt2: "50",
            opt3: "0",
            opt4: "92",
            answer: "-40"
        },
        {
            question: "What are the odds of being killed by space debris?",
            opt1: "1 in 5 million",
            opt2: "1 in 5 billion",
            opt3: "1 in 10 billion",
            opt4: "1 in 1 trillion",
            answer: "1 in 5 billion"
        },
        {
            question: "How much does Earth weigh?",
            opt1: "6,588,000,000,000,000,000,000,000,000 tons",
            opt2: "26,877,000,000,000,000,000,000,000,000,000,000,000,000 tons",
            opt3: "10,000,000,000,000,000,000,000,000 tons",
            opt4: "5 pounds",
            answer: "6,588,000,000,000,000,000,000,000,000 tons"
        }
    ];
    var correctGuesses = 0;
    console.log(questionsAnswers);


    // loop through questionsAnswers
    function startGame() {
        // resets radio button position
        $("input[name='option']:checked").attr('checked',false);
        // set the question number
        var currentQuestion = $("#question");

        if( questionNumber >= questionsAnswers.length){
            currentQuestion.text("You got " + correctGuesses + " out of " + questionsAnswers.length);
            $("#triviaQuestions").css('display','none');
            return startGame();
        }

        // print question and options to HTML
        console.log(questionsAnswers[questionNumber].opt1);
        var opt1 = $("#opt1").attr({
            value: questionsAnswers[questionNumber].opt1
        });
        var opt2 = $("#opt2").attr({
            value: questionsAnswers[questionNumber].opt2
        });
        var opt3 = $("#opt3").attr({
            value: questionsAnswers[questionNumber].opt3
        });
        var opt4 = $("#opt4").attr({
            value: questionsAnswers[questionNumber].opt4
        });
        currentQuestion.text(questionsAnswers[questionNumber].question);

        opt1.text(questionsAnswers[questionNumber].opt1);
        opt2.text(questionsAnswers[questionNumber].opt2);
        opt3.text(questionsAnswers[questionNumber].opt3);
        opt4.text(questionsAnswers[questionNumber].opt4);

        $("#totalQuestions").text((questionNumber + 1) + " of " + questionsAnswers.length);



        console.log("Current test question: " + questionsAnswers[questionNumber].question);

        // get answer
        correctChoice = questionsAnswers[questionNumber].answer;
        console.log(correctChoice);
        console.log("question number is: " + questionNumber);
        // get user selection is done by clicking the button


        // selection varified when the nextQuestion is hit

        // if correct opt selected var correctAnswers++, proceed to next question
        // if !correct do not add, proceed to next question
        // Add message to display if incorrect? Maybe in the object as a right message and wrong message
    }


    // Global functions
    //======================================================

    $("#submit").on("click", function () {
        userChoice = $("input[name='option']:checked").val()
        console.log("user choice= " + userChoice);
        console.log("correct Choice= " + correctChoice);
        if (correctChoice == userChoice) {
            console.log("correct");
            questionNumber++;
            startGame();
        }
        else {
            console.log("wrong");
            questionNumber++;
            startGame();
        }
    });


    startGame();


    //======================================================
    //======================================================
    // All code goes above here



});
