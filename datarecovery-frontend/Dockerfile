FROM node:16-alpine as builder

RUN apk add --no-cache \
      chromium \
      ca-certificates

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

ENV SCULLY_PUPPETEER_EXECUTABLE_PATH '/usr/bin/chromium-browser'

WORKDIR /datarecovery-frontend
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build:prod
RUN npm run scully -- --scanRoutes --showGuessError
run ls -alh ./dist/datarecovery-frontend

FROM nginx:1.19.8-alpine AS prod
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /datarecovery-frontend/dist/static /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g","daemon off;"]
