#!/bin/bash

# navigate to app folder
cd /home/ec2-user/app/

# install dependencies
npm install
npm run build
cp -r build/* /var/www/html
npm install pm2 -g
