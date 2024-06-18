const gameArea = document.querySelector(".game-area");

export const factory = {
  createWizard(wizard) {
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

    // Attach to DOM
    gameArea.appendChild(wizardElement);
  },
  createFireBall(wizard) {
    //create element

    const fireballElement= document.createElement("div");
    fireballElement.classList.add("fireball");  

    //style
    
     fireballElement.style.backgroundImage= 'url("images/fire-ball.png")';
     fireballElement.style.backgroundSize="contain";
     fireballElement.style.backgroundRepeat="no-repeat";
     fireballElement.style.backgroundPosition="center";
     fireballElement.style.width="50px";
     fireballElement.style.height="50px";
     fireballElement.style.position="absolute";
 
    
    

//position
fireballElement.style.left=wizard.x + wizard.width + 'px';
fireballElement.style.top=wizard.x + wizard.width /2 + 'px' ;

    // add to Dom
    gameArea.appendChild(fireballElement);
    

  }
}
