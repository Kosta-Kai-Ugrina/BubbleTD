const enemies = [];

const generateEnemy = () => {};

export default function (entities, { events, dispatch }) {
  const mrBubble = entities.mrBubble;
  const enemy = entities.enemy;

  enemy.nextMove--;
  if (Math.floor(Math.random() * 100) > 95) generateEnemy();
  if (enemy.nextMove === 0) {
    enemy.nextMove = enemy.updateFrequency;
    enemy.position[0] += enemy.xspeed;
    enemy.position[1] += enemy.yspeed;
  }
  return entities;
}
