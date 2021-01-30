#!/bin/bash
if [ ! -n "$REG" ];
then
  REG='docker.io'
fi
cd build
tee > ./Dockerfile <<-'EOF'
FROM iinfinity/nginx
COPY ["./", "/app/"]
EOF
docker build -t $REG/$PUBLIC_URL .
docker push $REG/$PUBLIC_URL
