- queries commands for MySQL
- part of [[MySQL commands]]

# query all from table
```mysql
SELECT * FROM employees;
```
- other table commands: [[table]]
# query some columns
```mysql
SELECT first_name, last_name
FROM employees;
```

## change order of columns queried
- the order of column queried is based on its order in the query `SELECT`
```mysql
SELECT last_name, first_name
FROM employees;
```

# looking for specific condition (`WHERE`)
```mysql
SELECT * 
FROM employees
WHERE employee_id = 4;
```

## `>=` operator
```mysql
SELECT * 
FROM employees
WHERE hourly_pay >= 15;
```

## `=<` operator
```mysql
SELECT * 
FROM employees
WHERE hire_date =< '2023-03-01';
```

## `!=` operator
```mysql
SELECT * 
FROM employees
WHERE employee_id != 1;
```

## `NULL` value
```mysql
SELECT * 
FROM employees
WHERE hire_date IS NULL;
```
- `= NULL` will not work
- `IS NOT NULL` will do the opposite (return all rows that DOES contain the value)
