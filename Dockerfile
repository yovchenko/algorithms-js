FROM node:12.20.0

ENV NODE_ENV=development

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 9000

CMD ["npm", "run", "client:dev"]
