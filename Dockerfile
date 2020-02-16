FROM node

RUN mkdir /app && chown node /app
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install
COPY . /app
COPY --chown=node:node . /app
RUN yarn build
USER node
CMD ["yarn start"]
