FROM nginx:alpine
LABEL author="Oscar Lagatta"
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./dist/apps/products-portal /user/share/nginx/html
EXPOSE 80 80
ENTRYPOINT ["nginx","-g","daemon off;"]
