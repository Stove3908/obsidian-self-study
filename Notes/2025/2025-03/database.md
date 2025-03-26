- database commands for MySQL
- part of [[MySQL commands]]

---
- NOTE: the database's name used here is `myDB`
# create a database with the name `myDB`
```mysql
CREATE DATABASE myDB;
```

# set it as default schema (use)
```mysql
USE myDB;
```

# drop/remove database
```mysql
DROP DATABASE myDB;
```

# set database to read only
```mysql
ALTER DATABASE myDB READ ONLY = 1;
```

# set database to NOT read only
```mysql
ALTER DATABASE myDB READ ONLY = 0;
```

