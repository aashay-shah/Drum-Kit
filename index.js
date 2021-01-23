function playSound(key) {
  var audio;
  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
    break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
    break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
    break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
    break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
    break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
    break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
    break;
    default:
      console.log(key);
  }
}

function buttonAnimation(key){
  var activeButton = document.querySelector("."+key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 200);
}

// Detecting Button Press
var no_of_buttons = document.querySelectorAll(".drum").length;
for(var i=0; i<no_of_buttons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    playSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

// Detecting Keyboard Press
document.addEventListener("keydown", function(event){
  playSound(event.key);
  buttonAnimation(event.key);
});
