# Include environment params reference
include make.env

.PHONY: build bash dev e2e shell start restart stop rm

build:
	docker build --no-cache=true -t $(DOCKER_NAMESPACE)/$(DOCKER_REPOSITORY):$(DOCKER_IMAGE_VERSION) .

build-staging:
	docker build -f Dockerfile.staging --no-cache=true -t $(DOCKER_NAMESPACE)/$(DOCKER_REPOSITORY):$(DOCKER_IMAGE_VERSION) .

build-prod:
	docker build -f Dockerfile.prod --no-cache=true -t $(DOCKER_NAMESPACE)/$(DOCKER_REPOSITORY):$(DOCKER_IMAGE_VERSION) .

bash:
	docker exec -i -t $(DOCKER_CONTAINER_NAME) bash

dev:
	docker run --rm --name $(DOCKER_CONTAINER_NAME) -i -t $(DOCKER_PORTS) -v "$(shell pwd)$(DOCKER_MAPPED_VOLUMES)" $(DOCKER_ENV) $(DOCKER_NAMESPACE)/$(DOCKER_REPOSITORY):$(DOCKER_IMAGE_VERSION) /bin/bash -c "npm install && npm run socket-serve && npm start"

export:
	make build && ./export-image.sh latest.tar.zip

shell:
	docker run --rm --name $(DOCKER_CONTAINER_NAME) -i -t $(DOCKER_PORTS) -v "$(shell pwd)$(DOCKER_MAPPED_VOLUMES)" $(DOCKER_ENV) $(DOCKER_NAMESPACE)/$(DOCKER_REPOSITORY):$(DOCKER_IMAGE_VERSION) /bin/bash

start:
	docker run -d --name $(DOCKER_CONTAINER_NAME) $(DOCKER_PORTS) $(DOCKER_ENV) $(DOCKER_NAMESPACE)/$(DOCKER_REPOSITORY):$(DOCKER_IMAGE_VERSION)

restart:
	docker start $(DOCKER_CONTAINER_NAME)

stop:
	docker stop $(DOCKER_CONTAINER_NAME)

rm:
	docker rm $(DOCKER_CONTAINER_NAME)

default: build
