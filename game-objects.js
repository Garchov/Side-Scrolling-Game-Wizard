const gameArea = document.querySelector(".game-area");

// Get the audio element
const fireballSound = document.getElementById("fireball-sound");

export const factory = {
  createWizard(wizard) {
    //check cooldown
    if (wizard.lastMagicUsed + wizard.cooldown > Date.now()) {
      return;
    }

    // Create Element
    const wizardElement = document.createElement("div");
    wizardElement.classList.add("wizard");

    // Set Styles
    wizardElement.style.width = wizard.width + "px";
    wizardElement.style.height = wizard.height + "px";
    wizardElement.style.backgroundImage = 'url("images/mage.png")';
    wizardElement.style.backgroundSize = "contain";
    wizardElement.style.backgroundRepeat = "no-repeat";
    wizardElement.style.backgroundPosition = "center";

    // Set position
    wizardElement.style.position = "absolute";
    wizardElement.style.left = wizard.x + "px";
    wizardElement.style.top = wizard.y + "px";

    //modify wizard
    wizard.lastMagicUse = Date.now();

    // Attach to DOM
    gameArea.appendChild(wizardElement);
  },

  
  //fucntion create Fireball
  createFireBall(wizard) {
    
    // Check cooldown
    if (wizard.lastMagicUse + wizard.cooldown > Date.now()) {
      return;
    }

    // Create Element
    const fireballElement = document.createElement("div");
    fireballElement.classList.add("fireball");

    // Style
    fireballElement.style.backgroundImage = 'url("images/fire-ball.png")';
    fireballElement.style.backgroundSize = "contain";
    fireballElement.style.backgroundRepeat = "no-repeat";
    fireballElement.style.backgroundPosition = "center";
    fireballElement.style.width = "50px";
    fireballElement.style.height = "50px";
    fireballElement.style.position = "absolute";

    // Position
    fireballElement.style.left = wizard.x + wizard.width + "px";
    fireballElement.style.top = wizard.y + wizard.height / 2 - 25 + "px"; // Adjusted for center alignment

    // Update last magic use
    wizard.lastMagicUse = Date.now();

      // Play sound
      fireballSound.currentTime = 0; // Reset to start
      fireballSound.play();

    // Add to DOM
    gameArea.appendChild(fireballElement);
  },
};
