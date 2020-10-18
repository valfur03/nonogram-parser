FROM node:12.18.2

COPY package*.json .
RUN npm install -y

COPY . .
ENTRYPOINT ["node", "index.js"]