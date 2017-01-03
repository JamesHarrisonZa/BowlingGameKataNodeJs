'use strict';

var bowlingGame = require('./bowlingGame');

//This isnt used for much, the main purpose is the test suite.

var game = new bowlingGame.bowlingGame();

for (var i = 0; i < 12; i++) {
	game.Roll(10);
}

console.log(game.CalcScore());
