DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    employee_name VARCHAR(30),
    position VARCHAR(30),
    salary decimal(8,2)
);

DROP TABLE IF EXISTS games;
CREATE TABLE games(
    id SERIAL PRIMARY KEY,
    game_id SERIAL, 
    game_title VARCHAR(30),
    quantity INT,
    price DECIMAL(5,2)
);

DROP TABLE IF EXISTS action_figures;
CREATE TABLE action_figures(
    id SERIAL PRIMARY KEY,
    action_figure_title VARCHAR(30),
    quantity INT,
    price DECIMAL(5,2)
);

DROP TABLE IF EXISTS posters;
CREATE TABLE posters(
    id SERIAL PRIMARY KEY,
    poster_title VARCHAR(30),
    quantity INT,
    price DECIMAL(4,2)
);


