class Number {
  tinhgiaithua(arr) {
    let result = 1;
    for (let i = 1; i <= arr; i++) {
      result = result * i;
    }
    console.log(result);
  }
}

module.exports = Number;
