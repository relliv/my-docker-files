# postgresql-1 example project

This project basic PostgreSQL based example presentation. 

Allocated ports: 54321, 54322, 54323.

## Using

- **[PostgreSQL](https://www.postgresql.org/)**: the world's most advanced open source relational database.
- **[pgAdmin](https://www.pgadmin.org/)**: the most popular and feature rich open source administration and development platform. Also pgAdmin using React and websocket
- **[postgres-backup-local](https://github.com/prodrigestivill/docker-postgres-backup-local)**: Backup PostgresSQL to local filesystem with periodic backups and rotate backups.

## Configuration

- Rename `.env-example` file to `.env`
- Change values with yours. Username, ports, passwords etc.
- Run `docker-compose up` command

## pgAdmin add new server

- **[login](http://localhost:54322)** pgAdmin with `PGADMIN_EMAIL` and `PGADMIN_PASSWORD` then click `Add New Server`
- General Tab
  - Name: set custom server name
- Connection Tab
  - Host Name: `postgresql_1_postgres` (container name)
  - Port: default PostgreSQL port `5432`
  - Username: use `POSTGRES_USER` value in `.env` file
  - Password: use `POSTGRES_PASSWORD` value in `.env` file
  - Save

## pgAdmin add new table

Servers (*left menu*) > `db name` > postgres > schemas > public > Tables > Right click > Create > Table

## pgAdmin dark theme

File (*top bar*) > Prefences > Miscellaneous > Themes > Theme > Select theme and reload page

## Backup scheduling

**pgbackups** is using **[predefined](http://godoc.org/github.com/robfig/cron#hdr-Predefined_schedules)** options but you can use **[custom](https://crontab.cronhub.io/)**.