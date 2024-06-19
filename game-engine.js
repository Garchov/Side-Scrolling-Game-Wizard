import { state } from "./game-state.js";
import { factory } from "./game-objects.js";
import { config } from "./game-config.js";

const gameScore = document.querySelector(".game-score");
const gameArea = document.querySelector(".game-area");

function newFrame() {
  const wizardElement = modifyWizardPosition();

  const fireBalls = document.querySelectorAll(".fireball");
  for (const fireBall of fireBalls) {
    if (fireBall.offsetLeft > gameArea.offsetWidth) {
      fireBall.remove();
    } else {
      fireBall.style.left = fireBall.offsetLeft + config.magicSpeed + "px";
    }
  }

  if (Date.now() > state.dragonSpawn + state.maxDragonSpawnTime) {
    factory.createMonsters();
    state.dragonSpawn = Date.now();
  }

  const dragons = document.querySelectorAll(".dragon");
  dragons.forEach((dragon) => {
    if (dragon.offsetLeft < 0) {
      return dragon.remove();
    }

    const hasCollision = checkCollision(wizardElement, dragon);
    if (hasCollision) {
      state.isGameOver = true;
      document.querySelector(".game-over").classList.remove("hidden");
      return; // Излизаме от функцията, когато има колизия с дракона
    }

    fireBalls.forEach((fireBall) => {
      if (checkCollision(fireBall, dragon)) {
        fireBall.remove();
        dragon.remove();
        factory.addExperience(1000, dragon);
      }
    });

    dragon.style.left = dragon.offsetLeft - config.dragonSpeed + "px";
  });

  if (!state.isGameOver) {
    state.score += config.timePoints;
    gameScore.textContent = state.score + " points";
    window.requestAnimationFrame(newFrame);
  }
}

function checkCollision(firstElement, secondElement) {
  const firstRect = firstElement.getBoundingClientRect();
  const secondRect = secondElement.getBoundingClientRect();

  const hasCollision = !(
    firstRect.top > secondRect.bottom ||
    firstRect.right < secondRect.left ||
    firstRect.bottom < secondRect.top ||
    firstRect.left > secondRect.right
  );
  return hasCollision;
}

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
      factory.createFireBall(wizard);
    }
  } else {
    wizardElement.style.backgroundImage = 'url("images/mage-attack.png")';
  }
  return wizardElement;
}

export const engine = {
  start() {
    window.requestAnimationFrame(newFrame);
  },
};
