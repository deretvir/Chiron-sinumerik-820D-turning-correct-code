const input = document.querySelector(".input");
console.log(input);
const inputTextarea = document.querySelector(".textarea");
inputTextarea.setAttribute("readonly", true);
const body = document.querySelector("body");
const correctCodeArea = document.querySelector(".code");
const copyIcon = document.querySelector(".copyIcon");

// CHange code by paste or hand input
function handleText() {
  const code = inputTextarea.value
    .replace(/SPOS/g, ";SPOS")
    .replace(/X-/g, "X")
    .replace(/TURNVR/g, "plecak")
    .replace(/TURNVL/g, "TURNVR")
    .replace(/plecak/g, "TURNVL")
    .replace(/G0 X1500 Y500/g, "G0 X-1500 Y500");

  correctCodeArea.innerHTML += code;
}

//attach file and insert the content to inputTextarea.innerHTML
function handleFile(e) {
  const file = e.target.files;
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const inputTextFromFile = reader.result;
      inputTextarea.innerHTML = inputTextFromFile;
    };
    //withput it desn't work
    reader.readAsText(input.files[0]);
  }
}
//adding "made by Mateusz Leśniczek"
function madeBy() {
  correctCodeArea.innerHTML = ";Made by Mateusz Leśniczek\n";
}
// copy function
async function copyContent() {
  try {
    await navigator.clipboard.writeText(correctCodeArea.innerHTML);
    console.log("Content copied to clipboard");
    /* Resolved - text copied to clipboard successfully */
  } catch (err) {
    console.error("Failed to copy: ", err);
    /* Rejected - text failed to copy to the clipboard */
  }
}

body.addEventListener("click", () =
  madeBy(), handleText();
});
input.addEventListener("change", handleFile);

// copy content
copyIcon.addEventListener("click", copyContent);
