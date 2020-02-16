FROM node

RUN mkdir app
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install
COPY . /app
RUN yarn build
USER node
CMD ["yarn start"]
