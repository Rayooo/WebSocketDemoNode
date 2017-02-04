FROM hub.c.163.com/library/node:latest
MAINTAINER Ray 123@qq.com

RUN mkdir -p /WebSocket
WORKDIR /WebSocket
COPY . /WebSocket

RUN npm install --registry=https://registry.npm.taobao.org && \
    sed -i "s/localhost:3000/123.206.121.72/" /WebSocket/public/index.html

CMD [ "npm", "start" ]

EXPOSE 3000