
//define USS assembly and alien ships
const ussAssembly = {
  name: "USS Assembly",
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
};

const alienShips = [];
const numAlienShips = 6;

for (let i = 0; i < numAlienShips; i++) {
  const alienShip = {
    name: "ALIEN SHIP",
    hull: Math.floor(Math.random() * 4) + 3,
    firepower: Math.floor(Math.random() * 3) + 2,
    accuracy: (Math.floor(Math.random() * 3) + 6) / 10,
  };
  alienShips.push(alienShip);
}

// Define game variables
let currentShipIndex = 0;
let gameOver = false;

// Define game functions
function attack(attacker, defender) {
  console.log(`The ${attacker.name} attacks the ${defender.name}!`);
  if (Math.random() < defender.accuracy) {
    console.log(`The ${defender.name} has been hit with ${attacker.firepower} damage!`);
    defender.hull -= attacker.firepower;
    if (defender.hull <= 0) {
      console.log(`The ${defender.name} has been destroyed!`);
      currentShipIndex++;
      if (currentShipIndex >= numAlienShips) {
        console.log("YOU WON AND SAVED THE WORLD FROM ETERNAL DARKNESS!");
        gameOver = true;
      }
    }
  } else {
    console.log(`The ${attacker.name} missed!`);
  }
}

// Start the game
console.log("The aliens have officially attacked us. Only AMERICA can save the world!");

let continueGame = true;

while (!gameOver && continueGame) {
  const currentAlienShip = alienShips[currentShipIndex];
  console.log(`You have encountered an alien ship with ${currentAlienShip.hull} hull points.`);
  while (ussAssembly.hull > 0 && currentAlienShip.hull > 0) {
    attack(ussAssembly, currentAlienShip);
    if (currentAlienShip.hull > 0) {
      attack(currentAlienShip, ussAssembly);
    }
  }
  if (ussAssembly.hull <= 0) {
    console.log("It's GAME OVER for you! Bye Bye now.");
    gameOver = true;
  } else if (currentShipIndex < numAlienShips) {
    continueGame = prompt(`Do you want to attack the next ship (${currentShipIndex + 1} of ${numAlienShips})? Type 'yes' or 'no'`);
    if (continueGame.toLowerCase() === "no") {
      console.log("You ESCAPED from the battle!");
      gameOver = true;
    }
  }
}
