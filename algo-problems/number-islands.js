/**
 * @param {character[][]} grid
 * @return {number}
 
 
[["1","1","0","0","0"],
 ["1","1","0","0","0"],
 ["0","0","1","0","0"],
 ["0","0","0","1","1"]]
 */

function numIslands (map) {
  if (map.length === 0) {return 0}
  let count = 0;
  const visited = {};
  
  const outerLen = map.length;
  const innerLen = map[0].length;
  
  for (let i = 0; i < outerLen; i++) {
  	for (let j = 0; j < innerLen; j++) {
      let cur = map[i][j];
      let curKey = i + ' ' + j;

      if (cur === '1') {
    	  if(!visited[curKey]) {
			console.log(curKey)
            recurse(map, visited, i, j, outerLen, innerLen);
            count++;
        }
      }
    }
  }

  return count;
} 

function recurse (map, visited, i, j, outerLen, innerLen) {
  let key = i + ' ' + j;
	// base case
  if (j < 0 || j >= innerLen || i < 0 || i >= outerLen) {
  	return;
  } else if (map[i][j] === '0') {
  	return;
  } else if (visited[key]) {
  	return;
  }
  // recursive case
  visited[key] = true;
  
  let left = j - 1;
  let right = j + 1;
  let above = i - 1;
  let below = i + 1;
  
  recurse(map, visited, i, left, outerLen, innerLen);
  recurse(map, visited, i, right, outerLen, innerLen);
  recurse(map, visited, above, j, outerLen, innerLen);
  recurse(map, visited, below, j, outerLen, innerLen);
  
}