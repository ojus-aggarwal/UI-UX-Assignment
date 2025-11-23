let student = {
  name: "Ojus",
  age: 20,
  grades: "A"
};

student.class = "12th Grade";
student.grades = "A+";
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}
