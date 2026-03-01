# Computer Programming 2

## LESSON 02: DBMS and Applying OOP to Databases

------------------------------------------------------------------------

# I. What is a DBMS?

A Database Management System (DBMS) is software used to store, manage,
and retrieve structured data efficiently.

Examples: - MySQL - PostgreSQL - SQL Server - SQLite - Oracle

------------------------------------------------------------------------

# II. SQL Basics

SQL (Structured Query Language) is used to interact with relational
databases.

## SELECT

``` sql
SELECT * FROM students;
```

## INSERT

``` sql
INSERT INTO students (name, course)
VALUES ('John', 'BSIT');
```

## UPDATE

``` sql
UPDATE students
SET course = 'BSCS'
WHERE id = 1;
```

## DELETE

``` sql
DELETE FROM students WHERE id = 1;
```

------------------------------------------------------------------------

# III. Applying Inheritance to Database Design

## JavaScript OOP Example:

``` javascript
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class Admin extends User {
  deleteUser() {
    return "User deleted";
  }
}

class Student extends User {
  enroll() {
    return "Student enrolled";
  }
}
```

## Database Mapping

Table: users

| id \| name \| email \| role \|

The role column determines whether the user is an Admin or Student.

------------------------------------------------------------------------

# IV. Polymorphism in Database Services

``` javascript
class DatabaseService {
  save() {
    console.log("Saving data...");
  }
}

class MySQLService extends DatabaseService {
  save() {
    console.log("Saving to MySQL database");
  }
}

class SQLiteService extends DatabaseService {
  save() {
    console.log("Saving to SQLite database");
  }
}
```

------------------------------------------------------------------------

# V. Connecting JavaScript to SQLite (Node.js)

``` javascript
const Database = require('better-sqlite3');
const db = new Database('students.db');

db.prepare(`
  CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    course TEXT
  )
`).run();

db.prepare(`
  INSERT INTO students (name, course)
  VALUES (?, ?)
`).run("Maria", "BSCS");

const students = db.prepare("SELECT * FROM students").all();
console.log(students);
```

------------------------------------------------------------------------

# LESSON 02 SUMMARY

-   DBMS manages structured data.
-   SQL performs CRUD operations.
-   Inheritance can model database relationships.
-   Polymorphism abstracts database behavior.
-   JavaScript can connect to databases using Node.js.
