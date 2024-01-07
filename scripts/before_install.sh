#!/bin/bash

# navigate to app folder
cd /home/app/

# install node and npm
yum install curl -y
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo -E bash -
yum install nodejs -y
yum install npm -y

# install nginx and allow HTTP traffic
yum install nginx -y
systemctl start nginx
systemctl enable nginx
firewall-cmd --permanent --add-service=http
firewall-cmd --reload
