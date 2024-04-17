FROM node:current-alpine3.18 AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
 COPY --from=deps /app/node_modules ./node_modules
 COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production




FROM base AS runner
WORKDIR /app
FROM ubuntu:12.04

RUN apt-get update && \
      apt-get -y install sudo

RUN useradd -m docker && echo "docker:docker" | chpasswd && adduser docker sudo

USER docker
CMD /bin/bash



RUN npm install
RUN npm run build

 COPY --from=builder /app/public ./public
 COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
 COPY --from=builder /app/node_modules ./node_modules
 COPY --from=builder /app/package.json ./package.json

EXPOSE 3000




CMD ["npm", "run", "start"]
