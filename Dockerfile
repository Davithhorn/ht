# build environment
FROM node:18.17.0 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
COPY . ./


RUN npm install react-scripts@5.0.1 -g --silent
RUN npm install -g dotenv-cli
RUN npm i
RUN npm run deploy:dev

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/out /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]