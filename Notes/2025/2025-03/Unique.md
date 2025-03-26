- `UNIQUE` commands for MySQL
- part of [[MySQL commands]], [[constraint|CONSTRAINT commands]]

# `UNIQUE` to new table
- create table with unique column (only accept unique value) called 'products'
```mysql
CREATE TABLE products (
	product_id INT,
	product_name VARCHAR(25) UNIQUE,
	price DECIMAL (4, 2)
);
```
- `UNIQUE`: ensure no duplicated rows in `product_name` column

# `UNIQUE` to pre-existed table
- make a column in an already created table only accept unique value
```mysql
ALTER TABLE products
ADD CONSTRAINT
UNIQUE(product_name);
```

