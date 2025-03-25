[[MySQL commands]]

- create table with NOT NULL constraint
	```mysql
	CREATE TABLE products (
		product_id INT,
	    product_name VARCHAR(25),
	    price DECIMAL (4, 2) NOT NULL
	);
	```
	- `NOT NULL`: column price cannot be NULL (no value)
- add `NOT NULL` to an already exist table
	```mysql
	ALTER TABLE products
	MODIFY price DECIMAL (4, 2) NOT NULL;
	```
- `UNIQUE` constraint: [[unique]]
