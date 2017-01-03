'use strict';

module.exports = {

	bowlingGame: function () {

		//Private Fields

		var rolls = [];

		//Public Methods

		this.Roll = function (pins) {

			rolls.push(pins);
		};

		this.CalcScore = function () {

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

		function isStrike(firstInFrame) {

			return rolls[firstInFrame] === 10;
		}

		function isSpare(firstInFrame) {

			return rolls[firstInFrame] + rolls[firstInFrame + 1] === 10;
		}

		function getNextTwoBallsForStrike(firstInFrame) {

			return rolls[firstInFrame + 1] + rolls[firstInFrame + 2];
		}

		function getNextBallForSpare(firstInFrame) {

			return rolls[firstInFrame + 2];
		}

		function getTwoBallsInFrame(firstInFrame) {

			return rolls[firstInFrame] + rolls[firstInFrame + 1];
		}
	}
};
