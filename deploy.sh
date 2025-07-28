#!/bin/bash

# Production Deployment Script
# Make sure you have a .env file with your Firebase configuration

echo "Starting deployment..."

# Check if .env file exists
if [ ! -f .env ]; then
    echo "Error: .env file not found!"
    echo "Please create a .env file with your Firebase configuration."
    exit 1
fi

# Build and run with Docker Compose
docker-compose up --build -d

echo "Application deployed successfully!" 