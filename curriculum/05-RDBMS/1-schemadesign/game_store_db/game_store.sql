DROP TABLE IF EXISTS employee CASCADE;
CREATE TABLE employee (
    employee_id SERIAL PRIMARY KEY,
    employee_name VARCHAR(50) NOT NULL,
    position VARCHAR(50) NOT NULL,
    salary decimal(8,2) NOT NULL,
    CHECK(employee_name ~ '^[A-Za-z''-]+'),
    CHECK(position IN ('Sales Associate', 'Store Manager', 'Inventory Clerk', 
                       'Customer Service Representative', 'IT Specialist', 'Marketing Coordinator',
                       'Assistant Manager', 'Finance Analyst', 'Security Officer', 'HR Coordinator')),
    CHECK(salary BETWEEN 32000.00 and 60000.00)
);
COPY employee FROM '/Users/juanhun/Desktop/code-platoon-assignments/curriculum/05-RDBMS/1-schemadesign/example/data/employee.csv' WITH CSV HEADER; 

DROP TABLE IF EXISTS game CASCADE;
CREATE TABLE game(
    game_id SERIAL PRIMARY KEY, 
    game_title VARCHAR(50) UNIQUE NOT NULL,
    quantity INT DEFAULT 1 NOT NULL,
    price DECIMAL(5,2) NOT NULL,
    engine INT NOT NULL,
    CHECK (game_title ~ '^[A-Za-z0-9 _\-:''\\]+$'),
    CHECK(quantity > 0 AND quantity < 51),
    CHECK(price > 10 AND price < 60),
    FOREIGN KEY(engine) REFERENCES gaming_engine(engine_id)
);
COPY game FROM '/Users/juanhun/Desktop/code-platoon-assignments/curriculum/05-RDBMS/1-schemadesign/example/data/game.csv' WITH CSV HEADER;

DROP TABLE IF EXISTS action_figure;
CREATE TABLE action_figure(
    action_figure_id SERIAL PRIMARY KEY,
    action_figure_title VARCHAR(50),
    quantity INT DEFAULT 1,
    price DECIMAL(5,2),
    CHECK(action_figure_title ~ '^[A-Za-z0-9!?/:''\-\s,;().\[\]{}&|0-9]+$'),
    CHECK(quantity BETWEEN 1 AND 30),
    CHECK(price BETWEEN 10 AND 100)
);
COPY action_figure FROM '/Users/juanhun/Desktop/code-platoon-assignments/curriculum/05-RDBMS/1-schemadesign/example/data/action_figure.csv' WITH CSV HEADER;

DROP TABLE IF EXISTS poster;
CREATE TABLE poster(
    poster_id SERIAL PRIMARY KEY,
    poster_title VARCHAR(50),
    quantity INT DEFAULT 1,
    price DECIMAL(4,2),
    CHECK(poster_title ~ '^[A-Za-z''-]'),
    CHECK(quantity BETWEEN 1 AND 30),
    CHECK(price BETWEEN 6 AND 20)
);
COPY poster FROM '/Users/juanhun/Desktop/code-platoon-assignments/curriculum/05-RDBMS/1-schemadesign/example/data/poster.csv' WITH CSV HEADER;

DROP TABLE IF EXISTS genre CASCADE;
CREATE TABLE genre(
    genre_id SERIAL PRIMARY KEY,
    genre_name VARCHAR(50) NOT NULL
);
COPY genre FROM '/Users/juanhun/Desktop/code-platoon-assignments/curriculum/05-RDBMS/1-schemadesign/example/data/genre.csv' WITH CSV HEADER;

DROP TABLE IF EXISTS social_security;
CREATE TABLE social_security(
    social_security_id SERIAL PRIMARY KEY,
    employee_id INT NOT NULL,
    security_number VARCHAR(11) NOT NULL,
    FOREIGN KEY(employee) REFERENCES employee(employee_id)
);
COPY social_security FROM '/Users/juanhun/Desktop/code-platoon-assignments/curriculum/05-RDBMS/1-schemadesign/example/data/social_security.csv' WITH CSV HEADER;

DROP TABLE IF EXISTS shifts;
CREATE TABLE shifts(
    shift_id SERIAL PRIMARY KEY,
    start_time_stamp TIMESTAMP NOT NULL,
    end_time_stamp TIMESTAMP NOT NULL,
    employee_id INT NOT NULL,
    FOREIGN KEY(employee) REFERENCES employee(employee_id)
);
COPY shifts FROM '/Users/juanhun/Desktop/code-platoon-assignments/curriculum/05-RDBMS/1-schemadesign/example/data/shifts.csv' WITH CSV HEADER;

DROP TABLE IF EXISTS genre_game;
CREATE TABLE genre_game(
    id SERIAL PRIMARY KEY,
    game_to_genre INT NOT NULL,
    genre_to_game INT NOT NULL,
    FOREIGN KEY(game_to_genre) REFERENCES game(game_id),
    FOREIGN KEY(genre_to_game) REFERENCES genre(genre_id)
);
COPY genre_game FROM '/Users/juanhun/Desktop/code-platoon-assignments/curriculum/05-RDBMS/1-schemadesign/example/data/genre_game.csv' WITH CSV HEADER;

DROP TABLE IF EXISTS gaming_engine CASCADE;
CREATE TABLE gaming_engine(
    engine_id SERIAL PRIMARY KEY,
    engine VARCHAR(50) NOT NULL
);
COPY gaming_engine FROM '/Users/juanhun/Desktop/code-platoon-assignments/curriculum/05-RDBMS/1-schemadesign/example/data/gaming_engine.csv' WITH CSV HEADER;