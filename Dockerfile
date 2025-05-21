FROM node:lts
WORKDIR /nomad-web
COPY .next/standalone/. .
EXPOSE 443
CMD ["node", "server.js"]