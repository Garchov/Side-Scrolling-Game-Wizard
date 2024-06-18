//Game initialization (Game state)

// State initialization

const state = {
  player: " Melwin",
  wizard: {
    x: 100,
    y: 100,
    width: 150,
    height: 150,
  },
};

//Game object creation
const gameArea=document.querySelector(".game-area");
const factory = {
  createWizzard(wizard) {
    //create Element
    const wizzardElement=document.createElement('div');

    //set Styles
    wizzardElement.style.width=wizard.width + 'px';
    wizzardElement.style.height=wizard.height + 'px';
    wizzardElement.style.backgroundImage='url("images/mage.png")';
    wizzardElement.style.backgroundSize='contain';
    wizzardElement.style.backgroundRepeat='no-repeat';
    wizzardElement.style.backgroundPosition='center';
    

   
   
    //set position
    wizzardElement.style.position='absolute';
    wizzardElement.style.left=wizard.x + 'px';
    wizzardElement.style.top=wizard.y + 'px';

    //add class
    wizzardElement.classList.add('wizzard');
    //attached to DOM
    gameArea.appendChild(wizzardElement);
  },
};

//Input control

//Game loop

//Game frames
function newFrame() {}

//Game start
const startElement = document.querySelector(".game-start");
startElement.addEventListener("click", (e) => {
  //Hide start element
  e.currentTarget.classList.add("hidden");

  //Initialize game
  factory.createWizzard(state.wizard);
});
