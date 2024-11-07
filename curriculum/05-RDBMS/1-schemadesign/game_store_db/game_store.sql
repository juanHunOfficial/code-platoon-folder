DROP TABLE IF EXISTS employees, games, action_figures, posters ;
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    employee_name VARCHAR(50),
    position VARCHAR(50),
    salary decimal(8,2)
);

COPY employees FROM '/Users/juanhun/Desktop/code-platoon-assignments/curriculum/05-RDBMS/1-schemadesign/example/data/employee.csv' WITH CSV HEADER; 

CREATE TABLE games(
    game_id SERIAL PRIMARY KEY, 
    game_title VARCHAR(50),
    quantity INT,
    price DECIMAL(5,2)
);

COPY games FROM '/Users/juanhun/Desktop/code-platoon-assignments/curriculum/05-RDBMS/1-schemadesign/example/data/game.csv' WITH CSV HEADER;

CREATE TABLE action_figures(
    id SERIAL PRIMARY KEY,
    action_figure_title VARCHAR(50),
    quantity INT,
    price DECIMAL(5,2)
);

COPY action_figures FROM '/Users/juanhun/Desktop/code-platoon-assignments/curriculum/05-RDBMS/1-schemadesign/example/data/action_figure.csv' WITH CSV HEADER;

CREATE TABLE posters(
    id SERIAL PRIMARY KEY,
    poster_title VARCHAR(50),
    quantity INT,
    price DECIMAL(4,2)
);

COPY posters FROM '/Users/juanhun/Desktop/code-platoon-assignments/curriculum/05-RDBMS/1-schemadesign/example/data/poster.csv' WITH CSV HEADER;
