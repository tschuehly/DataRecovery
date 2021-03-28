#!/bin/bash
export $(cat env.env | xargs)
echo $REMOTE_DOCKER
#docker-compose build

for img in $(docker-compose config | awk '{if ($1 == "image:") print $2;}'); do
  images="$images $img"
done

echo $images


docker image save $images | docker -H "ssh://$REMOTE_DOCKER" image load
docker-compose -H "ssh://$REMOTE_DOCKER" up --force-recreate -d
docker-compose -H "ssh://$REMOTE_DOCKER" logs -f
read -p "Press any key to continue... " -n1 -s
