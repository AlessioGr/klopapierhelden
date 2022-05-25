FROM node:16-alpine as building

RUN npm install -g pnpm@next-7

RUN mkdir -p /app
WORKDIR /app

COPY . .

RUN echo "Starting install..."

RUN npm install --force


RUN echo "Running build..."

RUN npm run build

RUN echo "Done"

# Run everything after as non-privileged user.
USER pptruser

EXPOSE 3000

CMD [ "pnpm", "run", "start" ]

