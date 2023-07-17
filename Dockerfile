FROM node:lts

WORKDIR /app 

RUN yarn global add nodemon ts-node


CMD ["npm", "run", "dev"]