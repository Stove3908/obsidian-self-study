[[MySQL]]
- update a field
	```mysql
	UPDATE employees
	SET hourly_pay = 10.25
	WHERE employee_id = 6;
	```
- update multiple field
	```mysql
	UPDATE employees
	SET hourly_pay = 10.25,
	    hire_date = '2023-01-07'
	WHERE employee_id = 6;
	```
- set a field to `NULL` ~ no value
	```mysql
	UPDATE employees
	SET hire_date = NULL
	WHERE employee_id = 6;
	```
- update all rows within a column
	```mysql
	UPDATE employees
	SET hourly_pay = 10.25
	```
- delete all rows in table
	```mysql
	DELETE from employees;
	```
	- add `WHERE` clause to avoid deleting the whole table
- delete something specific
	```mysql
	DELETE from employees;
	WHERE employee_id = 6;
	```
