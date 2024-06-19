import { state } from "./game-state.js";

const gameArea = document.querySelector(".game-area");
const fireballSound = document.getElementById("fireball-sound");
const experienceGain = document.querySelector(".experience-gain");

export const factory = {
  createWizard(wizard) {
    const wizardElement = document.createElement("div");
    wizardElement.classList.add("wizard");
    wizardElement.style.width = wizard.width + "px";
    wizardElement.style.height = wizard.height + "px";
    wizardElement.style.backgroundImage = 'url("images/mage.png")';
    wizardElement.style.backgroundSize = "contain";
    wizardElement.style.backgroundRepeat = "no-repeat";
    wizardElement.style.backgroundPosition = "center";
    wizardElement.style.position = "absolute";
    wizardElement.style.left = wizard.x + "px";
    wizardElement.style.top = wizard.y + "px";
    gameArea.appendChild(wizardElement);
  },

  createFireBall(wizard) {
    if (wizard.lastMagicUse + wizard.cooldown > Date.now()) {
      return;
    }

    const fireballElement = document.createElement("div");
    fireballElement.classList.add("fireball");
    fireballElement.style.backgroundImage = 'url("images/fire-ball.png")';
    fireballElement.style.backgroundSize = "contain";
    fireballElement.style.backgroundRepeat = "no-repeat";
    fireballElement.style.backgroundPosition = "center";
    fireballElement.style.width = "50px";
    fireballElement.style.height = "50px";
    fireballElement.style.position = "absolute";
    fireballElement.style.left = wizard.x + wizard.width + "px";
    fireballElement.style.top = wizard.y + wizard.height / 2 - 25 + "px";
    wizard.lastMagicUse = Date.now();
    fireballSound.currentTime = 0;
    fireballSound.play();
    gameArea.appendChild(fireballElement);
  },

  createMonsters() {
    const dragonEl = document.createElement("div");
    dragonEl.classList.add("dragon");
    dragonEl.style.backgroundImage = 'url("images/red-dragon.png")';
    dragonEl.style.backgroundSize = "contain";
    dragonEl.style.backgroundRepeat = "no-repeat";
    dragonEl.style.backgroundPosition = "center";
    dragonEl.style.width = "50px";
    dragonEl.style.height = "50px";
    dragonEl.style.position = "absolute";
    dragonEl.style.left = gameArea.offsetWidth + "px";
    dragonEl.style.top = Math.random() * (gameArea.offsetHeight - 50) + "px";
    gameArea.appendChild(dragonEl);
  },

  addExperience(amount, dragon) {
    // Добавяне на опит
    state.experience += amount;
    
    // Актуализиране на дисплея за опита
    const experienceDisplay = document.querySelector(".experience-display");
    if (experienceDisplay) {
      experienceDisplay.textContent = `Experience: ${state.experience} / ${state.nextLevelExperience}`;
    }
  
    // Показване на ефекта за печалба на опит
    if (experienceGain) {
      experienceGain.textContent = `+${amount} XP`;
      experienceGain.style.left = `${dragon.offsetLeft}px`;
      experienceGain.style.top = `${dragon.offsetTop}px`;
      experienceGain.classList.remove("hidden");
  
      setTimeout(() => {
        experienceGain.classList.add("hidden");
      }, 1000);
    }
  
    // Проверка за преминаване на ниво
    if (state.experience >= state.nextLevelExperience) {
      state.level++;
      state.experience -= state.nextLevelExperience;  
      state.nextLevelExperience += 5000;
  
      // Актуализиране на дисплея за нивото
      const levelDisplay = document.querySelector(".level-display");
      if (levelDisplay) {
        levelDisplay.textContent = `Level: ${state.level}`;
      }
    }
  }
};
