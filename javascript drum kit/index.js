var audio1 = new Audio("sounds/boom.wav");
var audio2 = new Audio("sounds/clap.wav");
var audio3 = new Audio("sounds/hihat.wav");
var audio4 = new Audio("sounds/kick.wav");
var audio5 = new Audio("sounds/openhat.wav");
var audio6 = new Audio("sounds/ride.wav");
var audio7 = new Audio("sounds/snare.wav");
var audio8 = new Audio("sounds/tink.wav");
var audio9 = new Audio("sounds/tom.wav");

function play(audio) {
    audio.play();
}


document.addEventListener("keydown", function(event) {

    makeSound(event.key);
  
    buttonAnimation(event.key);
  
  });
  
  
  function makeSound(key) {
  
    switch (key) {
      case "a":
        var audio1 = new Audio("sounds/boom.wav");
        audio1.play();
        break;
  
      case "s":
        var audio2 = new Audio("sounds/clap.wav");
        audio2.play();
        break;
  
      case "d":
        var audio3 = new Audio('sounds/hihat.wav');
        audio3.play();
        break;
  
      case "f":
        var audio4 = new Audio('sounds/kick.wav');
        audio4.play();
        break;
  
      case "g":
        var audio5 = new Audio('sounds/openhat.wav');
        audio5.play();
        break;
  
      case "h":
        var audio6 = new Audio('sounds/ride.wav');
        audio6.play();
        break;
  
      case "j":
        var audio7 = new Audio('sounds/snare.wav');
        audio7.play();
        break;
  
        case "k":
          var audio8 = new Audio('sounds/tink.wav');
          audio8.play();
          break;
  
          case "l":
              var audio9 = new Audio('sounds/tom.wav');
              audio9.play();
              break;
  
  
      default: console.log(key);
  
    }
  }
  
  function buttonAnimation(currentKey) {
  
      var activeButton = document.querySelector("." + currentKey);
    
      activeButton.classList.add("playing");
    
      setTimeout(function() {
        activeButton.classList.remove("playing");
      }, 100);
  };