# Docker Contained Angular Application w/socket comm layer

Welcome! This repository contains a boilerplate Angular application with redux data flow with a socket.io comm sync mechanism built-in, which is built inside a Docker container. You can use this for local development, and then deploy the container directly to a hosted production environment. If you follow the below instructions, you should be up and running in no time.

## Technologies Used

As of **09-11-2018**, this application is built upon the following technologies and versions:
- Front-end Framework:
    [Angular v6.0.3](https://angular.io)
- Docker Container:
    [Docker v18.03.1-ce](https://www.docker.com)
- Server, Development and Build Tools:
    [Node v8.9.2](https://nodejs.org/)

## Getting Started

To begin development work on the app, you must have Docker installed on your system. If you are using an older version of Docker than v18, please first uninstall it and then use the appropriate installer from the [docker website](https://docs.docker.com/engine/installation/).

Additionally, you will need to stop any other webservers running locally, especially if you are on an Apple computer running an Apache Web server on port 80.

Once Docker has been successfully installed on your machine and you have stopped all local web servers, follow the steps below to begin development on this web application.

1. **Clone this repository** onto your local machine and then navigate to the project root directory.
1. Ensure that Docker is installed and running on your machine.

### Mac and Linux Users

1. `make build`  **Build the docker instance.** This command will move the repository and all the necessary development tools into a containerized environment.
1. `make dev`  **Install project dependencies and serve the project.** This command will access your new Docker container, install all of the necessary dependencies, and then serve the project.

### Windows Users

1. `.\MakeFile build`  **Build the docker instance.** This command will move the repository and all the necessary development tools into a containerized environment.
1. `.\MakeFile dev`  **Install project dependencies and serve the project.** This command will access your new Docker container, install all of the necessary dependencies, and then serve the project.

A prompt from Docker will ask permission to access the created folder. If the prompt does not show up, ensure the folder is already being shared in the Docker Settings and has permissions for the current user.

## Success

If the build is successful, you will be able to run `make dev` or `.\MakeFile dev` and view the working application in a web browser at [http://localhost:4200](http://localhost:4200)

## Container Commands

The following commands are available OUTSIDE of the container. They are meant to be run on your local machine from the project root folder. You can use these commands to manage your local development environment and run tests against your application.

- `build` Builds your container from the instructions in your Dockerfile.  
    **IMPORTANT** Due to the differences between Angular's development and production build process, it's important to test your builds locally before deploying to a hosted environment. To test the production builds, you can use the following commands:
    - `build-staging` Builds your container using the staging environment settings.
    - `build-prod` Builds your container using the production environment settings.
- `shell` Starts your container and automatically logs into it via SSH.
- `bash` Attaches to an already running container and opens an additional terminal session.
- `dev` Spins up a container and automatically runs NPM install and starts the Angular CLI dev server on port 4200.
- `start` Runs the container in daemon mode (for Production) - it will run in the background and you can attach to it at any time.
- `restart` Starts a stopped container.
- `stop` Stops the running container.
- `rm` Removes your container.
- `release` Builds your container image and then pushes it to the Docker Hub repository specified in your make_env file.

## Environment Variables

You may pass additional environment variables to your docker application container by including them in your `make.env` file.
Follow these steps to add new environment variables:

1. For Batch files the variable should not have space between the name and the value "variable=value"
1. Destroy your existing container and rebuild it using `make build` or `.\MakeFile build`.
1. Run and re-attach to your updated container using `make dev` or `.\MakeFile dev`.

## Troubleshooting

The section below is to document "gotchas" and common build errors.

- `Error starting userland proxy: Bind for 0.0.0.0:80: unexpected error (Failure EADDRINUSE).`
  This is due to a conflict on port 80. Are you running a local web server?
  *On Mac:*
  `sudo apachectl stop`
- If your build fails at webpack compilation, there could be an issue with SCSS modules.
  Try running `npm rebuild node-sass --force` to resolve.
