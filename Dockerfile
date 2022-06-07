FROM node:16.15-alpine
WORKDIR /finances-app
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]