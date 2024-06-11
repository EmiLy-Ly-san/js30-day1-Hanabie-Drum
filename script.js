function playDrum(e) {
  console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(audio);
  if (!audio) return; //stop function from running all together
  audio.currentTime = 0; //rewind to the start of the sound
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  //console.log(e); //look at the console wich transitions are concerned and selection the one you need
  if (e.propertyName !== "transform") return;
  console.log(e.propertyName);
  //Because transitionend listens all the transition, and here we want just listen the transfrom one
  this.classList.remove("playing"); //this is key here, it concerns the element who privides of the event from the addEventListener
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition)); //Listen all the transitionend for the keys

window.addEventListener("keydown", playDrum);
