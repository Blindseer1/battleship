const Ship = require('./ship');
const GameBoard = () => {
  let gb = {};
  let ships = [];
  let grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];


  gb.placeShip = (len, [x, y], dir) => {
    let s = Ship(len);
    if (dir == 'h')
      for (let i = y; i < y + len; i++)
        grid[x][i] = s;
    else
      for (let i = x; i < x + len; i++)
        grid[i][y] = s;
    ships.push(s)

  }

  gb.shipStatus = () => {
    for (let ship of ships)
      if (ship.isSunk() == false)
        return 1;
    return 0;

  }

  gb.receiveAttack = (x, y) => {

    if (grid[x][y] == 0)
      grid[x][y] = -1;
    else
      if (grid[x][y] != -1)
        grid[x][y].hit();

    if (gb.shipStatus() == 0)
      console.log('All ships sunk')
  }
  gb.shipsPrint = () => ships;

  gb.printGrid = () => {
    for (let row of grid) {
      console.log(row.map(cell => (cell === 0 ? '.' : cell)).join(' '));
    }
  };



  return gb;
}

module.exports = GameBoard;
