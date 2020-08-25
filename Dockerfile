# build stage
FROM node:12.18.3-alpine as build
WORKDIR /lab-bench
ENV PATH /lab-bench/node_modules/.bin:$PATH
COPY package.json /lab-bench/package.json
RUN npm install 
COPY . /lab-bench
RUN npm run build

# final stage
FROM nginx:1.16.0-alpine
COPY --from=build /lab-bench/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]