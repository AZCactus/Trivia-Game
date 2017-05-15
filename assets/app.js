

// formatting/syntax reference is from class material and class/homework solutions provided by the school. 
 // ***Site reference https://www.thefactsite.com/2011/07/top-100-random-funny-facts.html
 // https://www.buzzfeed.com/tomphillips/42-incredibly-weird-facts-youll-want-to-tell-people-down-the?utm_term=.orLPGWNQ2#.hjPA9DNxO***
// http://api.jquery.com/jquery.each/ https://www.w3schools.com/jquery/jquery_ref_html.asp  

// The start of the quiz
var panel = $("#quiz-area");

// These are the questions put into an array.  The square bracket indicates the start of the array 
// and curley brackets are for each individual question.

var questions = [{
  question: "Banging your head against a wall burns how many calories in an hour?",
  answers: ["1000 calories", "25 calories", "150 calories", "400 calories"],
  correctAnswer: "150 calories"
// Each question is made up of three components.  The question itself, the answers available 
// and the correct answer.  
// The syntax of the variables consists of an attibute , the ":" which gives value.  The answers
 // sections has another nested [] which gives the array of answers. 
}, 
{ question: "A name used to reference a group of cows is known as what?",
  answers: ["Herd", "Murder", "Stampede", "Dinner Time"],
  correctAnswer: "Murder"
}, 
{ question: "Why are bananas curved?",
  answers: ["The potassium content", "Reproduction", "They grow towards the sun", "Survival from predators"],
  correctAnswer: "They grow towards the sun"
}, 
{ question: "How many penguins can a polar bear eat during one meal?",
  answers: ["12", "43", "68", "86"],
  correctAnswer: "86"
}, 
{ question: "What did King Henry VIII sleep next to?",
  answers: ["An Axe", "His bible", "pet dog", "the court jester"],
  correctAnswer: "An axe"
}, 
{ question: "Cherophobia refers to what?",
  answers: ["The fear of actress Cher", "The fear of radiation", "The fear of stepping on toys", "The fear of fun"],
  correctAnswer: "The fear of fun"
}, 
{ question: "What day of the week are heart attacks most likely to occur?",
  answers: ["Sunday", "Monday", "Wednesday", "Friday"],
  correctAnswer: "Monday"
}, 
{ question: "When color is the sweat of an upset hippo?",
  answers: ["Clear", "White", "Red", "Yellow"],
  correctAnswer: "Red"
},
{ question: "How large was the largest snowflake ever recorded?",
  answers: ["2 inches", "5 inches", "9 inches", "15 inches"],
  correctAnswer: "15 inches"
}, 
{ question: "In 2008 scientists discovered a new species of bacteria that lives in where?",
  answers: ["Hairspray", "Food courts in American malls", "Hospitals", "The Salt River Canyon"],
  correctAnswer: "Hairspray"
}];


// The first section of script starts with starting the game at 0, setting the timer/setInterval
var timer;
// start the game off with 0 correct&incorrect
var game = {
  correct: 0,
  incorrect: 0,
  //start the time off with 120 seconds 
  counter: 120,
  // create the counter function
  countdown: function() {
    // the game.counter decrements
    game.counter--;
    // the counter-number html div has the game.counter function
    $("#counter-number").html(game.counter);
    // if the game.counter reaches 0
    if (game.counter === 0) {
      // TIME IS UP will display in the console log
      console.log("TIME IS UP");
      // game.done means that for the var game, the done: function will run.
      game.done();
    }
  },
  // start of the game
  start: function() {
    // making the variable timer equal to setInterval. setInterval is equal to game.countdown and 1 second.  
    // This makes the var timer set to game.countdown in seconds.
    timer = setInterval(game.countdown, 1000);

    //add to the html div subwrapper to show the questions
    // http://api.jquery.com/prepend/
    // adding the time remaining header with countdown(after start has  been clicked)
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");
    
    // removes the start button after being clicked.  The onclick functions that calls #start is at line 171. 
    $("#start").remove();
    
    // The for loop that runs through the question length array incrementing
    for (var i = 0; i < questions.length; i++) {
      
      // The var panel (from the html quiz-area at top) appends heading 2 from start button to questions.
       //The reason for panel.append is because of the change.  The reason for the questions[i].questions is because 
        // of the child element "question" being inserted 
      panel.append("<h2>" + questions[i].question + "</h2>");
      
      // We start with var j next for the answers array-https://www.codecademy.com/en/forum_questions/557f5ed5d3292ffbe9000612
      // This loads all of the questions.
      // start with the first one (0), then loop through until j has incremented through the answer length.
      for (var j = 0; j < questions[i].answers.length; j++) {
       
        // append the panel to include child elements. 
        // we specify the input types are radio selector and make name-question.
        // The indexed array values of radio buttons and potential answers are concat.******
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }
    // The done button is completed for submission.  THe done button has the onclick referenced at the very bottom and calls
    // the game.done function.   game.done works by moving from the var game to done by connecting the indented value with "." 
    panel.append("<button id='done'>Done</button>");
  },
  // The done function that is ran once either the completion button is clicked or the time runs out. 
  done: function() {
    // the each function internally grabs the question, the value, and functions "this" value to equal to the question's indexed
    // correct answer. If this is true, the game.correct is incremented and the counter increases.  http://api.jquery.com/jquery.each/  
    // game.correct is the path for parent/child.  "else" increments the game.incorrect and is the path for parent/child. 
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-8']:checked"), function() {
      if ($(this).val() === questions[8].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-9']:checked"), function() {
      if ($(this).val() === questions[9].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    this.result();
  },
  // The result function that runs the following commands:
  result: function() {
    // clearing the interval timer
    clearInterval(timer);
    // removing the sub-wrapper that has the questions
    $("#sub-wrapper h2").remove();
    // displaying the panel ending score
    panel.html("<h2>Ending Score</h2>");
    // Selects the panel and sends to answers to either correct or incorrect.  The total concats "correct answers with "this.correct"
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    // Subtracts the questions. length total from the correct/incorrect total to send the difference to Unanswered.
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};
// Start and Done click events
$(document).on("click", "#start", function() {
  game.start();
});
$(document).on("click", "#done", function() {
  game.done();
});