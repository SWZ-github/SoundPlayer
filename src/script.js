async function sleep(t) {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
}

let currentSound;
let looping = false;

function killSound() {
  if (!currentSound) return;
  currentSound.pause();
  currentSound = undefined;
}

document.querySelector("button.playButton").onclick = async () => {
  let link = document.querySelector("input.linkInput").value;

  if (currentSound) {
    killSound();
  }

  document.querySelector("button.playButton").disabled = true;
  currentSound = new Audio(link);

  await sleep(500);

  document.querySelector("button.playButton").disabled = false;

  currentSound.play();

  currentSound.addEventListener("ended", (ev) => {
    if (looping) {
      currentSound.play();
    }
  });
};
document.querySelector("button.stopButton").onclick = killSound;
document.querySelector("button.loopButton").onclick = async () => {
  looping = !looping;
  if (looping) {
    document.querySelector("button.loopButton").classList.add("active");
  } else {
    document.querySelector("button.loopButton").classList.remove("active");
  }
};
