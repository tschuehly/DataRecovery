#!/bin/bash
export $(cat jungbauer.env | xargs)
echo $REMOTE_DOCKER
docker-compose build

docker -H "ssh://$REMOTE_DOCKER" image rm datarecovery-frontend:0.0.1 datarecovery-backend:0.0.1 --force
echo Uploading Images
docker image save datarecovery-frontend:0.0.1 datarecovery-backend:0.0.1 | docker -H "ssh://$REMOTE_DOCKER" image load
read -p "Press any key to continue... " -n1 -s
#docker-compose down && docker-compose up --force-recreate -d
