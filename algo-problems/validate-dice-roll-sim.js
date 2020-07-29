// Given a dice rolling function that takes in the number of sides and returns the result of a single dice roll, 
// validate the dice roll simulation with n number of rolls within  k range.



/**
 * function validateDiceRoll(numSides, n, k)
 *
 * @param {int} numSides  The number of sides in the dice
 * @param {int} n         The number of dice rolls to be simulated
 * @param {float} k       Within what range the dice rolls need to be in (0.1 would be within 10%)
 *
 * @return {bool}         Returns true or false if dice roll is valid.
 */

let numSides = 6
let n = 60
let k = 0.01