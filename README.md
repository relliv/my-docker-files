# my-docker-files

<img src="https://preview.dragon-code.pro/EgoistDeveloper/my-docker-files.svg?brand=docker" alt="EgoistDeveloper my-docker-files"/>

My custom docker configurations for various examples projects. Example projects are added to focused subject folder.

## Notes

- Examples mostly `.env` file based but `.env` files can be vulnerability. Because environment variables is not encrypted. So, you should use **[Docker Secrets](https://docs.docker.com/engine/swarm/secrets/)** in production.
- Examples creating only for learning/development purposes. You should configure your working case and production environment.

## Play with Docker

You can test most docker stacks on [PWD](https://labs.play-with-docker.com/). Also you can pass target docker-compose.yml file like with `stack` parameter like as `https://labs.play-with-docker.com/?stack=`.

## Covert Docker Run to Compose

Docker compose, better way to saving, reviewing and sharing docker stacks but most example using Docker Run. We can convert to Compose with alternative tools.

- [composerize](https://www.composerize.com/)