#!/bin/bash

# Server Setup Script for Hostinger VPS
# Run this script as root on your VPS

echo "🔧 Setting up server for Simetrix application..."

# Update system
echo "📦 Updating system packages..."
apt update && apt upgrade -y

# Install Node.js
echo "📥 Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs

# Verify Node.js installation
echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"

# Install PM2 globally
echo "📥 Installing PM2..."
npm install -g pm2

# Install Nginx
echo "📥 Installing Nginx..."
apt install nginx -y

# Install PostgreSQL (optional - you can use external database)
echo "📥 Installing PostgreSQL..."
apt install postgresql postgresql-contrib -y

# Install Certbot for SSL
echo "📥 Installing Certbot..."
apt install certbot python3-certbot-nginx -y

# Configure firewall
echo "🔥 Configuring firewall..."
ufw allow ssh
ufw allow 'Nginx Full'
ufw --force enable

# Create application directory
echo "📁 Creating application directory..."
mkdir -p /var/www/simetrix
chown -R $SUDO_USER:$SUDO_USER /var/www/simetrix

# Create Nginx configuration
echo "⚙️ Creating Nginx configuration..."
cat > /etc/nginx/sites-available/simetrix << 'EOF'
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF

# Enable the site
ln -sf /etc/nginx/sites-available/simetrix /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
nginx -t

# Restart Nginx
systemctl restart nginx
systemctl enable nginx

echo "✅ Server setup completed!"
echo ""
echo "📋 Next steps:"
echo "1. Upload your application code to /var/www/simetrix"
echo "2. Create .env file with your environment variables"
echo "3. Run the deploy.sh script"
echo "4. Update the Nginx configuration with your actual domain"
echo "5. Get SSL certificate: certbot --nginx -d your-domain.com"
echo ""
echo "🔗 Useful commands:"
echo "- Check Nginx status: systemctl status nginx"
echo "- Check PM2 status: pm2 status"
echo "- View application logs: pm2 logs simetrix-app" 