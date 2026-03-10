class Person{
constructor(name){
this.name = name;
}

display(){
return this.name;
}
}

class Student extends Person{
constructor(name,course,year){
super(name);
this.course = course;
this.year = year;
}

display(){
return this.name + " - " + this.course + " - " + this.year;
}
}

async function addRecord(){

let name = document.getElementById("name").value;
let course = document.getElementById("course").value;
let year = document.getElementById("year").value;

let student = new Student(name,course,year);

await fetch("/add",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(student)
});

alert("Record Added");

showRecords();
}

async function showRecords(){

let res = await fetch("/records");
let data = await res.json();

let html = "";

data.forEach(r=>{
html += "<tr>";
html += "<td>"+r.name+"</td>";
html += "<td>"+r.course+"</td>";
html += "<td>"+r.year+"</td>";
html += "<td><button onclick='deleteRecord("+r.id+")'>Delete</button></td>";
html += "</tr>";
});

document.getElementById("tableBody").innerHTML = html;
}

async function deleteRecord(id){

await fetch("/delete/"+id,{method:"DELETE"});

showRecords();
}