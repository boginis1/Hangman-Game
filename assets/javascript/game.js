 window.onload = function () {
//  // create secret key to select actors

var actors = ["Robert Redford", "Brad Pitt", "Kevin Costner"];
	var randomIndex = Math.round(Math.random() * (actors.length-1));
	var randomActor = actors[randomIndex];
	console.log (randomActor);
	$("button").click(function(){
	var buttonName = $(this).text();
})

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  

  var guess ;             // Guess
  var guesses = [ ];      // Stored guesses
  var chances ;             // chances
  var counter ;           // Count correct guesses
  var space;              // Number of spaces in word '-'

var showGuesses = document.getElementById("myGuesses");
 
	// create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    // Create guesses ul
   result = function () {
    buttonName = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      randomActor.appendChild(correct);
      correct.appendChild(guess);
    }
  }

   // Show chances
   comments = function () {
    showChances.innerHTML = "You have " + chances + " chances";
    if (chances < 1) {
      showChances.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showChances.innerHTML = "You Win!";
      }
    }
  }
		
		// OnClick Function
   check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < randomActor.length; i++) {
        if (randomActor[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        } 
      }
      var j = (randomActor.indexOf(guess));
      if (j === -1) {
        chances -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }	

   // Play
  play = function () {
  	 guesses = [ ];
    chances = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }

	// 	
	// for (var i = randomActor.length - 1; i >= 0; i--) {
	// 	randomActor[i];
	// 	conole.log ()
	// }
	// 	function(letter()) {
	// 		if (letter.toLowerCase() === buttonName.toLowerCase()){
	// 			console.log("match");
	// 	}
		

			
	// 	};
		

	// });


// <p>Click the button to display the array values after the split.</p>

// <button onclick="myFunction()">Try it</button>

// <p id="demo"></p>

// <script>
// function myFunction() {
//     var str = "How are you doing today?";
//     var res = str.split(" ");
//     document.getElementById("demo").innerHTML = res;
// }
// </script>
