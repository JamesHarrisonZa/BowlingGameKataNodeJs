'use strict';

const bowlingGame = require('../src/bowlingGame');

function rollMany(game, rolls, pins) {

	for (var i = 0; i < rolls; i++) {
		game.roll(pins);
	}
}

describe('BowlingGame', () => {

	describe('Given GutterGame', () => {

		it('Should have Score 0', () => {

			const sut = new bowlingGame();
			rollMany(sut, 20, 0);

			const actual = sut.calcScore();
			const expected = 0;
			expect(actual).toBe(expected);
		});
	});

	describe('Given all 1s', () => {

		it('Should have Score 20', () => {

			const sut = new bowlingGame();
			rollMany(sut, 20, 1);

			const actual = sut.calcScore();
			const expected = 20;
			expect(actual).toBe(expected);
		});
	});

	describe('Given Spare and 1', () => {

		it('Should have Score 12', () => {

			const sut = new bowlingGame();
			sut.roll(5).roll(5).roll(1);
			rollMany(sut, 17, 0);

			const actual = sut.calcScore();
			const expected = 12;
			expect(actual).toBe(expected);
		});
	});

	describe('Given Strike and 1 and 1', () => {

		it('Should have Score 14', () => {

			const sut = new bowlingGame();
			sut.roll(10).roll(1).roll(1);
			rollMany(sut, 16, 0);

			const actual = sut.calcScore();
			const expected = 14;
			expect(actual).toBe(expected);
		});
	});

	describe('Given Perfect Game', () => {

		it('Should have Score 300', () => {
			
			const sut = new bowlingGame();
			rollMany(sut, 12, 10);

			const actual = sut.calcScore();
			const expected = 300;
			expect(actual).toBe(expected);
		});
	});
});
