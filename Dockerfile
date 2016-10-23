FROM node:latest

RUN apt-get update && \
    apt-get install -y nginx

ENV TERM=xterm
ENV ROOT /var/www/react-starter-app

# make this cache-able
RUN mkdir -p $ROOT/dist && \
    mkdir -p $ROOT/src
COPY shelterhub/package.json $ROOT/src/

WORKDIR $ROOT/src
RUN npm install --loglevel=warn

# build & test
COPY /shelterhub $ROOT/src/
RUN npm run build

EXPOSE 8080

# start sever
CMD ./run.sh
