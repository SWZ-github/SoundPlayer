async function sleep(t) {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
}

let currentSound;

document.querySelector("button.submitButton").onclick = async () => {
  let link = document.querySelector("input.linkInput").value;

  if (currentSound) {
    currentSound.pause();
  }

  document.querySelector("button.submitButton").disabled = true;
  currentSound = new Audio(link);
  await sleep(500);
  document.querySelector("button.submitButton").disabled = false;
  currentSound.play();
};
