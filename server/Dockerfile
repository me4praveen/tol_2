FROM node:alpine

WORKDIR /app
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
COPY ./ ./
RUN npm i

ARG DEFAULT_PORT 3001
ENV PORT $DEFAULT_PORT
EXPOSE ${PORT}

CMD ["npm", "run", "dev"]