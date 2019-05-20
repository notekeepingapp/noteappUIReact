FROM node:8 as react-build
WORKDIR /frontendnoteapp
COPY package*.json ./frontendnoteapp/
RUN npm install
COPY ./ /frontendnoteapp
CMD [ "npm", "start" ]
EXPOSE 5052