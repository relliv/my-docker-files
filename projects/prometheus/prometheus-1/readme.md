# prometheus-1 example project

In this project focused Nginx status metrics and sharing with Prometheus + Grafana.

## Using

- **[Nginx](https://www.nginx.com/)**: NGINX accelerates content and application delivery, improves security, facilitates availability and scalability for the busiest web sites on the Internet.
  - [ngx_http_stub_status_module](http://nginx.org/en/docs/http/ngx_http_stub_status_module.html): provides access to basic status information.
- **[nginx-prometheus-exporter](https://github.com/nginxinc/nginx-prometheus-exporter)**: NGINX Prometheus Exporter for NGINX and NGINX Plus
- **[Prometheus](https://prometheus.io/)**: Power your metrics and alerting with a leading
open-source monitoring solution.
- **[Grafana](https://grafana.com/)**: The open and composable observability and data visualization platform. Visualize metrics, logs, and traces from multiple sources like Prometheus, Loki, Elasticsearch, InfluxDB, Postgres and many more.

## Configuration

- Rename `.env-example` file to `.env`
- Change values with yours. Username, ports, passwords etc.
- Run `docker-compose up` command

## Story

- Nginx server status exposed at **http://localhost:NGINX_PORT/status**.
- nginx-prometheus-exporter fetches and exposes nginx status metrics for prometheus **http://localhost:NGINX_PROM_EXPORTER_PORT/metrics**.
  - In this point nginx-prometheus-exporter is working like middleware.
  - Regularly publishes current metrics and intervals can configure with `.env` file.
- We can see all prometheus jobs at **http://localhost:PROMETHEUS_PORT/target** page.
  - Jobs, alerts and other configurations define in `./prometheus/conf/prometheus.yml` file.
- Grafana serving at **http://localhost:GRAFANA_PORT/**. Enter first login credentials and continue.
  - Visit `/datasources/new` page and select `Prometheus` option.
  - All containers in same network and knows each others as container. So URL option should be like this `http://prometheus_1:PROMETHEUS_PORT/`
  - Enter other connection credentials and set `HTTP Method` value as `GET` then save it.
  - Now we can see Prometheus dashboard at **http://localhost:GRAFANA_PORT/dashboards**

## Grafana add Prometheus job graph

  - Visit `Prometheus dashboard` and click `Add panel` (right top, bar chart icon).
  - Select `Data Source` as `Prometheus` (bottom, query tab).
  - Add PromQL for total request query to query input: `rate(nginx_http_requests_total{job="nginx-status-job"}[1m])`. 
  - More info about [PromQL](https://prometheus.io/docs/prometheus/latest/querying/basics/).

## Readings

- [Monitoring nginx with Prometheus and Grafana](https://dimitr.im/monitoring-nginx-with-prometheus-and-grafana)
- [NGINX Prometheus Exporter](https://github.com/nginxinc/nginx-prometheus-exporter#readme)
- [Prometheus Configuration](https://prometheus.io/docs/prometheus/latest/configuration/configuration)
- [Run Grafana Docker image](https://grafana.com/docs/grafana/latest/installation/docker/)
- [Prometheus Counters and how to deal with them](https://www.innoq.com/en/blog/prometheus-counters/)