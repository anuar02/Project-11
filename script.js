"use strict";

document.querySelector(".fa-refresh").addEventListener("click", function () {
  location.reload();
  return false;
});

let Calculate = () => {
  let name = document.getElementById("name").value;
  let price = Number(document.getElementById("bid").value);
  if (name == null && price == null) {
    alert("Please enter the name or/and starting bid");
    return;
  }
  let lover_letter = document.getElementById("text").value;
  let edu = Number(document.querySelector("#edu").value);
  let fnw = Number(document.querySelector("#fnw").value);
  let caste = Number(document.querySelector("#caste").value);
  var skilll = [];
  var rep = [];
  var ele = document.getElementsByTagName("input");
  let j = 0;
  let age = [];
  console.log(ele);

  for (let i = 0; i < ele.length; i++) {
    if (ele[i].type == "checkbox" && ele[i].name == "skill") {
      if (ele[i].checked) {
        skilll[j] = Number(ele[i].value);
        j++;
      }
    }
    if (ele[i].type == "checkbox" && ele[i].name == "rep") {
      if (ele[i].checked) {
        rep[j] = ele[i].value;
        j++;
      }
    }

    if (ele[i].type == "radio") {
      if (ele[i].checked) {
        age[0] = Number(ele[i].value);
      }
    }
  }

  let result;
  result = price * edu;

  let compose = (f, g) => (a) => f(g(a));
  let multiply1 = (num) => num * fnw;
  let add = (num) => num + caste;
  result = compose(add, multiply1)(result);

  // Reduce method
  result = skilll.reduce(function (acc, elem) {
    return acc + elem;
  }, result);
  // forEach method
  age.forEach(function AgeFun(item) {
    result *= item;
  });

  for (let i = 0; i < rep.length; i++) {
    if (Number(rep[i]) < 0) {
      result = result + Number(rep[i]);
    } else {
      result = result * Number(rep[i]);
    }
  }

  let person = {
    Name: name,
    Price: result,
    letter: lover_letter,
  };
  console.log(person);

  compose = (f1, f2, f3) => (value) => f2(f1(f3(value)));
  const add1 = (n) => "Your price for " + n;
  const add2 = (n) => n + " is " + n;
  const add3 = (n) => ", Your message is - " + n;

  if (Number.isNaN(result)) {
    alert("Please choose the age range!");
  } else {
    document.getElementById(
      "res1"
    ).innerHTML = `Your price for ${person.Name} is ${person.Price}, Your message is - "${person.letter}" `;
    document.querySelector("body").style.backgroundColor = "rgb(4, 185, 85)";
    setTimeout(function () {
      alert(`Congrats the price is ${person.Price}`);
    }, 10);
  }
};

document.querySelector(".calc").addEventListener("click", function () {
  Calculate();
});
