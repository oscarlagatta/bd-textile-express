FROM nginx:alpine
LABEL author="Oscar Lagatta"
COPY ./dist/apps/products-portal /user/share/nginx/html
EXPOSE 80 443
ENTRYPOINT ["nginx","-g","daemon off;"]
