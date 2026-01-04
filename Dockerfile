FROM node:20-slim

RUN apt-get update && apt-get install -y ffmpeg imagemagick git python3 make g++ && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json ./

RUN npm install --legacy-peer-deps

COPY . .

ENV DEBIAN_FRONTEND=noninteractive
ENV NODE_ENV=production

EXPOSE 5000

# Use bash to pipe phone number to node
CMD ["/bin/bash", "-c", "echo \${PHONE_NUMBER}\ | node index.js"]
