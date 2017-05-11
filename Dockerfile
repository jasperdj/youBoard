# Create image based on the official Node 6 image from dockerhub
FROM node:7

# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Copy dependency definitions
COPY package.json /app
COPY .angular-cli.json /app
COPY .editorconfig /app
COPY karma.conf.js /app
COPY package.json /app
COPY protractor.conf.js /app
COPY proxy.conf.json /app
COPY semantic.json /app
COPY tsconfig.json /app
COPY tslint.json /app
COPY e2e/.  /app/e2e
COPY src/. /app/src

# Install dependecies
RUN npm install
RUN npm install -g @angular/cli

# Expose the port the app runs in
EXPOSE 4200 4200

# Serve the app
CMD ["npm", "start"]
