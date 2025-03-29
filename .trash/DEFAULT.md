- DEFAULT commands for MySQL
- part of [[MySQL commands]]
- 
# Set `DEFAULT` to a value 
## For a new table
```mysql
CREATE TABLE products (
	product_id INT,
    product_name VARCHAR(25),
    price DECIMAL(4, 2) DEFAULT 0
);
```
- if not stated otherwise, the default price will be `0.00`
### extra example
- create transactions table
```mysql
CREATE TABLE transactions(
	transaction_id INT,
    amount DECIMAL(5, 2),
    transaction_date DATETIME DEFAULT NOW() #date-time the moment values are inserted
);
```

- insert info, with transaction_date being the time the transaction occurred
```mysql
INSERT INTO transactions(transaction_id, amount)
VALUE (1, 4.99);
```

## For a pre-existed table
```mysql
ALTER TABLE products
ALTER price SET DEFAULT 0; #the default price will be `0.00`
```

# Note
- When inserting values except for the column(s) with default values, be sure to specify what columns will be inserted.

```mysql
INSERT INTO products(product_id, product_name) #specify non-default column(s) (here)
VALUE 	(104, 'straw'),
		(105, 'napkin'),
        (106, 'fork'),
        (107, 'spoon')
;
```
- `price` column will have default value of `0.00`