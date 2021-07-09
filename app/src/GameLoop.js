import Constants from "./Constants";

const getRandomStartingPosition = () =>
  Math.random() < 0.5
    ? [
        Math.random() * Constants.MAX_WIDTH,
        Math.random() < 0.5 ? 0 : Constants.MAX_HEIGHT,
      ]
    : [
        Math.random() < 0.5 ? 0 : Constants.MAX_WIDTH,
        Math.random() * Constants.MAX_HEIGHT,
      ];

const generateEnemy = (enemyList) => {
  enemyList.elements.push({
    position: getRandomStartingPosition(),
    xSpeed: Math.random() * 2 - 1,
    ySpeed: Math.random() * 2 - 1,
  });
};

const moveEnemies = (enemyList) => {
  enemyList.moveCounter = enemyList.enemySpeed;

  enemyList.elements.forEach((enemy) => {
    enemy.position[0] += enemy.xSpeed * Constants.ENEMY_SPEED_MODIFIER;
    enemy.position[1] += enemy.ySpeed * Constants.ENEMY_SPEED_MODIFIER;
  });
};

const deleteRunawayEnemies = (enemyList) => {
  enemyList.elements = enemyList.elements.filter(
    (enemy) =>
      !(
        enemy.position[0] < -100 ||
        enemy.position[0] > Constants.MAX_WIDTH ||
        enemy.position[1] < -200 ||
        enemy.position[1] > Constants.MAX_HEIGHT
      )
  );
};

const killTouchedEnemy = (enemyList, touches, mrBubble) => {
  for (let i = 0; i < touches.length; i++) {
    if (touches[i].type === "press") {
      for (let j = 0; j < enemyList.elements.length; j++) {
        const deltaX =
          touches[i].event.pageX -
          Constants.MARGIN_HORIZONTAL * 2 -
          enemyList.elements[j].position[0];
        const deltaY =
          touches[i].event.pageY -
          Constants.MARGIN_VERTICAL * 2 -
          enemyList.elements[j].position[1];
        console.log(`DELTA X: ${deltaX} | DELTA Y: ${deltaY}`);
        if (deltaX < 13 && deltaY < 13) {
          enemyList.elements = enemyList.elements.filter(
            (enemy, index) => index != j
          );
          mrBubble.size -= Constants.MR_BUBBLE_SIZE_REDUCTION;
          return;
        }
      }
    }
  }
};

const checkIfBubbleHit = (enemyList, mrBubble, onHit) => {
  for (let i = 0; i < enemyList.elements.length; i++) {
    const deltaX =
      enemyList.elements[i].position[0] -
      (mrBubble.position[0] + mrBubble.size / 2);
    const deltaY =
      enemyList.elements[i].position[1] -
      (mrBubble.position[1] + mrBubble.size / 2);

    if (Math.abs(deltaX) < mrBubble.size && Math.abs(deltaY) < mrBubble.size)
      onHit();
  }
};

export default function (entities, { touches, events, dispatch }) {
  const mrBubble = entities.mrBubble;
  const enemyList = entities.enemyList;

  Math.floor(Math.random() * 100) > 98 ? generateEnemy(enemyList) : null;
  enemyList.moveCounter === 0
    ? moveEnemies(enemyList)
    : enemyList.moveCounter--;
  deleteRunawayEnemies(enemyList);
  killTouchedEnemy(enemyList, touches, mrBubble);
  checkIfBubbleHit(enemyList, mrBubble, () => dispatch("gameOver"));

  return entities;
}
