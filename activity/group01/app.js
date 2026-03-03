const Database = require('better-sqlite3');
const db = new Database('college.db');

db.prepare(`
    CREATE TABLE IF NOT EXISTS students (
        name TEXT,
        course TEXT,
        type TEXT,
        company TEXT
    )
`).run();

db.prepare('DELETE FROM students').run();

class Student {
    constructor(name, course) {
        this.name = name;
        this.course = course;
        this.type = "Regular";
        this.company = null;
    }

    getInfo() {
        return "Name: " + this.name +
               " Course: " + this.course +
               " Type: " + this.type;
    }
}

class WorkingStudent extends Student {
    constructor(name, course, company) {
        super(name, course);
        this.type = "Working";
        this.company = company;
    }

    getInfo() {
        return "Name: " + this.name +
               " Course: " + this.course +
               " Type: " + this.type +
               " Company: " + this.company;
    }
}


function addStudent(student) {
    db.prepare(`
        INSERT INTO students (name, course, type, company)
        VALUES (?, ?, ?, ?)
    `).run(
        student.name,
        student.course,
        student.type,
        student.company
    );
}

const s1 = new Student("Mark Angelo", "BSIS");
const s2 = new WorkingStudent("Antoniño", "BSIT", "Samsung Tech");
const s3 = new Student("Joshua", "BSCS");
const s4 = new WorkingStudent("Eldrex", "BSIT", "LanDecs");

addStudent(s1);
addStudent(s2);
addStudent(s3);
addStudent(s4);


const studentList = [s1, s2, s3, s4];

studentList.forEach(student => {
    console.log(student.getInfo());
});


const students = db.prepare("SELECT * FROM students").all();
console.log(students);