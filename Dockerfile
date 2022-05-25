FROM node:16-alpine as building

RUN npm install -g pnpm@next-7

RUN mkdir -p /app
WORKDIR /app

COPY . .

RUN echo "Starting install..."

RUN pnpm install --force

RUN echo "Running build..."

RUN pnpm run build

RUN echo "Done"

EXPOSE 3000

CMD [ "pnpm", "run", "start" ]

