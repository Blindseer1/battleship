const Ship = require('./ship');
const GameBoard = () => {
  let gb = {};
  gb.ships = [];
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
  gb.lose = 0;

  gb.placeShip = (len, [x, y], dir) => {
    let s = Ship(len);
    if (dir == 'h' && y + len <= 10) {
      for (let i = y; i < y + len; i++)
        if (grid[x][i] != 0) return -1;
      for (let i = y; i < y + len; i++)
        grid[x][i] = s;

    }
    else if (dir == 'v' && x + len <= 10) {

      for (let i = x; i < x + len; i++)
        if (grid[i][y] != 0) return -1;

      for (let i = x; i < x + len; i++)
        grid[i][y] = s;

    }
    else
      return -1;
    gb.ships.push(s)

  }

  gb.shipStatus = () => {
    for (let ship of gb.ships)
      if (ship.isSunk() == false)
        return 1;
    return 0;

  }

  gb.receiveAttack = (x, y) => {

    if (grid[x][y] == 0)
      grid[x][y] = -1;
    else
      if (grid[x][y] != -1) {
        grid[x][y].hit();
        grid[x][y] = 1;
      }

    if (gb.shipStatus() == 0)
      gb.lose = 1;
  }
  gb.shipsPrint = () => gb.ships;

  gb.printGrid = () => {
    for (let row of grid) {
      console.log(row.map(cell => (cell === 0 ? '.' : cell)).join(' '));
    }
  };

  gb.returnGrid = () => grid;
  gb.clearBoard = () => {
    grid = [
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
    gb.ships.length = 0;
  }
  return gb;
}


module.exports = GameBoard;
