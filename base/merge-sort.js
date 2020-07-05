const merge = (arr, lo, mid, hi) => {
  let sortedArr = [];

  let i = lo;
  let j = mid+1;
  let k  = 0;
  
  while (i <= mid && j <= hi) {
      if (arr[i] <= arr[j]) {
          sortedArr[k] = arr[i];
          i++;
          k++;
      } else {
          sortedArr[k] = arr[j];
          j++;
          k++;
      }
  }
  
  while (i <= mid) {
      sortedArr[k] = arr[i];
      k++;
      i++;
  }
  
  while (j <= hi) {
      sortedArr[k] = arr[j];
      k++;
      j++;
  }
  
  for (let i = lo; i <= hi; i++) {
      arr[i] = sortedArr[i - lo];
  }
  
}

const mergeSort = (arr, lo, hi) => {

  if (lo < hi) {
      let mid = Math.floor((hi + lo) / 2);
      mergeSort(arr, lo, mid);
      mergeSort(arr, mid+1, hi);
      merge(arr, lo, mid, hi);
  }
  return arr;
}


const arr = [24, 3, 4, 12, 89, 13, 8, 10, 21];