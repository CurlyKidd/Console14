var Student = {
  name : "Ava",
  grade: 8,
  roll_no: 1,
  favorite_subject: "coding",
  marks:[80,50,90,95]
}


function setup() {
  createCanvas(400, 400);

  console.log(Student.marks);
}


function draw() {
  background(220);
}