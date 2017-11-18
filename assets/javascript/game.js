 
 $(document).ready(function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var actors = ["Robert Redford", "Brad Pitt", "Kevin Costner", "Paul Newman", "Johnny Depp", "George Clooney", "Ryan Gosling", "Denzel Washington", "Jon Hamm"];
  var randomIndex = Math.round(Math.random() * (actors.length-1));
  var word = actors[randomIndex];
  word = word.replace(/\s/g, " ");
  console.log(word);
  
  var guess ;             // Guess
  var guesses = [];      // Stored guesses
  var lives ;             // Lives
  var counter ;           // Count correct guesses
  var space ;              // Number of spaces in word '-'
  var result = [];        // results of word
  // Get elements
  var showLives = $("#mylives");

 


   // create alphabet ul
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

  populateResult();
  showResult();

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

  // show result after user clicks a button
  var handleClick = function (letter) {
    //check if letter is in our word
    //show it if it is 
    //discard it if is not
    for (var i = 0; i < word.length; i++) {
      if (word[i].toLowerCase()===letter){
        result[i] = word[i];
      }

    }
    showResult();
  }
  
  // Show lives
 comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }
  // OnClick Function
   check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        } 
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }
   // Reset

  // document.getElementById('reset').onclick = function() {
  //   correct.parentNode.removeChild(correct);
  //   letters.parentNode.removeChild(letters);
  //   context.clearRect(0, 0, 400, 400);
  //   play();
  // }
});
 