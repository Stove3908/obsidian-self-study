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