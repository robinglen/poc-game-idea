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

function populateArrayWithSplat(x, y, size) {
  const xLength = x + size;
  const yLength = y + size;

  // bug here is where you can over shoot array
  for (let i = x - 1; i <= xLength; i++) {
    for (let j = y - 1; j <= yLength; j++) {
      defaults.grid[i][j] = true;
    }
  }
}

function calculatePercentOfCanvusCovered(x, y, size) {
  let pixelsSelected = 0;
  const totalPixels = defaults.canvus.width * defaults.canvus.height;
  defaults.grid.forEach(x => {
    if (x.length > 0) {
      x.forEach(y => {
        pixelsSelected += 1;
      });
    }
  });
  const percentageCovered = Math.round(pixelsSelected / totalPixels * 100);
  console.log(`${percentageCovered}% Covered`);
}

function mapSplatToArray(x, y, size) {
  populateArrayWithSplat(x, y, size);
  calculatePercentOfCanvusCovered(x, y, size);
  console.log(`Clicked x:${x} y:${y} - ${size}`);
}

export { init, mapSplatToArray };
