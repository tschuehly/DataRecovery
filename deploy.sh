#!/bin/bash
export $(cat .env | xargs)
echo $REMOTE_DOCKER
#docker-compose build
#
#for img in $(docker-compose config | awk '{if ($1 == "image:") print $2;}'); do
#  images="$images $img"
#done
#
#echo $images


docker-compose -H "ssh://$REMOTE_DOCKER" down
echo Stopped Docker
docker -H "ssh://$REMOTE_DOCKER" image rm datarecovery-frontend:0.0.1 datarecovery-backend:0.0.1 --force
docker image save datarecovery-frontend:0.0.1 datarecovery-backend:0.0.1 | docker -H "ssh://$REMOTE_DOCKER" image load
docker-compose -H "ssh://$REMOTE_DOCKER" up --force-recreate -d
docker-compose -H "ssh://$REMOTE_DOCKER" logs -f
read -p "Press any key to continue... " -n1 -s
