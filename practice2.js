const student2 = {
  name: "Karina",
  roll: "34",
  subjects: ["Bangla", "English", "Math", "Physics", "Biology", "Chemistry"],
  address: {
    house: "696/1",
    Road: "12/B",
    area: "Kochukhet",
  },
  semester: function (time) {
    return this.name + " is the student of " + time + " Batch";
  },
  isRegistered: function (reg) {
    return `${this.name}'s roll number is ${this.roll} and her registration number is ${reg}`;
  },
  output: function (mark) {
    return `Name: ${this.name}, Subject: ${this.subjects[1]} has got ${mark}% marks in the exam`;
  },
};

const output = student2.output(98);
console.log(output);
