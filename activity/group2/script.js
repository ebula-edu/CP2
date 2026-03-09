async function loadStudents(){
    const res = await fetch("/students");
    const data = await res.json();
    let html = "";
    data.forEach(s=>{
        html += "<p>" + s.name + " | " + s.course + " | " + s.type + (s.company ? " | " + s.company : "") + 
                " <button onclick='deleteStudent(" + s.id + ")'>Delete</button></p>";
    });
    document.getElementById("students").innerHTML = html;
}

async function addStudent(){
    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;
    const company = document.getElementById("company").value;

    await fetch("/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({name, course, company})
    });

    document.getElementById("name").value = "";
    document.getElementById("course").value = "";
    document.getElementById("company").value = "";

    loadStudents();
}

async function deleteStudent(id){
    await fetch("/delete/" + id, {method:"DELETE"});
    loadStudents();
}

loadStudents();
