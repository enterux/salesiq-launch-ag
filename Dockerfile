# syntax=docker/dockerfile:1

# ---- Dependencies ----
FROM node:24-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
# Use npm install (not ci) so platform-specific native deps (Tailwind v4 oxide,
# emnapi) resolve correctly inside the Linux image regardless of the host OS.
RUN npm install --no-audit --no-fund

# ---- Builder ----
FROM node:24-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- Runner ----
FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# Standalone output bundles only the files needed to run the server.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
