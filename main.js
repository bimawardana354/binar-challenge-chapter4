class GameSetting {
  constructor() {
    this.player;
  }

  comRandomPick() {
    const comAll = [comRock, comPaper, comScissors];
    const comPicked = comAll[Math.floor(Math.random() * comAll.length)];
    return comPicked.id;
  }
}
const playerPicked = document.getElementById('player');
playerPicked.addEventListener('click', startGame);

const refreshAllGame = document.getElementById('refresh');
refresh.addEventListener('click', refreshGame);

const vs = document.getElementById('vsText');
const result = document.getElementById('resultGame');

function startGame(player) {
  const startG = new GameSetting();
  startG.comRandomPick();
  playerPicked.style.pointerEvents = 'none';
  const comPick = document.getElementById(startG.comRandomPick());
  comPick.classList.add('picked');
  const playerPick = document.getElementById(player.target.id);
  playerPick.classList.toggle('picked');
  console.log('Player pick :', playerPick.id);
  console.log('Computer pick : ', comPick.id);
  vs.style.display = 'none';

  // logic game
  if ((playerPick.id === 'pPaper' && comPick.id === 'comRock') || (playerPick.id === 'pRock' && comPick.id === 'comScissors') || (playerPick.id === 'pScissors' && comPick.id === 'comPaper')) {
    console.log('player 1 win');
    result.setAttribute('class', 'box-result');
    resultGame.innerHTML = 'PLAYER 1<br>WIN';
  } else if ((playerPick.id === 'pRock' && comPick.id === 'comRock') || (playerPick.id === 'pPaper' && comPick.id === 'comPaper') || (playerPick.id === 'pScissors' && comPick.id === 'comScissors')) {
    console.log('draw');
    result.style.backgroundColor = '#035B0C';
    result.setAttribute('class', 'box-result');
    result.innerHTML = 'DRAW';
  } else {
    console.log('com win');
    result.setAttribute('class', 'box-result');
    result.innerHTML = 'COM<br>WIN';
  }
}

function refreshGame() {
  location.reload('.main');
  // playerPicked.style.pointerEvents = 'auto';
  // playerPicked.classList.remove('picked');
  // comPicked.classList.remove('picked');
  // document.getElementById(comPick).style.visibility = "hidden";
  // vs.style.visibility = "visible";
  // document.getElementById('player').addEventListener("click", startGame);
}
