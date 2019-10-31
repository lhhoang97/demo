class Number {
  tinhgiaithua(arr) {
    let result = 1;
    for (let i = 1; i <= arr; i++) {
      result = result * i;
    }
    console.log(result);
  }
  timsole(n) {
    for (let i = 0; i < n; i++) {
      if (n[i] % 2 == 0) {
        console.log();
      }
    }
  }




}

module.exports = Number;
