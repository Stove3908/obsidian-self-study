- query all
	```mysql
	SELECT * FROM employees;
	```
- query some columns
	```mysql
	SELECT first_name, last_name
	FROM employees;
	```
- the order of column based on its order in the query `SELECT`
	```mysql
	SELECT last_name, first_name
	FROM employees;
	```
- looking for specific condition (`WHERE`)
	```mysql
	SELECT * 
	FROM employees
	WHERE employee_id = 4;
	```
	- other examples
		- `>=` operator
			```mysql
			SELECT * 
			FROM employees
			WHERE hourly_pay >= 15;
			```
		- `=<` operator
			```mysql
			SELECT * 
			FROM employees
			WHERE hire_date =< '2023-03-01';
			```
		- `!=` operator
			```mysql
			SELECT * 
			FROM employees
			WHERE employee_id != 1;
			```
		- `!=` operator
			```mysql
			SELECT * 
			FROM employees
			WHERE employee_id != 1;
			```
