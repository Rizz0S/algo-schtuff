const killProcess = (pid = [], ppid = [], kill) => {
  const killArr = [];
  rec(kill, killArr, pid, ppid);
  return killArr;
}
const rec = (current, killArr, pid, ppid) => {
  killArr.push(current);
  // base case
  if (!ppid.include(current)) {
    return;
  } 
  // recursive case
  else {
      let childIdxArr = [];
      ppid.forEach((ppid, i) => {
      	if (ppid === current) {
          childIdxArr.push(i);
        }
      })
      for (let i = 0; i < parentIdxArr; i++) {
      	rec(pid[childIdxArr[i]], killArr, pid, ppid);
      }
  }
}