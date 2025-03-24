[[MySQL]]

# table manipulation
- create table
	```mysql
	create table employees (
	employee_id INT,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	hourly_pay DECIMAL(5, 2),
	hire_date DATE 
	);
	```
	- `create table employees ()`
		- create a table with the name "employees"
		- each column separated by comma `,`
	- `VARCHAR(50)`
		- `VARCHAR`
			- a data type representing a variable-length string of characters,
			- used to store text data (names, addresses, other alphanumeric data...)
		- `(50)`: maximum 50 characters
	- `DECIMAL(5, 2)`
		- `(5, 2)`: 5 maximum digits, decimal precision 2 digits (111.50)
- select table
	- `SELECT * FROM employees;`
		- `*` = all
- rename table
	- `RENAME TABLE employees TO workers;`
- drop table
	- `DROP TABLE employees;`
- add column
	```mysql
	ALTER TABLE employees
	ADD phone_number VARCHAR(15);
	```
- modify column
	```mysql
	ALTER TABLE employees
	MODIFY email varchar(100);
	```
- change column position
	```mysql
	ALTER TABLE employees
	MODIFY email varchar (100)
	AFTER last_name;
	```
	-  `FIRST`: move column to be first
- drop column
	```mysql
	ALTER TABLE employees
	DROP email;
	```
