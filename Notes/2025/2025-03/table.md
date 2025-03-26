- table commands for MySQL
- part of [[MySQL commands]]

# table
## create table with the name "employees"
```mysql
create table employees (
	employee_id INT,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	hourly_pay DECIMAL(5, 2),
	hire_date DATE 
);
```
- each column is separated by comma `,`
- `VARCHAR(50)`
	- `VARCHAR`
		- a data type representing a variable-length string of characters,
		- used to store text data (names, addresses, other alphanumeric data...)
	- `(50)`: maximum 50 characters
- `DECIMAL(5, 2)`
	- `(5, 2)`: 5 maximum digits, decimal precision 2 digits (111.50)

## query table (select)

```mysql
SELECT * FROM employees;
```

- `*` = all
- other query commands: [[queries]]
## rename table

```mysql
RENAME TABLE employees TO workers;
```

## drop table
```mysql
DROP TABLE employees;
```

# column
## add column
```mysql
ALTER TABLE employees
ADD phone_number VARCHAR(15);
```

## modify column
```mysql
ALTER TABLE employees
MODIFY email varchar(100);
```

## change column position
```mysql
ALTER TABLE employees
MODIFY email varchar (100)
AFTER last_name;
```
-  `FIRST`: move column to be first

## drop column
```mysql
ALTER TABLE employees
DROP email;
```

# update 
## update a fielda field
```mysql
UPDATE employees
SET hourly_pay = 10.25
WHERE employee_id = 6;
```

## update multiple field
```mysql
UPDATE employees
SET hourly_pay = 10.25,
	hire_date = '2023#01#07'
WHERE employee_id = 6;
```

## set a field to `NULL` ~ no value
```mysql
UPDATE employees
SET hire_date = NULL
WHERE employee_id = 6;
```

## update all rows within a column
```mysql
UPDATE employees
SET hourly_pay = 10.25
```

# delete 
## all rows in table
```mysql
DELETE from employees;
```

-  add `WHERE` clause to avoid deleting the whole table

## delete something specific
```mysql
DELETE from employees;
WHERE employee_id = 6;
```
