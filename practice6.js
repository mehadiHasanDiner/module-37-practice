const person = {
  name: "John",
  gender: "Male",
  age: 34,
  address: { house: 23, road: 12, area: "mirpur", city: "Dahak" },
  friends: ["somed", "jomed", "kumed"],
};

person.friends[1] = "sheshmed";

console.log(person);
