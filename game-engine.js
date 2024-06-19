import { state, state as wizard } from "./game-state.js";
import{factory}from "./game-objects.js";
import { config } from "./game-config.js";

const gameScore = document.querySelector(".game-score");
const gameArea = document.querySelector(".game-area");

// Game frames
function newFrame() {
  //Move wizard
  modifyWizardPosition();

  //Modify fireballs

  const fireBalls=document.querySelectorAll('.fireball');
  for (const fireBall of fireBalls) {

    if(fireBall.offsetLeft >gameArea.offsetWidth){
     fireBall.remove();
    }else{

      fireBall.style.left = fireBall.offsetLeft + config.magicSpeed+"px";
    }
    
  }

  //Apply score
  state.score += config.timePoints;
  gameScore.textContent = state.score + " points";
  
  //Game over check
  if (!wizard.isGameOver) {
    window.requestAnimationFrame(newFrame);
  }
}

//TODO: FIX acceleration on diagonals
function modifyWizardPosition() {
  const wizardElement = document.querySelector(".wizard");

  const { wizard } = state;
  if (state.controls.KeyA && wizard.x > 0) {
      wizardElement.style.left = `${(wizard.x -= config.speed)}px`;
  }
  if (state.controls.KeyD && wizard.x + wizard.width < gameArea.offsetWidth) {
      wizardElement.style.left = `${(wizard.x += config.speed)}px`;
  }
  if (state.controls.KeyW && wizard.y > 0) {
      wizardElement.style.top = `${(wizard.y -= config.speed)}px`;
  }
  if (state.controls.KeyS && wizard.y + wizard.height < gameArea.offsetHeight) {
      wizardElement.style.top = `${(wizard.y += config.speed)}px`;
  }
  if (state.controls.Space) {
      if (Date.now() - wizard.lastMagicUse > wizard.cooldown) {
          wizardElement.style.backgroundImage = 'url("images/mage-deffence.png")';
          // Create fireball
          factory.createFireBall(wizard);
      }
  } else {
      wizardElement.style.backgroundImage = 'url("images/mage-attack.png")';
  }
}

export const engine = {
  start() {
    window.requestAnimationFrame(newFrame);
  },
};
