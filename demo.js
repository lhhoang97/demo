class ktHam {
  constructor(name, sdt, number) {
    this.name = name;
    this.sdt = sdt;
    this.number = number;
  }
  checkNull() {
    if (this.name === "" || this.name.length > 20) {
      return false;
    }
    return true;
  }

  checkSdt() {
    for (let i = 0; i < this.sdt.length; i++) {
      if (
        this.sdt[0] === "0" &&
        this.sdt.length == 10 &&
        this.sdt[1 - 9] === /[0 - 9]/
      ) {
        return true;
      } else {
        return false;
      }
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

  checkNumber() {
    if (typeof this.number === "number") {
      return true;
    } else {
      return false;
    }
  }
  timUoc(a, b) {
    if (a != b) {
      if (a > b) {
        return (a = a - b);
      } else {
        return (b = b - a);
      }
    }
  }
  // checkNumber1(numb) {
  //   let result = 0;
  //   for (let i = 0; i < numb.length; i++) {
  //     for (let j = i + 1; j < numb.length; j++) {
  //       if (numb[i] === numb[j]) {
  //         result += 1;
  //       }
  //     }
  //   }
  //   return result;
  // }

  Dem(dem) {
    for (let i = 0; i < dem.length; i++) {
      for (let j = i + 1; j < dem.length; j++) {
        if (dem[i] == dem[j]) {
          return dem.length - (dem.split(" ").length - 1);
        }
      }
    }
  }
}
// var person = new ktHam();
// console.log(person.checkNull("aa"));

// var person = new ktHam();
// console.log(person.checkOut("b"));
// var person2 = new ktHam();
// console.log(person2.checkSdt("0982138242"));
// var person = new ktHam();
// console.log(person.xoa([1, 2, 2, 3, 3, 3, 4, 5, 5]));
// var person = new ktHam();
// console.log(person.checkNumber(1234));
// var uoc = new ktHam();
// console.log(uoc.timUoc(40, 60));
// // var person5 = new ktHam();
// // console.log(person5.checkNumber1());
// var person6 = new ktHam();
// console.log(person6.Dem("dao van cuong"));

class student extends ktHam {
  constructor(name, age, sdt, number) {
    super(name, sdt, number);
    this.age = age;
  }
  checkName() {
    return this.checkNull();
  }
  checkSdt1() {
    return this.checkSdt();
  }
  checkNumber1() {
    return this.checkNumber();
  }
  checkAge() {
    if (typeof this.age === "number") {
      return true;
    } else {
      return false;
    }
  }
}
var hoang = new student("hoang", 22, "0982348468");
console.log(hoang.checkName());
console.log(hoang.checkSdt1());
console.log(hoang.checkNumber1());
console.log(hoang.checkAge());
