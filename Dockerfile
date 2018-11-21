FROM nginx:alpine
LABEL author="Oscar Lagatta"
COPY ./dist /user/share/nginx/html
EXPOSE 80 443
ENTRYPOINT ["nginx","-g","daemon off;"]
