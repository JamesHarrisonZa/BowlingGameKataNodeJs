'use strict';

const imports = require('../src/bowlingGame');

function rollMany(game, rolls, pins) {

	for (var i = 0; i < rolls; i++) {
		game.roll(pins);
	}
}

describe('BowlingGame', () => {

	describe('Given GutterGame', () => {

		var game = new imports.BowlingGame();
		rollMany(game, 20, 0);

		it('Should have Score 0', () => {

			expect(game.calcScore()).toBe(0);
		});
	});

	describe('Given all 1s', () => {

		var game = new imports.BowlingGame();
		rollMany(game, 20, 1);

		it('Should have Score 20', () => {

			expect(game.calcScore()).toBe(20);
		});
	});

	describe('Given Spare and 1', () => {

		var game = new imports.BowlingGame();
		game.roll(5);
		game.roll(5);
		game.roll(1);
		rollMany(game, 17, 0);

		it('Should have Score 12', () => {

			expect(game.calcScore()).toBe(12);
		});
	});

	describe('Given Strike and 1 and 1', () => {

		var game = new imports.BowlingGame();
		game.roll(10);
		game.roll(1);
		game.roll(1);
		rollMany(game, 16, 0);

		it('Should have Score 14', () => {

			expect(game.calcScore()).toBe(14);
		});
	});

	describe('Given Perfect Game', () => {

		var game = new imports.BowlingGame();
		rollMany(game, 12, 10);

		it('Should have Score 300', () => {

			expect(game.calcScore()).toBe(300);
		});
	});
});
