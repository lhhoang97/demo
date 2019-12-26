class ktHam {
  checkNull(n) {
    return n === "";
  }
  checkOut(m) {
    for (let i = 0; i < m.length; i++) {
      for (let j = i + 1; j < m.length; j++) {
        if (m[i] === m[j]) {
        }
      }
    }
  }

  checkSdt(num) {
    if (num[0] === "0" && num.length == 10) {
      return true;
    } else {
      return false;
    }
  }

  xoa(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          delete arr[j];
        }
      }
    }
    return arr;
  }

  checkNumber(number) {
    if (typeof number === "number") {
      return true;
    } else {
      return false;
    }
  }
  timUoc(a, b) {}
  checkNumber1(abc) {
    let ab = 0;
    for (let i = 0; i < abc.length; i++) {
      ab = ab + 1;
      return ab;
    }
    abc(1234);
  }

  Dem(dem) {
    for (let i = 0; i < dem.length; i++) {
      for (let j = i + 1; j < dem.length; j++) {
        if (dem[i] < dem[j]) {
          return dem.length - dem.split(" ").length - 1;
        }
      }
    }
  }
}
// var person = new ktHam();
// console.log(person.checkNull(""));

// var person = new ktHam();
// console.log(person.checkOut("abcabcdkakd"));
// var person2 = new ktHam();
// console.log(person2.checkSdt("0982138242"));
// var person = new ktHam();
// console.log(person.xoa([1, 2, 2, 3, 3, 3, 4, 5, 5]));
// var person = new ktHam();
// console.log(person.checkNumber(""));
// // var person5 = new ktHam();
// // console.log(person5.checkNumber1());
var person6 = new ktHam();
console.log(person6.Dem("le huy hoang"));

class student {
  constructor(name, age, sdt) {
    this.name = name;
    this.age = age;
    this.sdt = sdt;
  }
  checkNullName(name) {
    if (name === "") {
      return false;
    } else {
      return true;
    }
  }
}
var person = new student("", 22, "098234568");
person.checkNullName();
console.log(person);
