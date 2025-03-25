[[MySQL commands]]

- create table with unique column
	```mysql
	CREATE TABLE products (
		product_id INT,
		product_name VARCHAR(25) UNIQUE,
		price DECIMAL (4, 2)
	);
	```
	- `UNIQUE`: ensure no duplicated rows in `product_name` column
- make an already-created column unique using `CONSTRAINT` (if not unique already)
	```mysql
	ALTER TABLE products
	ADD CONSTRAINT
	UNIQUE(product_name);
	```
	- part of `CONSTRAINT` [[constraint]]
