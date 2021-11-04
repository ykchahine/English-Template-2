
var submitAnswer_Q1 = function() {

    var radios = document.getElementsByName('question1');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
    if ( val == "Flower" ) {
      document.getElementById("QUESTION-VALIDATE-Q1").innerHTML = "Correct! Awesome job!";
      var audio = document.getElementById("audio_correct");
      audio.play();

      } 
    else if (val == "") {
      document.getElementById("QUESTION-NONE-Q1").innerHTML = "Oops! Please choose an answer!";
      var audio = document.getElementById("audio_none");
      audio.play();
        } 
    else {
      document.getElementById("QUESTION-VALIDATE-WRONG-Q1").innerHTML = "Incorrect! Try again!";
      var audio = document.getElementById("audio_incorrect");
      audio.play();
        }
};

var submitAnswer_Q2 = function() {

    var radios = document.getElementsByName('question2');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
    if ( val == "Sleeping" ) {
      document.getElementById("QUESTION-VALIDATE-Q2").innerHTML = "Correct! Awesome job!";
      var audio = document.getElementById("audio_correct");
      audio.play();
  } 
    else if (val == "" ) {
      document.getElementById("QUESTION-NONE-Q2").innerHTML = "Oops! Please choose an answer!";
      var audio = document.getElementById("audio_none");
      audio.play();
    } 
    else {
      document.getElementById("QUESTION-VALIDATE-Wrong-Q2").innerHTML = "Incorrect! Try again!";
      var audio = document.getElementById("audio_incorrect");
      audio.play();
    }
};

var submitAnswer_Q3 = function() {

    var radios = document.getElementsByName('question3');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
    
    if ( val == "Thirsty" ) {
      document.getElementById("QUESTION-VALIDATE-Q3").innerHTML = "Correct! Awesome job!";
      var audio = document.getElementById("audio_correct");
      audio.play();
    } 
    else if (val == "" ){
      document.getElementById("QUESTION-NONE-Q3").innerHTML = "Oops! Please choose an answer!";
      var audio = document.getElementById("audio_none");
      audio.play();
    } 
    else {
      document.getElementById("QUESTION-VALIDATE-Wrong-Q3").innerHTML = "Incorrect! Try again!";
      var audio = document.getElementById("audio_incorrect");
      audio.play();
    }
};

  var submitAnswer_Q4 = function() {

    var radios = document.getElementsByName('question4');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value;
           break;
         }
    }
    
    if ( val == "Shovel" ) {
      document.getElementById("QUESTION-VALIDATE-Q4").innerHTML = "Correct! Awesome job!";
      var audio = document.getElementById("audio_correct");
      audio.play();
    } 
    else if (val == "" ) {
      document.getElementById("QUESTION-NONE-Q4").innerHTML = "Oops! Please choose an answer!";
      var audio = document.getElementById("audio_none");
      audio.play();
    } 
    else {
      document.getElementById("QUESTION-VALIDATE-Wrong-Q4").innerHTML = "Incorrect! Try again!";
      var audio = document.getElementById("audio_incorrect");
      audio.play();

    }
};

//function submitForm() {
  // Get the first form with the name
  // Usually the form name is not repeated
  // but duplicate names are possible in HTML
  // Therefore to work around the issue, enforce the correct index
 // var frm = document.getElementsByName('word-Q1')[0];
 //   frm.submit(); // Submit the form
//    frm.reset();  // Reset all form data
//return false; // Prevent page refresh
// }
  
