DROP TABLE IF EXISTS addresses;
CREATE TABLE addresses (
    id serial PRIMARY KEY,
    line_1 VARCHAR(50) NOT NULL,
    city VARCHAR(25) NOT NULL,
    state VARCHAR(25) NOT NULL,
    zipcode VARCHAR(5)
);

DROP TABLE IF EXISTS students;
CREATE TABLE students(
    id serial PRIMARY KEY,
    first_name VARCHAR (20),
    last_name VARCHAR (20),
    birthdate VARCHAR,
    address_id CHAR (1)
);

DROP TABLE IF EXISTS classes;
CREATE TABLE classes (
    id serial PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    credits INT
);

DROP TABLE IF EXISTS enrollments;
CREATE TABLE enrollments (
    id serial PRIMARY KEY,
    student_id INT,
    class_id INT,
    grade CHAR(1)
);
