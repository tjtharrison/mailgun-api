FROM node
COPY ./app /app/
RUN cd /app && npm install
WORKDIR /app