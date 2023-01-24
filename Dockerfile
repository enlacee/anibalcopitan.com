FROM node:10.24-alpine

WORKDIR /usr/app
# Available to mount the volumen on container
VOLUME /usr/app

EXPOSE 3000
ENV NODE_ENV=development

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000



