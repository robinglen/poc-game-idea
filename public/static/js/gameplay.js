import { resetBucket, getCurrentBucketSize } from '/js/bucket.js';
import { mapSplatToArray } from '/js/canvus.js';
import { currentPlayer } from '/js/players.js';

const defaults = {
  selectors: {
    canvus: 'game-area',
    splatt: 'splatt'
  }
};

function init() {
  const gameArea = document.getElementsByClassName(
    defaults.selectors.canvus
  )[0];
  gameArea.addEventListener('click', interactWithGameArea);
}

function splattPaint(x, y, size) {
  const player = currentPlayer();
  const gameArea = document.getElementsByClassName(
    defaults.selectors.canvus
  )[0];
  const splatt = document.createElement('div');
  splatt.className = defaults.selectors.splatt;
  splatt.style.width = `${size}px`;
  splatt.style.height = `${size}px`;
  splatt.style.top = `${y}px`;
  splatt.style.left = `${x}px`;
  splatt.style.background = player.color;
  gameArea.appendChild(splatt);
}

function interactWithGameArea(event) {
  const currentBucketSize = getCurrentBucketSize();
  mapSplatToArray(event.clientX, event.clientY, currentBucketSize);
  splattPaint(event.clientX, event.clientY, currentBucketSize);
  resetBucket();
}

export { init };
