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

function addStudent(name, course, type, company) {
    db.prepare(`
        INSERT INTO students (name, course, type, company)
        VALUES (?, ?, ?, ?)
    `).run(name, course, type, company);
}

db.prepare('DELETE FROM students').run();

addStudent("Mark Angelo", "BSIS", "Regular", null);
addStudent("Antoniño", "BSIT", "Working", "Samsung tech");
addStudent("Joshua", "BSCS", "Regular", null);
addStudent("Eldrex", "BSIT", "Working", "LanDecs");

const students = db.prepare("SELECT * FROM students").all();
console.log(students);