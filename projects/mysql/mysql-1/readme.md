# mysql-1 example project

This project basic MySQL based example presentation. 

## Using

- **[MySQL](https://www.mysql.com/)**: MySQL, the most popular Open Source SQL database management system, is developed, distributed, and supported by Oracle Corporation.
- **[phpMyAdmin](https://www.phpmyadmin.net/)**: phpMyAdmin is a free software tool written in PHP, intended to handle the administration of MySQL over the Web.
- **[adminer](https://www.adminer.org/)**: Adminer (formerly phpMinAdmin) is a full-featured database management tool written in PHP.
- **[MySQL Workbench](https://www.mysql.com/products/workbench/)**: MySQL Workbench is a unified visual tool for database architects, developers, and DBAs.

## Configuration

- Rename `.env-example` file to `.env`
- Change values with yours. Username, ports, passwords etc.
- Run `docker-compose up` command

## phpMyAdmin

phpMyAdmin is popular advanced database administration tool and served at [http://localhost:PHPMYADMIN_PORT](http://localhost:PHPMYADMIN_PORT)

Login credentials

- Root:
  - username: root
  - password: `MYSQL_ROOT_PASSWORD`
- User
  - username: `MYSQL_USER`
  - password: `MYSQL_PASSWORD`

## adminer

adminer is simple database management tool and served at [http://localhost:ADMINER_PORT](http://localhost:ADMINER_PORT)

Login credentials:

- System: MySQL
- Server: `mysql_1_db` (*MySQL container name*)
- Username: `MYSQL_USER`
- Password: `MYSQL_PASSWORD`
- Database: `MYSQL_DB`

## mysql-workbench

mysql-workbench is not web app and this container works like as remote desktop and exposed at [http://localhost:MYSQL_WORKBENCH_PORT](http://localhost:MYSQL_WORKBENCH_PORT). Some shortcuts may not work like copy paste.

On welcome screen click `create new MySQL connection` button (*plus icon*) then enter these credentials;

- Connection name: set any name or alias for this connection
- Hostname: `mysql_1_db` (*MySQL container name*)
- Port: 3306 (*contaner port*)
- Username: `MYSQL_USER`
- Press "OK" then enter `MYSQL_PASSWORD`

Now this connection listing under connections, double click and enter server.

## Backup scheduling

**pgbackups** is using **[predefined](http://godoc.org/github.com/robfig/cron#hdr-Predefined_schedules)** options but you can use **[custom](https://crontab.cronhub.io/)**.