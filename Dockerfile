FROM node:18
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli
CMD ["ng", "serve", "--host", "0.0.0.0"]
EXPOSE 4200



