import { currentPlayer, bothPlayers } from '/js/players.js';

const defaults = {
  canvus: {
    width: 517,
    height: 435
  }
};

function init() {
  defaults.grid = new Array(defaults.canvus.width);

  for (let i = 0; i <= defaults.canvus.width; i++) {
    defaults.grid[i] = new Array(defaults.canvus.height);
  }
}

function populateArrayWithSplat(x, y, size, player) {
  const xLength = x + size;
  const yLength = y + size;

  // bug here is where you can over shoot array
  for (let i = x - 1; i <= xLength; i++) {
    for (let j = y - 1; j <= yLength; j++) {
      let xAxis = i;
      let yAxis = j;
      if (i >= defaults.canvus.width) {
        xAxis = defaults.canvus.width;
      }
      if (j >= defaults.canvus.height) {
        yAxis = defaults.canvus.height;
      }
      defaults.grid[xAxis][yAxis] = player.id;
    }
  }
}

function calculatePercentOfCanvusCovered(x, y, size, player) {
  let pixelsSelected = 0;
  const totalPixels = defaults.canvus.width * defaults.canvus.height;
  defaults.grid.forEach(x => {
    if (x.length > 0) {
      x.forEach(y => {
        if (y === player.id) {
          pixelsSelected += 1;
        }
      });
    }
  });
  const percentageCovered = Math.round(pixelsSelected / totalPixels * 100);
  const scoreSelector = document.getElementsByClassName(
    player.selectors.score
  )[0];
  const score = `${percentageCovered}%`;
  scoreSelector.innerText = score;
  console.log(`${player.name}: ${score} covered`);
  if (percentageCovered >= 80) {
    console.log(`${player.name} wins`);
  }
}

function mapSplatToArray(x, y, size) {
  const player = currentPlayer();
  const players = bothPlayers();
  populateArrayWithSplat(x, y, size, player);
  calculatePercentOfCanvusCovered(x, y, size, players[0]);
  calculatePercentOfCanvusCovered(x, y, size, players[1]);
  console.log(`Clicked x:${x} y:${y} - ${size}`);
}

export { init, mapSplatToArray };
