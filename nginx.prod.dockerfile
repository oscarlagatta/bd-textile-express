##### Stage 1
FROM node:latest as node
LABEL author="Oscar Lagatta"
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build -- --prod

##### Stage 2
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=node /app/dist/apps/products-portal /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t olagatta.azurecr.io/bd:1.0 -f nginx.prod.dockerfile .
# docker run -d -p 80:80 olagatta.azurecr.io/bd:1.0