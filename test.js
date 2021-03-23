const { expect } = require('chai');

// aller en avant = se déplacer d'une case
// changer de direction
//
// je suis orienté vers le nord ("N"), si j'ai une commande "l" alors je suis
// maintenant orienté vers l'ouest

// move(robot, command) -> robot
//
// contrainte : pas de mutation

// Refactorer vers du code objet ?

class Robot {
  constructor({
    position,
    orientation
  }) {
    this.position = position;
    this.orientation = orientation;
  }
  move(command) {
    const moved_robot = move(this, command);
    this.position = moved_robot.position;
  }
}


function move(robot, command) {
  const x = robot.position[0];
  const y = robot.position[1];

  const increment = _getIncrement(command, y);

  return { position: [x, y + increment] }
}

function _getIncrement(command, y) {
  let increment;

  if (command == 'b') {
    if (y == 1) {
      increment = 4;
    } else {
      increment = -1;
    }
  }
  else {
    if (y == 5) {
      increment = -4;
    }
    else {
      increment = 1;
    }
  }

  return increment;
}

// --------------------------

// ^
// |.....
// |.....
// |.....
// |.....
// |..^..
// +----->

it('moves forward from 1, 1 when facing North', () => {
  // given
  const robot = new Robot({ position: [1, 1], orientation: 'N' });

  // when
  robot.move('f');

  // then
  expect(robot.position).to.deep.equal([1, 2]);
});

it('moves forward from 1, 2 when facing North', () => {
  // given
  const robot = new Robot({ position: [1, 2], orientation: 'N' });

  // when
  robot.move('f');

  // then
  expect(robot.position).to.deep.equal([1, 3]);
});

it('moves forward from 3, 1 when facing North', () => {
  // given
  const robot = { position: [3, 1], orientation: 'N' };

  // when
  const moved_robot = move(robot, 'f');

  // then
  expect(moved_robot.position).to.deep.equal([3, 2]);
});

it('moves forward from 1, 5 when facing North', () => {
  // given
  const robot = { position: [1, 5], orientation: 'N' };

  // when
  const moved_robot = move(robot, 'f');

  // then
  expect(moved_robot.position).to.deep.equal([1, 1]);
});

it('moves backward from 1, 2 when facing North', () => {
  // given
  const robot = { position: [1, 2], orientation: 'N' };

  // when
  const moved_robot = move(robot, 'b');

  // then
  expect(moved_robot.position).to.deep.equal([1, 1]);
});

it('moves backward from 1, 3 when facing North', () => {
  // given
  const robot = { position: [1, 3], orientation: 'N' };

  // when
  const moved_robot = move(robot, 'b');

  // then
  expect(moved_robot.position).to.deep.equal([1, 2]);
});

it('moves backward from 1, 1 when facing North', () => {
  // given
  const robot = { position: [1, 1], orientation: 'N' };

  // when
  const moved_robot = move(robot, 'b');

  // then
  expect(moved_robot.position).to.deep.equal([1, 5]);
});

it('moves backward from 2, 2 when facing North', () => {
  // given
  const robot = { position: [2, 2], orientation: 'N' };

  // when
  const moved_robot = move(robot, 'b');

  // then
  expect(moved_robot.position).to.deep.equal([2, 1]);
});
