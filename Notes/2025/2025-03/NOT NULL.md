- `UNIQUE` commands for MySQL
- part of [[MySQL commands]], [[constraint|CONSTRAINT commands]]
- 
# `NOT NULL`
## NOT NULL to new table
```mysql
CREATE TABLE products (
	product_id INT,
	product_name VARCHAR(25),
	price DECIMAL (4, 2) NOT NULL
);
```
- `NOT NULL`: column price cannot be NULL (no value)

## `NOT NULL` to pre-existed table
- add `NOT NULL` to an already exist table
```mysql
ALTER TABLE products
MODIFY price DECIMAL (4, 2) NOT NULL;
```
