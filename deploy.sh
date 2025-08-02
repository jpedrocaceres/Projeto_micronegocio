#!/bin/bash

# Production Deployment Script for Next.js + Supabase
# Make sure you have a .env file with your Supabase configuration

echo "🚀 Starting BizManager deployment..."

# Check if .env file exists
if [ ! -f .env ]; then
    echo "❌ Error: .env file not found!"
    echo "Please create a .env file with your Supabase configuration:"
    echo "  NEXT_PUBLIC_SUPABASE_URL=your_supabase_url"
    echo "  NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key"
    echo "  SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key"
    exit 1
fi

# Check if required environment variables are set
source .env

if [ -z "$NEXT_PUBLIC_SUPABASE_URL" ] || [ -z "$NEXT_PUBLIC_SUPABASE_ANON_KEY" ]; then
    echo "❌ Error: Missing required Supabase environment variables!"
    echo "Please check your .env file contains:"
    echo "  NEXT_PUBLIC_SUPABASE_URL"
    echo "  NEXT_PUBLIC_SUPABASE_ANON_KEY"
    exit 1
fi

echo "✅ Environment variables validated"

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose down

# Build and run with Docker Compose
echo "🔨 Building and starting containers..."
docker-compose up --build -d

# Wait for health check
echo "⏳ Waiting for application to be ready..."
sleep 10

# Check if the application is running
if curl -f http://localhost:3000/api/health > /dev/null 2>&1; then
    echo "✅ Application deployed successfully!"
    echo "🌐 Your app is running at: http://localhost:3000"
    echo "📊 Health check: http://localhost:3000/api/health"
else
    echo "⚠️  Application may still be starting up..."
    echo "🔍 Check logs with: docker-compose logs -f web"
fi 