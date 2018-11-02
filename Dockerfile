FROM node:8.11.2

# Install Nano
RUN apt-get update
RUN apt-get install -y nano

# Folder Structure Setup
RUN mkdir /myapp
COPY . /myapp
WORKDIR /myapp

# Install Dependencies
RUN npm install

# Run the app
RUN npm run build-dev

EXPOSE 80
EXPOSE 3000

CMD ["npm", "run", "prod"]
