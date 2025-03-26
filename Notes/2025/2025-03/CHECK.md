- `CHECK` commands for MySQL
- part of [[MySQL commands]]

# `CHECK` to new table
```mysql
create table employees (
	employee_id INT,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	hourly_pay DECIMAL(5, 2),
	hire_date DATE 
	CHECK (hourly_pay >= 10)
);
```
- should give it a name
```mysql
create table employees (
	employee_id INT,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	hourly_pay DECIMAL(5, 2),
	hire_date DATE 
	CONSTRAINT chk_hourly_pay CHECK (hourly_pay >= 10)
);
```

# `CHECK` to pre-existed table
```mysql
ALTER TABLE employees
ADD CONSTRAINT chk_hourly_pay CHECK(hourly_pay >= 10);
```

# Drop `CHECK`
```mysql
ALTER TABLE employees
DROP CHECK chk_hourly_pay;
```
