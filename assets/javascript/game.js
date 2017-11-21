 $(document).ready(function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var actors = ["Robert Redford", "Brad Pitt", "Kevin Costner", "Paul Newman", "Johnny Depp", "George Clooney", "Ryan Gosling", "Denzel Washington", "Jon Hamm"];
  var word = [];
  var wrongGuessCounter;           // Count incorrect guesses
  var maxGuesses = 2;
  var result = [];        // results of word
  var wrongGuesses = [];

  var populateResult = function() {
    for (var i = 0; i < word.length; i++) {
      if (word[i] === " "){
        result[i] = "*"; //secret message for a space
      }
      else {
        result[i] = "_";
      }
    }    
  }
  
  function showResult(){
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
    //show it on the screen as a string
    $("#currentWord").text(finalResult);
  }


  function startGame(){
    var randomIndex = Math.round(Math.random() * (actors.length-1));
    word = actors[randomIndex];
    word = word.replace(/\s/g, " ");
    wrongGuessCounter = 0;
    $("#wrongLetters").text("");
    wrongGuesses = [];
    populateResult();
    showResult();
    console.log(word);
  }
  
  startGame();
  
  
  

  // Get elements
  

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

 

  populateResult();
  showResult();
  


  

  function showWrongGuesses() {
    var wrongGuessText = "";
    for (var i = 0; i < wrongGuesses.length; i++) {
      wrongGuessText += wrongGuesses[i]
    }


    $("#wrongLetters").text(wrongGuessText);
  }

  // show result after user clicks a button
  var handleClick = function (letter) {
    //check if letter is in our word
    //show it if it is 
    //put in wrong answer array if it is not
    var foundIt = false; //flag to let us know wrong guess
    for (var i = 0; i < word.length; i++) {
      if (word[i].toLowerCase()===letter){
        result[i] = word[i];
        foundIt = true; //found it - don't put the letter in the wrong guess
      }
      
     
    }
    //check for wrong guess
    if (foundIt != true){
      

      if ( wrongGuesses.length === 0 || (wrongGuesses.length != 0 && $.inArray(letter, wrongGuesses)===-1)){
         wrongGuesses.push(letter);
         wrongGuessCounter++;
      }
      
    }
    showResult();
    showWrongGuesses();

    if (wrongGuessCounter === maxGuesses) {
      showWrongGuesses();
      alert("YOU LOSE");
      startGame();
    }
  }
       

    


 
  
});