const test = require('tape');
const replayLog = require('../../src/replay');

class mockP5 {
  constructor() {
    this.allSprites = [];
  }

  createSprite() {
    this.allSprites.push({
      getAnimationLabel: () => {},
      mirrorX: () => {},
    });
  };
}

test('replay', t => {
  const p5Inst = new mockP5();

  replayLog.logSprites(p5Inst);
  t.equal(replayLog.getLog().length, 1);
  t.equal(replayLog.getLog()[0].length, 0);

  p5Inst.createSprite();
  replayLog.logSprites(p5Inst);
  t.equal(replayLog.getLog().length, 2);
  t.equal(replayLog.getLog()[1].length, 1);

  t.end();
});
