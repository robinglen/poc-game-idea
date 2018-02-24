import { resetBucket } from '/js/bucket.js';

const defaults = {
  selectors: {
    canvus: 'game-area'
  }
};

function init() {
  console.log('resetBucket');
  const gameArea = document.getElementsByClassName('game-area')[0];
  gameArea.addEventListener('click', interactWithGameArea);
}

function interactWithGameArea() {
  console.log('test');
  resetBucket();
}

export { init };
