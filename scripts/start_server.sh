#!/bin/bash

# navigate to app folder
#cd /home/app/

# initial startup by running react-script "start", name process "marketing"
# --watch watches and restarts if files change
#npm start

# install pm2 globally
#npm install pm2 -g

# start the app with pm2
#pm2 start npm --name "marketing" -- start
#pm2 startup
#pm2 save
#pm2 restart all

# enable and start nginx service
systemctl enable nginx
systemctl start nginx
