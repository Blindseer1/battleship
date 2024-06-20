const Ship = require('./ship');
const GameBoard = () => {
  let gb = {};
  gb.ships = [];
  gb.grid = [
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
        if (gb.grid[x][i] != 0) return -1;
      for (let i = y; i < y + len; i++)
        gb.grid[x][i] = s;

    }
    else if (dir == 'v' && x + len <= 10) {

      for (let i = x; i < x + len; i++)
        if (gb.grid[i][y] != 0) return -1;

      for (let i = x; i < x + len; i++)
        gb.grid[i][y] = s;

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

    if (gb.grid[x][y] == 0)
      gb.grid[x][y] = -1;
    else
      if (gb.grid[x][y] != -1 && gb.grid[x][y] != 1) {
        gb.grid[x][y].hit();
        gb.grid[x][y] = 1;
        console.log('hit coo are ' + gb.grid[x][y])
      }

    if (gb.shipStatus() == 0)
      gb.lose = 1;
  }
  gb.shipsPrint = () => gb.ships;

  gb.printGrid = () => {
    for (let row of gb.grid) {
      console.log(row.map(cell => (cell === 0 ? '.' : cell)).join(' '));
    }
  };

  gb.returnGrid = () => gb.grid;
  gb.clearBoard = () => {
    gb.grid = [
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
    console.log(gb.grid)
    gb.ships.length = 0;
  }
  return gb;
}

module.exports = GameBoard;
