const student = {
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
};

const output = student.semester("6th");
// console.log(output);
const output2 = student.isRegistered(6960025);
console.log(output2);
