const express = require("express");
const Database = require("better-sqlite3");

const app = express();
const db = new Database("college.db");

app.use(express.json());
app.use(express.static("."));

db.prepare("CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, course TEXT, type TEXT, company TEXT)").run();

class Student{
    constructor(name, course){
        this.name = name;
        this.course = course;
        this.type = "Regular";
        this.company = null;
    }
    getInfo(){
        return this.name + " - " + this.course + " (" + this.type + ")";
    }
}

class WorkingStudent extends Student{
    constructor(name, course, company){
        super(name, course);
        this.type = "Working";
        this.company = company;
    }
    getInfo(){
        return this.name + " - " + this.course + " (" + this.type + ") Company: " + this.company;
    }
}

app.post("/add", (req,res)=>{
    const {name, course, company} = req.body;
    let student = company ? new WorkingStudent(name, course, company) : new Student(name, course);
    db.prepare("INSERT INTO students (name, course, type, company) VALUES (?,?,?,?)").run(student.name, student.course, student.type, student.company);
    res.json({message:"Added"});
});

app.get("/students",(req,res)=>{
    res.json(db.prepare("SELECT * FROM students").all());
});

app.delete("/delete/:id",(req,res)=>{
    db.prepare("DELETE FROM students WHERE id=?").run(req.params.id);
    res.json({message:"Deleted"});
});

app.listen(3000,()=>console.log("Server running on http://localhost:3000"));