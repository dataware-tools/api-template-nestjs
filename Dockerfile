FROM node:16.13.2 AS deps
WORKDIR /app
COPY . .
RUN --mount=type=secret,id=npmrc,target=/root/.npmrc npm install

FROM node:16.13.2 AS production
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

CMD ["npm", "run", "start"]
