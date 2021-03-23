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
    const y_increment = this._getYIncrement(command);

    this.position[1] += y_increment;
  }

  _getYIncrement(command) {
    if (command == 'b') {
      if (this.position[1] == 1) {
        return 4;
      } else {
        return -1;
      }
    }

    if (this.position[1] == 5) {
      return -4;
    }
    else {
      return 1;
    }
  }
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
  const robot = new Robot({ position: [3, 1], orientation: 'N' });

  // when
  robot.move('f');

  // then
  expect(robot.position).to.deep.equal([3, 2]);
});

it('moves forward from 1, 5 when facing North', () => {
  // given
  const robot = new Robot({ position: [1, 5], orientation: 'N' });

  // when
  robot.move('f');

  // then
  expect(robot.position).to.deep.equal([1, 1]);
});

it('moves backward from 1, 2 when facing North', () => {
  // given
  const robot = new Robot({ position: [1, 2], orientation: 'N' });

  // when
  robot.move('b');

  // then
  expect(robot.position).to.deep.equal([1, 1]);
});

it('moves backward from 1, 3 when facing North', () => {
  // given
  const robot = new Robot({ position: [1, 3], orientation: 'N' });

  // when
  robot.move('b');

  // then
  expect(robot.position).to.deep.equal([1, 2]);
});

it('moves backward from 1, 1 when facing North', () => {
  // given
  const robot = new Robot({ position: [1, 1], orientation: 'N' });

  // when
  robot.move('b');

  // then
  expect(robot.position).to.deep.equal([1, 5]);
});

it('moves backward from 2, 2 when facing North', () => {
  // given
  const robot = new Robot({ position: [2, 2], orientation: 'N' });

  // when
  robot.move('b');

  // then
  expect(robot.position).to.deep.equal([2, 1]);
});
