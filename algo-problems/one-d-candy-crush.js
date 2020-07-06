/* 
LC: 1209. Remove All Adjacent Duplicates in String II

Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing 
the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made.

It is guaranteed that the answer is unique.

Example:

Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation: 
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"
*/


const removeDuplicates = function(s, k) {
  let stack = [];
  let res = "";
  
  for (let index = 0; index < s.length; index++) {
      stack.push([s[index], 1]);
      let prevInStack = stack[stack.length - 2] ? stack[stack.length - 2] : null;      
      let curInStack = stack[stack.length - 1]
      if (prevInStack && curInStack[0] === prevInStack[0]) {
          curInStack[1] += prevInStack[1];
          if (curInStack[1] === k) {
              stack = stack.slice(0, stack.length - k);
          }
      }
  }
  
  for (let i = 0; i < stack.length; i++) {
      res += stack[i][0];
  }
  
  return res;
};