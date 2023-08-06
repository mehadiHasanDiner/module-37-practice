const behushAli = {
  name: "Behush Ali",
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

// const result = behushAli.exam();
// console.log(result);

const hushAli = {
  name: "Hush Ali",
  money: 6000,
};

// -------- Call Function ---------- call, parameter গুলোকে comma, comma হিসেবে নেয়
const result2 = behushAli.exam.call(hushAli);
// console.log(result2);
const hushMoney = behushAli.treatDey.call(hushAli, 600, 40);
// console.log(hushAli);

// -------- Apply Function ----------- Apply, parameter গুলোকে Array হিসেবে নেয়
const hushMoney2 = behushAli.treatDey.apply(hushAli, [1000, 100]);
// console.log(hushMoney2);

// -------- Bind Function ----------- bind নতুন একটা ফাংশন তৈরি করে যেটাকে পুনরায় কল করা যায়

const hushAliTreat = behushAli.treatDey.bind(hushAli);
const remaining = hushAliTreat(1000, 100);
console.log(remaining);
