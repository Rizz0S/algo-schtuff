/*Design a Leaderboard class, which has 3 functions:

addScore(playerId, score): Update the leaderboard by adding score to the given player's score. If there is no player with such id in the leaderboard, add him or HER to the leaderboard with the given score.
top(K): Return the score sum of the top K players.
reset(playerId): Reset the score of the player with the given id to 0 (in other words erase it from the leaderboard). It is guaranteed that the player was added to the leaderboard before calling this function.
Initially, the leaderboard is empty.

 

Example 1:*/

Input: 
["Leaderboard","addScore","addScore","addScore","addScore","addScore","top","reset","reset","addScore","top"]
[[],[1,73],[2,56],[3,39],[4,51],[5,4],[1],[1],[2],[2,51],[3]]
Output: 
[null,null,null,null,null,null,73,null,null,null,141]

Explanation: 
Leaderboard leaderboard = new Leaderboard ();
leaderboard.addScore(1,73);   // leaderboard = [[1,73]];
leaderboard.addScore(2,56);   // leaderboard = [[1,73],[2,56]];
leaderboard.addScore(3,39);   // leaderboard = [[1,73],[2,56],[3,39]];
leaderboard.addScore(4,51);   // leaderboard = [[1,73],[2,56],[3,39],[4,51]];
leaderboard.addScore(5,4);    // leaderboard = [[1,73],[2,56],[3,39],[4,51],[5,4]];
leaderboard.top(1);           // returns 73;
leaderboard.reset(1);         // leaderboard = [[2,56],[3,39],[4,51],[5,4]];
leaderboard.reset(2);         // leaderboard = [[3,39],[4,51],[5,4]];
leaderboard.addScore(2,51);   // leaderboard = [[2,51],[3,39],[4,51],[5,4]];
leaderboard.top(3);           // returns 141 = 51 + 51 + 39;


var Leaderboard = function() {
    constructor () {
    	this.map = new Map ();
    	this.sortedScores = [];
    }
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
	if (this.map.has(playerId)) {
		this.map.get(playerId).score += score;
	} else {
    	this.map.set(playerId, {score: score});
		this.sortedScores.push(this.map.get(playerId));
	}
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    let scores = Array.from(this.map.values());
    let sortedByScore = scores.sort((a, b) => b - a);
    let scoreSum = 0;

    for (let i = 0; i < K; i++) {
    	scoreSum += sortedByScore[i];
    }

    return scoreSum;
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    this.map.set(playerId, 0);
};

/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */