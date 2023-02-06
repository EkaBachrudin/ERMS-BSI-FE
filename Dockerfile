FROM node:16-alpine3.15 AS builder

WORKDIR /app
COPY package.json ./
COPY ./cert.crt /etc/ssl/private/prosperosolutions/cert.crt
COPY ./key.pem /etc/ssl/private/prosperosolutions/key.pem
RUN npm install
COPY . .
RUN npm run build


FROM nginx:1.22.0-alpine
COPY --from=builder /app/dist/ /usr/share/nginx/
COPY ./nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443
