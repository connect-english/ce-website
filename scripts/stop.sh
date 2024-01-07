#!/bin/bash
echo "Stopping any existing node servers"
pkill -f "npm run build"
pkill -f "npm run dev"
