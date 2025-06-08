# node 기반으로 변경
FROM node:16-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

# 정적 파일과 코드 복사
COPY public ./public
COPY .env .
COPY app.js .

EXPOSE 8080
CMD ["npm","start"]
