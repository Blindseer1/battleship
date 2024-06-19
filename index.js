
const Player = require('./player')
import shipImg from './ship-svgrepo-com.svg'
import explosionImg from './explosion-svgrepo-com.svg'
import waveImg from './sea-waves-svgrepo-com.svg'

const playerBoard = document.querySelectorAll('.gameboard')[0];
const computerBoard = document.querySelectorAll('.gameboard')[1];
let prompt = document.querySelector('.prompt');
const playButton = document.querySelector('#play');
const randomButton = document.querySelector('#random')

let gameOver = 0;

let player = Player();
let computer = Player();

const updateBoard = (board, player) => {
  let cells = Array.from(board.querySelectorAll('div'))
  let i = 0, j = 0;
  let grid = player.gb.returnGrid();

  cells.forEach((cell) => {
    cell.innerHTML = '';
    let ship = new Image();
    ship.src = shipImg;
    ship.className = "icons";
    ship.classList.add("ship")

    let miss = new Image();
    miss.src = waveImg;
    miss.className = "icons";

    let boom = new Image();
    boom.src = explosionImg;
    boom.className = "icons";

    if (grid[i][j] == -1)
      cell.appendChild(miss);
    else
      if (grid[i][j] == 1)
        cell.appendChild(boom);
      else
        if (grid[i][j] != 0)
          cell.appendChild(ship)


    j++;
    if (j == 10) {
      i++;
      j = 0;
    }


  }
  )
}


const computerListener = () => {
  let i, j;

  Array.from(computerBoard.querySelectorAll('div')).forEach((cell, index) => {
    cell.addEventListener('click', () => {
      if (gameOver == 0) {
        i = Math.floor(index / 10);
        j = index % 10;
        console.log('i is ' + i + ' and j is ' + j)

        computer.gb.receiveAttack(i, j);
        updateBoard(computerBoard, computer)
        console.log(computer.gb.lose == 1)
        if (computer.gb.lose == 1) {
          prompt.textContent = "Computer Lost";
          gameOver = 1;
        }
        computerMove()
        updateBoard(playerBoard, player)
        if (player.gb.lose == 1) {
          prompt.textContent = "Player Lost";
          gameOver = 1;
        }
      }
    })


  })


}





const computerMove = () => {
  let cells = Array.from(playerBoard.querySelectorAll('div'))
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10)

  console.log('initial coord are ' + x + ' ' + y)

  while (cells[x * 10 + y].children[0] != undefined && cells[x * 10 + y].children[0].className.slice(-4) != "ship") {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10)
  }
  player.gb.receiveAttack(x, y)
  updateBoard(playerBoard, player)


  console.log(x, y)



}

let coordinatesGenerated = 0;

const clearB = (board, user) => {
  user.gb.clearBoard()
  console.log(user.gb.shipsPrint())
  updateBoard(board, user);
}


playButton.addEventListener('click', () => {
  if (coordinatesGenerated == 1) {
    gameOver = 0;
    console.log(computer.gb.shipsPrint())

  }

})

const randomCoordinates = (player) => {
  let dirs = ['h', 'v'];
  let lenghts = [5, 4, 3, 3, 2]

  for (let len of lenghts) {
    let x = Math.floor(Math.random() * 10)
    let y = Math.floor(Math.random() * 10)
    let dir = dirs[Math.floor(Math.random() * 2)]
    let a = player.gb.placeShip(len, [x, y], dir);
    console.log(a);
    while (a == -1) {
      x = Math.floor(Math.random() * 10)
      y = Math.floor(Math.random() * 10)
      dir = dirs[Math.floor(Math.random() * 2)]
      console.log('x is ' + x + ' y is ' + y + 'len is ' + len + 'and dir is ' + dir)
      a = player.gb.placeShip(len, [x, y], dir);
    }
    player.gb.placeShip(len, [x, y], dir)
  }

  coordinatesGenerated = 1;

}

randomButton.addEventListener('click', () => {
  clearB(computerBoard, computer)
  clearB(playerBoard, player)
  randomCoordinates(computer)
  randomCoordinates(player)
  updateBoard(computerBoard, computer)
  updateBoard(playerBoard, player)
  computerListener()
})


