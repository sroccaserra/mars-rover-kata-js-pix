const { expect } = require('chai');

// aller en avant = se déplacer d'une case
// changer de direction
//
// je suis orienté vers le nord ("N"), si j'ai une commande "l" alors je suis
// maintenant orienté vers l'ouest

// move(robot, command) -> robot
//
// contrainte : pas de mutation

function move(robot) {
  const x = robot.position[0];
  const y = robot.position[1];

  if (y == 5) {
    return { position: [x, 1] }
  }
  return { position: [x, y+1] }
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
  const robot = { position: [1, 1], orientation: 'N' };

  // when
  const moved_robot = move(robot, 'f');

  // then
  expect(moved_robot.position).to.deep.equal([1, 2]);
});

it('moves forward from 1, 2 when facing North', () => {
  // given
  const robot = { position: [1, 2], orientation: 'N' };

  // when
  const moved_robot = move(robot, 'f');

  // then
  expect(moved_robot.position).to.deep.equal([1, 3]);
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
