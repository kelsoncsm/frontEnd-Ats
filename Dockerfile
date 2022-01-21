FROM node
WORKDIR /app
COPY package.json ./
RUN npm install -g @angular/cli@13.1.4
RUN npm install
COPY . .
EXPOSE 4200
CMD npm run start
