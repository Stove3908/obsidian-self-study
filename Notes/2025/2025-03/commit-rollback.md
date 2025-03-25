[[MySQL commands]]

- turn off automatic save
	```mysql
	SET  AUTOCOMMIT = OFF;
	```
- create a save point
	```mysql
	COMMIT;
	```
- restore previous save point (`COMMIT`)
	```mysql
	ROLLBACK;
	```