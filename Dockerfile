FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html
COPY dist/web-client/ .

ENV APP_BACKEND_URL=http://localhost:8080
ENV APP_KEYCLOAK_CLIENTID=web-client
ENV APP_KEYCLOAK_REALM=fri-pointer
ENV APP_KEYCLOAK_URL=https://keycloak.mjamsek.com/auth

EXPOSE 80

CMD ["/bin/sh", "-c", "envsubst < ./config/config-schema.json > config/config.json && exec nginx -g 'daemon off;'" ]
