// Game initialization (Game state)

// State initialization
const state = {
  player: "Melwin",
  wizard: {
    x: 100,
    y: 100,
    width: 150,
    height: 150,
  },
  isGameOver: false,
  points: 0,
  controls: {
    KeyA:false,
    KeyS:false,
    KeyD:false,
    KeyW:false,
    Space:false,
  }
};
    


// Game object creation
const gameArea = document.querySelector(".game-area");
const factory = {
  createWizard(wizard) {
    // create Element
    const wizardElement = document.createElement("div");
    wizardElement.classList.add("wizard");

    // set Styles
    wizardElement.style.width = wizard.width + "px";
    wizardElement.style.height = wizard.height + "px";
    wizardElement.style.backgroundImage = 'url("images/mage.png")';
    wizardElement.style.backgroundSize = "contain";
    wizardElement.style.backgroundRepeat = "no-repeat";
    wizardElement.style.backgroundPosition = "center";

    // set position
    wizardElement.style.position = "absolute";
    wizardElement.style.left = wizard.x + "px";
    wizardElement.style.top = wizard.y + "px";

    // attach to DOM
    gameArea.appendChild(wizardElement);
  },
};

// Input control
document.addEventListener("keydown", (e) => {

  if(state.controls.hasOwnProperty(e.code)){
    state.controls[e.code] = true; // само ако са натиснати бутони ги смени на true
  }
});

document.addEventListener("keyup", (e) => {
  if(state.controls.hasOwnProperty(e.code)){
    state.controls[e.code] = false;
  }
});

// Game loop
function newFrame() {
  console.log(state.controls);
  const wizardElement = document.querySelector(".wizard");
  if (wizardElement) {
    wizardElement.style.left = `${state.wizard.x++}px`;
  }

  if (!state.isGameOver) {
    window.requestAnimationFrame(newFrame);
  }
}

const startElement = document.querySelector(".game-start");
startElement.addEventListener("click", (e) => {
  // Hide start element
  e.currentTarget.classList.add("hidden");

  // Initialize game
  factory.createWizard(state.wizard);

  // Start game loop
  window.requestAnimationFrame(newFrame);
});
