FROM node:16-alpine

WORKDIR /konnekt

COPY package.json ./
COPY package-lock.json ./
RUN npm install 

COPY . ./

CMD ["npm", "start"]