FROM node:lts
WORKDIR /nomad-web
COPY .next/standalone/. .
EXPOSE 3000
CMD ["node", "server.js"]