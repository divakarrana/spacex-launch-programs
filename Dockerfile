# build ===============================
FROM node:10 as build

WORKDIR /spacex-launch-programs

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# run ===============================
FROM node:10-alpine as run

WORKDIR /spacex-launch-programs

COPY --from=build /spacex-launch-programs .

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
