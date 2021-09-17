# nginx-2 example project

This project shows how to enable and use native Nginx modules. Because official docker build comes with a few default module. So we use custom Dockerfile to enable native modules.

## Modules
- [ngx_http_stub_status_module](http://nginx.org/en/docs/http/ngx_http_stub_status_module.html): provides access to basic status information.

## Configuration

- Rename `.env-example` file to `.env`
- Change values with yours. Username, ports, passwords etc.
- Run `docker-compose up` command

## Endpoints

- **Server Status**: http://localhost:NGINX_PORT/status

## Readings

- [Linux list installed Nginx modules](https://www.cyberciti.biz/faq/how-to-list-installed-nginx-modules-and-compiled-flags/)