- manual save point commands for MySQL
- part of [[MySQL commands]]

# manual save point
## turn off automatic save
```mysql
SET  AUTOCOMMIT = OFF;
```

## create a save point
```mysql
COMMIT;
```

## restore previous save point (`COMMIT`)
```mysql
ROLLBACK;
```
