const express = require("express");
const Database = require("better-sqlite3");

const app = express();
const db = new Database("school.db");

app.use(express.json());
app.use(express.static("."));

db.prepare("CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,course TEXT,year TEXT)").run();

app.post("/add",(req,res)=>{

let s=req.body;

db.prepare("INSERT INTO students(name,course,year) VALUES(?,?,?)")
.run(s.name,s.course,s.year);

res.json({msg:"added"});

});

app.get("/records",(req,res)=>{

let data=db.prepare("SELECT * FROM students").all();
res.json(data);

});

app.delete("/delete/:id",(req,res)=>{

db.prepare("DELETE FROM students WHERE id=?").run(req.params.id);
res.json({msg:"deleted"});

});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});