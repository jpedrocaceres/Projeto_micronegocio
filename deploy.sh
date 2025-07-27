#!/bin/bash

# Production Deployment Script
# Set your Firebase environment variables here for production

export NEXT_PUBLIC_FIREBASE_API_KEY="your_production_api_key"
export NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your_project.firebaseapp.com"
export NEXT_PUBLIC_FIREBASE_PROJECT_ID="your_project_id"
export NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your_project.appspot.com"
export NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="123456789"
export NEXT_PUBLIC_FIREBASE_APP_ID="your_app_id"
export NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="your_measurement_id"

# Build and run with Docker Compose
docker-compose up --build -d

echo "Application deployed successfully!" 