#!/bin/bash

# navigate to app folder
cd /home/app/

# install dependencies
npm install
npm run build

# deploy to Nginx public folder
cp -r build/* /usr/share/nginx/html

# install pm2 globally
npm install pm2 -g
