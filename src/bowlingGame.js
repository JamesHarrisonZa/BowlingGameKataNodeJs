'use strict';

module.exports = {

	BowlingGame: function () {

		//Private Fields

		var _rolls = [];

		//Public Methods

		const roll = (pins) => {

			_rolls.push(pins);
		};

		const calcScore = () => {

			var score = 0;
			var firstInFrame = 0;

			for (var frame = 0; frame < 10; frame++) {

				if (isStrike(firstInFrame)) {
					score += 10 + getNextTwoBallsForStrike(firstInFrame);
					firstInFrame++;
				} else if (isSpare(firstInFrame)) {
					score += 10 + getNextBallForSpare(firstInFrame);
					firstInFrame += 2;
				} else {
					score += getTwoBallsInFrame(firstInFrame);
					firstInFrame += 2;
				}
			}
			return score;
		};

		//Private Methods

		const isStrike = (firstInFrame) => _rolls[firstInFrame] === 10;

		const isSpare = (firstInFrame) => _rolls[firstInFrame] + _rolls[firstInFrame + 1] === 10;

		const getNextTwoBallsForStrike = (firstInFrame) => _rolls[firstInFrame + 1] + _rolls[firstInFrame + 2];

		const getNextBallForSpare = (firstInFrame) => _rolls[firstInFrame + 2];

		const getTwoBallsInFrame = (firstInFrame) => _rolls[firstInFrame] + _rolls[firstInFrame + 1];

		return {
			roll: roll,
			calcScore: calcScore
		};
	}
};
