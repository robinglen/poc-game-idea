let players = [
  {
    id: 'p1',
    name: 'Player 1',
    color: '#a13ea2',
    selectors: {
      score: 'p1-score'
    },
    active: true
  },
  {
    id: 'p2',
    name: 'Player 2',
    color: '#d8823f',
    selectors: {
      score: 'p2-score'
    },
    active: false
  }
];

function init() {
  // temp hack this will be controlled by firebase
  const switchButton = document.getElementsByClassName('switch-button')[0];
  switchButton.addEventListener('click', () => {
    const player = currentPlayer();
    if (player.id === 'p1') {
      players[0].active = false;
      players[1].active = true;
      switchButton.style.background = players[1].color;
    } else if (player.id === 'p2') {
      players[0].active = true;
      players[1].active = false;
      switchButton.style.background = players[0].color;
    }
  });
}

function bothPlayers() {
  return players;
}

function currentPlayer() {
  return players.filter(player => {
    if (player.active) {
      return player;
    }
  })[0];
}

export { init, currentPlayer, bothPlayers };
