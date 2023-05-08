-- create
CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
);

-- insert
INSERT INTO employees VALUES (1, 'Samit');
INSERT INTO employees VALUES (2, 'Mohan');
INSERT INTO employees VALUES (3, 'Sanjay');

-- fetch 
SELECT * FROM employees;
