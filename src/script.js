async function sleep(t) {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
}

const urlParams = new URLSearchParams(window.location.search);
document.querySelector(".linkInput").value = urlParams.get("file")
  ? urlParams.get("file")
  : "";

console.log(urlParams.get("myParam"));

let currentSound;
let looping = false;

function killSound() {
  if (!currentSound) return;
  currentSound.pause();
  currentSound = undefined;
}

let playButton = document.querySelector("button.playButton");
playButton.onclick = async () => {
  let link = document.querySelector("input.linkInput").value;

  if (currentSound) {
    killSound();
  }

  playButton.disabled = true;
  currentSound = new Audio(link);

  await sleep(500);

  playButton.disabled = false;

  currentSound.play();

  if (currentSound) {
    currentSound.volume = Number(slider.value) / 100;
  }
  console.log(Number(slider.value) / 100);

  currentSound.addEventListener("ended", (ev) => {
    if (looping) {
      currentSound.play();
    } else {
      killSound();
    }
  });
};

let stopButton = document.querySelector("button.stopButton");
stopButton.onclick = killSound;

let loopButton = document.querySelector("button.loopButton");
loopButton.onclick = async () => {
  looping = !looping;
  if (looping) {
    loopButton.classList.add("active");
  } else {
    loopButton.classList.remove("active");
  }
};

let slider = document.querySelector('input[type="range"].slider');
slider.oninput = async () => {
  if (currentSound) {
    currentSound.volume = Number(slider.value) / 100;
  }
  console.log(Number(slider.value) / 100);
};
