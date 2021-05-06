FROM node:15.12.0-alpine3.10 AS builder
WORKDIR /datarecovery-frontend
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build:prod

FROM nginx:1.19.8-alpine AS prod
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /datarecovery-frontend/dist/* /usr/share/nginx/html/
EXPOSE 80

CMD ["nginx", "-g","daemon off;"]
