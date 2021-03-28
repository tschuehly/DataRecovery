FROM node:15.12.0-alpine3.10 AS build
WORKDIR /datarecovery-frontend
COPY package.json package-lock.json /datarecovery-frontend/
RUN npm install -d
COPY . /datarecovery-frontend/
RUN npm run build:app --prod --aot=true --buildOptimizer=true
#RUN node --max_old_space_size=4192 ./node_modules/@angular/cli/bin/ng build --prod --aot=true --buildOptimizer=true

FROM nginx:1.19.8-alpine AS prod
COPY --from=build /datarecovery-frontend/dist/* /usr/share/nginx/html/
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/datarecovery.conf
EXPOSE 80

CMD ["nginx", "-g","daemon off;"]
