// State initialization
export const state = {
  player: "Melwin",
  wizard: {
    x: 100,
    y: 100,
    width: 150,
    height: 150,
  lastMagicUse:0,
  cooldown : 500,
  },
  isGameOver: false,
 score: 0,
  controls: {
    KeyA: false,
    KeyS: false,
    KeyD: false,
    KeyW: false,
    Space: false,
  },
};