// State initialization
export const state = {
  player: "Melwin",
  wizard: {
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    lastMagicUse: 0,
    cooldown: 500,
  },
  isGameOver: false,
  score: 0,
  experience: 0,
  level: 1,
  nextLevelExperience: 10000,
  controls: {
    KeyA: false,
    KeyS: false,
    KeyD: false,
    KeyW: false,
    Space: false,
  },
  dragonSpawn: 0,
  maxDragonSpawnTime: 2000,
};
