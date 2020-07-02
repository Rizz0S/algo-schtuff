var numDecodings = function(S) {
  // We will use dynamic program to keep track of all of the ways the input string can be decoded.
  let dp = new Array(S.length + 1).fill(0);

  console.log(dp)
  // Initialize values
  dp[0] = 1;
  dp[1] = S[0] === '0' ? 0 : 1;

  let digitOne;
  let digitBoth;

  // Iterate through the string and evaluate the previous two digits (first the previous single, then previous two at once)
  for (let i = 2; i <= S.length; i++) {
      digitOne = parseInt(S.substring(i - 1, i));
      digitBoth = parseInt(S.substring(i - 2, i));

      // if single digit is greater than one, it can be decoded
      if (digitOne >= 1) {
          dp[i] += dp[i - 1]; // remember, we are constantly keeping track - so # of ways gets compounded
      }
      // if two digits are greater than 10 and less than 27, they can be decoded
      if (digitBoth >= 10 && digitBoth <= 26) {
          dp[i] += dp[i - 2];
      }
  }

  // after iterating through the array, our work is done. the last element will have the total! yay!
  return dp[S.length];
};