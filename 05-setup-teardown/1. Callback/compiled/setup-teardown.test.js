describe('Setup and teardown:', function () {
  let game;

  beforeEach(function () {
    game = {
      score: 0,
      add(value) {
        this.score += value;
      },
      subtract: function (value) {
        this.score -= value;
      }
    };
  });

  afterEach(function () {
    // Can add teardown code here, if needed.
  });

  it('game have score 0 initially', function () {
    expect(game.score).toBe(0);
  });

  it('add increases score', function () {
    game.add(10);
    expect(game.score).toBe(10);
  });

  it('subtract decreases score', function () {
    game.subtract(5);
    expect(game.score).toBe(-5);
  });
});
