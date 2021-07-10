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

const generateRechargePack = (rechargePackList) => {
  rechargePackList.elements.push({
    position: getRandomStartingPosition(),
    xSpeed: Math.random() * 2 - 1,
    ySpeed: Math.random() * 2 - 1,
  });
};

const moveEntities = (enemyList, rpList) => {
  enemyList.moveCounter = enemyList.enemySpeed;
  rpList.moveCounter = rpList.rechargePackSpeed;

  enemyList.elements.forEach((enemy) => {
    enemy.position[0] += enemy.xSpeed * Constants.ENEMY_SPEED_MODIFIER;
    enemy.position[1] += enemy.ySpeed * Constants.ENEMY_SPEED_MODIFIER;
  });
  rpList.elements.forEach((rp) => {
    rp.position[0] += rp.xSpeed * Constants.ENEMY_SPEED_MODIFIER;
    rp.position[1] += rp.ySpeed * Constants.ENEMY_SPEED_MODIFIER;
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

const checkTouched = (enemyList, touches, mrBubble, rpList) => {
  for (let i = 0; i < touches.length; i++) {
    if (touches[i].type === "press") {
      for (let j = 0; j < rpList.elements.length; j++) {
        const deltaX =
          touches[i].event.pageX -
          Constants.MARGIN_HORIZONTAL * 2 -
          rpList.elements[j].position[0];
        const deltaY =
          touches[i].event.pageY -
          Constants.MARGIN_VERTICAL * 2 -
          rpList.elements[j].position[1];
        if (Math.abs(deltaX) < 30 && Math.abs(deltaY) < 30) {
          rpList.elements = rpList.elements.filter((rp, index) => index != j);
          mrBubble.size += Constants.MR_BUBBLE_SIZE_INCREASE;
          return;
        }
      }
      for (let j = 0; j < enemyList.elements.length; j++) {
        const deltaX =
          touches[i].event.pageX -
          Constants.MARGIN_HORIZONTAL * 2 -
          enemyList.elements[j].position[0];
        const deltaY =
          touches[i].event.pageY -
          Constants.MARGIN_VERTICAL * 2 -
          enemyList.elements[j].position[1];
        console.log(
          `TOUCH: [${touches[i].event.pageX}, ${touches[i].event.pageY}]`
        );
        console.log(
          `ENEMY: [${enemyList.elements[j].position[0]}, ${enemyList.elements[j].position[1]}]`
        );
        console.log(`DELTA: [${deltaX}, ${deltaY}]`);
        if (Math.abs(deltaX) < 30 && Math.abs(deltaY) < 30) {
          enemyList.elements = enemyList.elements.filter(
            (enemy, index) => index != j
          );
          mrBubble.size -= Constants.MR_BUBBLE_SIZE_REDUCTION;
          console.log("GOT ENEMY\n");
          return;
        }
        console.log("\n");
      }
    }
  }
};

const checkIfBubbleHit = (enemyList, mrBubble, onHit) => {
  for (let i = 0; i < enemyList.elements.length; i++) {
    const deltaX = enemyList.elements[i].position[0] - mrBubble.position[0];
    const deltaY = enemyList.elements[i].position[1] - mrBubble.position[1];

    if (
      (Math.abs(deltaX) < mrBubble.size / 2 &&
        Math.abs(deltaY) < mrBubble.size / 2) ||
      mrBubble.size <= 0
    )
      onHit();
  }
};

export default function (entities, { touches, events, dispatch }) {
  const mrBubble = entities.mrBubble;
  const enemyList = entities.enemyList;
  const rpList = entities.rechargePackList;

  Math.random() > 0.99 ? generateRechargePack(rpList) : null;
  Math.random() > 0.95 ? generateEnemy(enemyList) : null;
  enemyList.moveCounter === 0
    ? moveEntities(enemyList, rpList)
    : enemyList.moveCounter--;
  deleteRunawayEnemies(enemyList);
  checkTouched(enemyList, touches, mrBubble, rpList);
  checkIfBubbleHit(enemyList, mrBubble, () => dispatch("gameOver"));

  return entities;
}
