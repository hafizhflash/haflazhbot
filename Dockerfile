FROM node:20-slim

RUN apt-get update && apt-get install -y ffmpeg imagemagick git python3 make g++ && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json ./

RUN npm install --legacy-peer-deps

COPY . .

ENV DEBIAN_FRONTEND=noninteractive
ENV NODE_ENV=production

EXPOSE 5000

# Shell form to pipe phone number
CMD /bin/bash -c "echo \ | node index.js"
