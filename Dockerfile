FROM node

RUN mkdir /app
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install
COPY . /app
COPY --chown=node:node . /app
RUN yarn build
RUN chown node:node -R /app
USER node

ENV NODE_ENV=productio
CMD ["node","/dist/server.js"]
