FROM node:10
WORKDIR /app
RUN npm init -y
RUN npm install next react react-dom
RUN npm install -g json-server
COPY . /app
EXPOSE 3000