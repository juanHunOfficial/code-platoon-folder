DROP TABLE IF EXISTS employees, games, action_figures, posters ;
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    employee_name VARCHAR(50),
    position VARCHAR(50),
    salary decimal(8,2),
    CHECK(employee_name ~ '^[A-Za-z''-]+'),
    CHECK(position IN ('Sales Associate', 'Store Manager', 'Inventory Clerk', 
                       'Customer Service Representative', 'IT Specialist', 'Marketing Coordinator',
                       'Assistant Manager', 'Finance Analyst', 'Security Officer', 'HR Coordinator')),
    CHECK(salary BETWEEN 32000.00 and 60000.00)
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
    quantity INT DEFAULT 1,
    price DECIMAL(5,2),
    CHECK(action_figure_title ~ '^[A-Za-z0-9!?/:''\-\s,;().\[\]{}&|0-9]+$'),
    CHECK(quantity BETWEEN 1 AND 30),
    CHECK(price BETWEEN 10 AND 100)
);

COPY action_figures FROM '/Users/juanhun/Desktop/code-platoon-assignments/curriculum/05-RDBMS/1-schemadesign/example/data/action_figure.csv' WITH CSV HEADER;

CREATE TABLE posters(
    id SERIAL PRIMARY KEY,
    poster_title VARCHAR(50),
    quantity INT DEFAULT 1,
    price DECIMAL(4,2),
    CHECK(poster_title ~ '^[A-Za-z''-]'),
    CHECK(quantity BETWEEN 1 AND 30),
    CHECK(price BETWEEN 6 AND 20)
);

COPY posters FROM '/Users/juanhun/Desktop/code-platoon-assignments/curriculum/05-RDBMS/1-schemadesign/example/data/poster.csv' WITH CSV HEADER;
