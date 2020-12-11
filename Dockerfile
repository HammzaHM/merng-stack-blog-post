FROM node:12

# create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY package*.json ./

# If you are building your code for production
# RUN npm ci --only=production

RUN npm install


#bundle app source
COPY . .

EXPOSE 5000

# CMD which defines your runtime

CMD npm run start-dev


