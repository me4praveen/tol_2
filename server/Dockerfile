FROM node:alpine

WORKDIR /app
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
RUN npm i
COPY ./ ./

ARG DEFAULT_PORT 3001
ENV PORT $DEFAULT_PORT
EXPOSE ${PORT}

CMD ["npm", "run", "dev"]