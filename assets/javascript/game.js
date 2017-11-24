 $(document).ready(function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var actors = ["Robert Redford", "Brad Pitt", "Kevin Costner", "Paul Newman", "Johnny Depp", "George Clooney", "Ryan Gosling", "Denzel Washington", "Jon Hamm"];
  var actorsImages = {
    "Brad Pitt":"assets/images/braddpitt.gif", 
    "Kevin Costner":"assets/images/kevincostner.gif", 
    "Paul Newman":"assets/images/paulnewman.gif",
    "Johnny Depp":"assets/images/johnnydepp.gif",
    "George Clooney":"assets/images/georgeclooney.gif",
    "Ryan Gosling":"assets/images/ryangosling.gif",
    "Jon Hamm":"assets/images/jonhamm.gif",
    "Robert Redford":"assets/images/robertredford.gif",
    "Denzel Washington":"assets/images/denzelwashington.gif"
   
  }
  var word = [];
  var wrongGuessCounter;           // Count incorrect guesses
  var maxGuessesLeft = 9;
  var result = [];        // results of word
  var wrongGuesses = [];
  var guessesLeft = [];
  var finalResult = "";
  
//create dashes to represent the current word letters
  var populateResult = function() {
      for (var i = 0; i < word.length; i++) {
        if (word[i] === " "){
        result[i] = "*"; //secret message for a space
        }
        else {
          result[i] = "-";
        }
      }    
  console.log("popresult" + i);
  }
  
  function stringifyResult(){
    //create a string from characters in our result array
    //start with an empty string
    var finalResult = "";
    //use each character 
    for (var i=0; i < result.length; i++) {
    //add to the total array
    //remember secret message for space
      if (result[i] === "*"){
      finalResult = finalResult + " ";
      }
        else {
      finalResult = finalResult + result[i];
        }
     }

     return finalResult;
  }

// create the array that holds the dashes that represent the current word
  function showResult(){
    
    //show it on the screen as a string
    $("#currentWord").text("Current Word: " + stringifyResult());
      
  }

//set up everything to start the game
  function startGame(){
    var randomIndex = Math.round(Math.random() * (actors.length-1));
    result = [];
    word = actors[randomIndex];
    word = word.replace(/\s/g, " ");
    wrongGuessCounter = 0;
    maxGuessesLeft = 9;
    $("#wrongLetters").text("");
    $("#currentGuesses").text("Guesses Remaining: " + maxGuessesLeft);
    wrongGuesses = [];
    guessesLeft = [];
    $("#actorImage").html ("");
    populateResult();
    showResult();
    console.log(word);
  }
  
  startGame();
  
   // create alphabet buttons
  var createButtons = function () {
    for (var i = 0; i < alphabet.length; i++) {
      var letter = $("<button>"); //creates a button <button></button>
      letter.addClass("alphabet"); //adding a class alphabet - <button class = "alphabet"></button>
      letter.text(alphabet[i]); //adding the value of the button - <button class = "alphabet">a</button>
      $("#buttons").append(letter)//takes out vegas button and puts it into the actual div buttons
    }
  }
  createButtons();

  //handle click buttons
    $("button.alphabet").click(function(){
    var clickedLetter = $(this).text()
    handleClick(clickedLetter)
    })


 // call the functions to create the dash array and show the dashes

  populateResult();
  showResult();

  // showGuessesLeft();


  //create the function that holds and displays the guesses that are wrong

  function showWrongGuesses() {
    var wrongGuessText = "";
     for (var i = 0; i < wrongGuesses.length; i++) {
      wrongGuessText += wrongGuesses[i]; 
    
    }

    $("#wrongLetters").text("Guessed letters: " + wrongGuessText);
  }

  function showGuessesLeft(){
    $("#currentGuesses").text("Guesses remaining: " + maxGuessesLeft);
  }
       
  // show result after user clicks a button
   function handleClick(letter) {
    //check if letter is in our word
    //show it if it is 
    //put in wrong answer array if it is not
    var foundIt = false; //flag to let us know wrong guess
    //going through all the letters in the random actor word to see if there is a match
    for (var i = 0; i < word.length; i++) {
      if (word[i].toLowerCase()===letter){
        result[i] = word[i];
        foundIt = true; //found it - don't put the letter in the wrong guess
      }
    }

    //check for wrong guess and count how many there are
      if (foundIt != true){
          if ( wrongGuesses.length === 0 || (wrongGuesses.length != 0 
          && $.inArray(letter, wrongGuesses)===-1)){
          wrongGuesses.push(letter);
          wrongGuessCounter++;
          maxGuessesLeft--;
          }
      }

    showResult();
    showWrongGuesses();
    showGuessesLeft();

     
    //if wrong guessed letters = 9(which is max guesses) - alert you lose and reset game
    if (maxGuessesLeft === 0) {
      setTimeout(function() { alert("LOSER"); }, 1000); 
      
    } else {
      //go through the results array and check for dashes 
      //if no more dashes left you won
      var foundDash = false;
      for (var i = 0; i < result.length; i++) {
        if (result[i] === "-") {
          foundDash = true;
          break;
        }
      }

      if (foundDash === false) {
        var actorNameKey = stringifyResult(); //turn result into a string
        var actorImageSrc = actorsImages[actorNameKey]; //get image source from actor image object using actor name key
        var actorImage = $("<img/>"); //create image tag to add our attribute to
        actorImage.attr( "src", actorImageSrc); //get the actual image
        $("#actorImage").append(actorImage); //add image to the page
        setTimeout(function() { alert("YOU WIN"); }, 500); 

        
      }
    }
  }
       
//Reset

    $("#reset").click(function(){
      startGame();
    })

 
});