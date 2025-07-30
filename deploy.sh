#!/bin/bash

# Deployment Script for Hostinger VPS
# Make sure to run this script from your project root

echo "🚀 Starting deployment process..."

# Check if .env file exists
if [ ! -f .env ]; then
    echo "❌ Error: .env file not found!"
    echo "Please create a .env file with your production environment variables."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install --production

# Build the application
echo "🔨 Building the application..."
npm run build

# Create logs directory if it doesn't exist
mkdir -p logs

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "📥 Installing PM2..."
    npm install -g pm2
fi

# Stop existing PM2 process if running
echo "🛑 Stopping existing PM2 processes..."
pm2 stop simetrix-app 2>/dev/null || true
pm2 delete simetrix-app 2>/dev/null || true

# Start the application with PM2
echo "▶️ Starting application with PM2..."
pm2 start ecosystem.config.js --env production

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# Setup PM2 startup script
echo "🔧 Setting up PM2 startup script..."
pm2 startup

echo "✅ Deployment completed successfully!"
echo "📊 Check application status with: pm2 status"
echo "📋 View logs with: pm2 logs simetrix-app"
echo "🌐 Your application should be running on port 3000" 