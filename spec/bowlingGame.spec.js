'use strict';

const bowlingGame = require('../src/bowlingGame');

function rollMany(game, rolls, pins) {

	for (var i = 0; i < rolls; i++) {
		game.Roll(pins);
	}
}

describe('BowlingGame', () => {

	describe('Given GutterGame', () => {

		var game = new bowlingGame.bowlingGame();
		rollMany(game, 20, 0);

		it('Should have Score 0', () => {

			expect(game.CalcScore()).toBe(0);
		});
	});

	describe('Given all 1s', () => {

		var game = new bowlingGame.bowlingGame();
		rollMany(game, 20, 1);

		it('Should have Score 20', () => {

			expect(game.CalcScore()).toBe(20);
		});
	});

	describe('Given Spare and 1', () => {

		var game = new bowlingGame.bowlingGame();
		game.Roll(5);
		game.Roll(5);
		game.Roll(1);
		rollMany(game, 17, 0);

		it('Should have Score 12', () => {

			expect(game.CalcScore()).toBe(12);
		});
	});

	describe('Given Strike and 1 and 1', () => {

		var game = new bowlingGame.bowlingGame();
		game.Roll(10);
		game.Roll(1);
		game.Roll(1);
		rollMany(game, 16, 0);

		it('Should have Score 14', () => {

			expect(game.CalcScore()).toBe(14);
		});
	});

	describe('Given Perfect Game', () => {

		var game = new bowlingGame.bowlingGame();
		rollMany(game, 12, 10);

		it('Should have Score 300', () => {

			expect(game.CalcScore()).toBe(300);
		});
	});
});
