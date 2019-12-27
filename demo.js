class ktHam {
  constructor(name, sdt) {
    this.name = name;
    this.sdt = sdt;
  }
  checkNull(name) {
    return name === "";
  }

  checkAbc() {}

  checkSdt(sdt) {
    if (sdt[0] === "0" && sdt.length == 10) {
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
// console.log(person.checkNull(""));

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

// class student {
//   constructor(name, age, sdt) {
//     this.name = name;
//     this.age = age;
//     this.sdt = sdt;
//   }
//   // checkNameNull = () => {
//   //   this.name = name;
//   //   if (checkNameNull(name)) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   // };
//   checkName() {
//     if (this.name === "" && this.name.length == 20) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   checkSodt() {
//     if (this.sdt[0] === "0" && this.sdt.length == 10) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// // var person = new student("asasa", 22, "0982534568");
// // person.checkNullName();
// // console.log(person);
// var ten = new student("aksjaksjaksaks", 22, "029210931");

// console.log(ten.checkName());
// var sdt1 = new student("", 22, "1982345658");
// console.log(sdt1.checkSodt());

class student extends ktHam {
  constructor(name, age, sdt) {
    super(name, sdt);
    this.age = age;
  }
  checkNull() {
    return this.name;
  }
}
var per = new student("kakaka", 22, "0981345678");
console.log(per.checkNull());
