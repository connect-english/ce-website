#!/bin/bash

sudo chmod -R 777 /home/ec2-user/react-app


cd /home/ec2-user/react-app


export NVM_DIR="$HOME/.nvm"	
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  


npm install

npm run build > build.out.log 2> build.err.log < /dev/null &
npm run dev > dev.out.log 2> dev.err.log < /dev/null &
