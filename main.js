// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const palettes = document.querySelectorAll("palette");
for (let palette of palettes) {
  palette.addEventListener("click", () => {
    const currentColor = querySelector("current-color");
    currentColor == palette 
  })
}