function forLoop(arr) {
  for(let r=0; r<25; r++) {
    if(r===1) {
      arr[r] = "I am 1 strange loop."
    } else {
      arr[r] = `I am ${r} strange loops.`;
    }
  }
}
