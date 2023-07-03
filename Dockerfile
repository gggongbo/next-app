FROM node:18-alpine

# RUN apk add --no-cache libc6-compat
RUN apt-get update && apt-get install -y libc6-compat
RUN mkdir -p /usr/src/next-app
WORKDIR /usr/src/next-app

COPY package*.json ./
RUN yarn

COPY . .
RUN yarn build

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD ["yarn", "start"]