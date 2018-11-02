#!/bin/sh

# This exports a docker image to a local tar archive

IMAGE_NAME=mynamespace/myapp
IMAGE_TAG=latest

if [ $# -eq 0 ]
  then
    echo "No output image name supplied."
    echo "Usage: $0 output-image-name.tar.zip"
    exit 1
fi

IMAGE_EXPORT_FILE=$1

echo Exporting $IMAGE_NAME:$IMAGE_TAG to $IMAGE_EXPORT_FILE ...

docker save $IMAGE_NAME:$IMAGE_TAG | zip > $IMAGE_EXPORT_FILE
