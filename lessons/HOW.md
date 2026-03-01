# HOW TO APPLY LESSON 1 TO LESSON 2

## 1. Inheritance in Database Users

From **Lesson 1**, we know inheritance allows a child class to reuse properties and methods from a parent class.

In **Lesson 2**, we can map this to a database table (`users`) and create specialized roles (`Admin` and `Student`).

### Example:

```javascript
// Parent class: User
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  info() {
    return `User: ${this.name}, Email: ${this.email}`;
  }
}

// Child class: Admin
class Admin extends User {
  deleteUser(userName) {
    return `Admin ${this.name} deleted user ${userName}`;
  }
}

// Child class: Student
class Student extends User {
  enroll(course) {
    return `Student ${this.name} enrolled in ${course}`;
  }
}

// Test
const admin1 = new Admin("Alice", "alice@email.com");
const student1 = new Student("Bob", "bob@email.com");

console.log(admin1.info());       // inherited method
console.log(admin1.deleteUser("Bob"));  
console.log(student1.enroll("BSIT"));
```

✅ Notice how `Admin` and `Student` **inherit `info()`** from `User`.

---

## 2. Polymorphism with Database Services

Polymorphism lets us **use the same method name** but **different implementations** depending on the class.

### Example: Saving data in different databases

```javascript
class DatabaseService {
  save(data) {
    console.log("Saving data...");
  }
}

class MySQLService extends DatabaseService {
  save(data) {
    console.log(`Saving "${data}" to MySQL database`);
  }
}

class SQLiteService extends DatabaseService {
  save(data) {
    console.log(`Saving "${data}" to SQLite database`);
  }
}

// Test
const services = [new MySQLService(), new SQLiteService()];
services.forEach(service => service.save("Student Record"));
```

✅ Same `save()` method, different outputs — that’s polymorphism in action.

---

## 3. Overriding Methods for Custom Behavior

Method overriding happens when a **child class changes the behavior** of a method inherited from the parent class.

```javascript
class User {
  greet() {
    return "Hello, User!";
  }
}

class Student extends User {
  greet() {
    return "Hello, Student! Welcome to your course.";
  }
}

const user = new User();
const student = new Student();

console.log(user.greet());     // Hello, User!
console.log(student.greet());  // Hello, Student! Welcome to your course.
```

✅ This can be applied when showing **different messages or actions** for Admins and Students in a system.

---

## 4. Simple Database Interaction Example

Combining **inheritance, polymorphism, and DB**:

```javascript
const Database = require('better-sqlite3');
const db = new Database('school.db');

// Create table
db.prepare(`CREATE TABLE IF NOT EXISTS students (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  course TEXT
)`).run();

// Base class
class User {
  constructor(name) {
    this.name = name;
  }
}

// Student inherits User
class Student extends User {
  enroll(course) {
    db.prepare(`INSERT INTO students (name, course) VALUES (?, ?)`).run(this.name, course);
    return `${this.name} enrolled in ${course}`;
  }
}

// Admin inherits User
class Admin extends User {
  deleteStudent(studentName) {
    db.prepare(`DELETE FROM students WHERE name = ?`).run(studentName);
    return `Admin ${this.name} deleted ${studentName} from database`;
  }
}

// Test
const student = new Student("Maria");
console.log(student.enroll("BSCS"));

const admin = new Admin("Alice");
console.log(admin.deleteStudent("Maria"));
```

✅ This shows how **OOP concepts from Lesson 1** are applied directly in database operations from Lesson 2.

---

### Key Takeaways:

1. **Inheritance** → Reuse common methods (like `info()`) in all users.
2. **Polymorphism** → Use same method (`save`) in different database services.
3. **Method Overriding** → Customize behavior for Admin vs Student.
4. **DOM / Error Handling** → Can also apply when building web frontends or validating database operations.

---

