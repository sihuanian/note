## sql方法

1. CREATE DATABASE 数据库名;
2. drop database <数据库名>;
3. use 数据库名;
4. CREATE TABLE table_name (column_name column_type);
```sql
CREATE TABLE IF NOT EXISTS `runoob_tbl`(
   `runoob_id` INT UNSIGNED AUTO_INCREMENT,
   `runoob_title` VARCHAR(100) NOT NULL,
   `runoob_author` VARCHAR(40) NOT NULL,
   `submission_date` DATE,
   PRIMARY KEY ( `runoob_id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
5. DROP TABLE table_name ;
6. INSERT INTO table_name ( field1, field2,...fieldN ) VALUES ( value1, value2,...valueN );
7. UPDATE table_name SET field1=new-value1, field2=new-value2 [WHERE Clause]
8. DELETE FROM table_name [WHERE Clause];
9. SELECT DATABASE();