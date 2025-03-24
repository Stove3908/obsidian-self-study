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
		- `VARCHAR`: a data type representing a variable-length string of characters, used to store text data, such as names, addresses, or any other alphanumeric data.
		- `(50)`: maximum 50 characters
	- `DECIMAL(5, 2)`
		- `(5, 2)`: 5 maximum digits, decimal precision 2 digits (1.50)