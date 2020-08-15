async function sleep(t) {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
}

let currentSound;

document.querySelector("button.playButton").onclick = async () => {
  let link = document.querySelector("input.linkInput").value;

  if (currentSound) {
    currentSound.pause();
  }

  document.querySelector("button.playButton").disabled = true;
  currentSound = new Audio(link);
  await sleep(500);
  document.querySelector("button.playButton").disabled = false;
  currentSound.play();
};
document.querySelector("button.stopButton").onclick = async () => {
  if (currentSound) {
    currentSound.pause();
  }
};
