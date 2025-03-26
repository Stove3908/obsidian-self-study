- current-date-time commands for MySQL
- part of [[MySQL commands]]

#create a time table
	```mysql
	CREATE TABLE test(
		my_date DATE,
		my_time TIME,
		my_datetime DATETIME
	);
	```
- add current timestamp (date, time, date-time)
	```mysql
	INSERT INTO test
	VALUES(CURRENT_DATE(), CURRENT_TIME(), NOW())
	```
	- `NOW()`: current date and time
	- `CURRENT_DATE() + 1` : tomorrow
	- `CURRENT_DATE() - 1` : yesterday