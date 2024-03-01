FROM node:alpine
EXPOSE 3000
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
ENV PORT=3000
CMD [ "npm", "start" ]