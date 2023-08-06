const mofizAli = {
  name: "Mofiz Ali",
  money: 5000,
  study: "Math",
  subject: ["Calculus", "Algebra", "Physics", "Geometry"],
  exam: function () {
    return this.name + " is participating in the exam";
  },
  improveExam: function (subject) {
    this.exam();
    return `${this.name} is taking improvement exam on ${subject}`;
  },
  treatDey: function (amount, tips) {
    this.money = this.money - amount - tips; //money amount ke set kora hosse
    return this.money;
  },
};

// console.log(output);
const reExam = mofizAli.improveExam("Physics");
// console.log(reExam);

const remaining = mofizAli.treatDey(900, 50);
console.log(remaining);

const dolaRemaining = mofizAli.treatDey(600, 20);
console.log(dolaRemaining);
