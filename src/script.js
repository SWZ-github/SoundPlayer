document.querySelector("button.submitButton").onclick = async () => {
  let link = document.querySelector("input.linkInput").value;

  let audio = new Audio(link);
  audio.play();
};
