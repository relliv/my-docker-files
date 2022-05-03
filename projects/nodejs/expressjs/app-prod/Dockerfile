FROM node:lts-alpine

# Create app directory
WORKDIR /home/node/app

# Copy app source to app directory
COPY --chown=node:node . .

# Install app dependencies
RUN npm install --only=production

USER node

EXPOSE 8080
CMD [ "node", "server.js" ]