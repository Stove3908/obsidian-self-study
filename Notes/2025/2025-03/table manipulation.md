# table manipulation
- create table
	```mysql
	create table employees (
	employee_id,
	first_name,
	last_name,
	hourly_pay,
	hire_date 
	);
	```
	- `create table employees ()`
		- create a table with the name "employees"
	- each column separated by comma `,`
	- set data types
		```mysql
		create table employees (
			employee_id INT,
			first_name VARCHAR(50),
			last_name VARCHAR(50),
			hourly_pay DECIMAL(5, 2),
			hire_date DATE 
		);
		```
		- `VARCHAR(50)`
			- `VARCHAR`: a data type in SQL that represents a variable-length string of characters, used to store text data, such as names, addresses, or any other alphanumeric data.
			- `(50)`: maximum 50 characters