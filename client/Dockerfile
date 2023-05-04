FROM node:alpine

WORKDIR /app
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
RUN npm i --legacy-peer-deps
COPY ./ ./

ARG DEFAULT_PORT 3000
ENV PORT $DEFAULT_PORT
EXPOSE ${PORT}
CMD ["npm", "run", "start"]