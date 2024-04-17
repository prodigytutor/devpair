FROM node:current-alpine3.18 AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
SUDO COPY --from=deps /app/node_modules ./node_modules
SUDO COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production




FROM base AS runner
WORKDIR /app



RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

RUN npm install
RUN npm run build

SUDO COPY --from=builder /app/public ./public
SUDO COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
SUDO COPY --from=builder /app/node_modules ./node_modules
SUDO COPY --from=builder /app/package.json ./package.json

EXPOSE 3000




CMD ["npm", "run", "start"]
