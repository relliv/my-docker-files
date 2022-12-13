FROM php:8.2-apache

# mysql driver does not come with php
# so we add it from the official repository
RUN docker-php-ext-install mysqli pdo pdo_mysql
