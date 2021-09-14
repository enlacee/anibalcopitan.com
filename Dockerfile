FROM node:10.24-alpine

WORKDIR /usr/app
COPY ./spa-nuxtv2 .
RUN yarn install

EXPOSE 3000
ENV NODE_ENV=development

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "yarn", "dev" ]