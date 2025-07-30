# Deployment Guide - Simetrix Website

## Prerequisites
- Hostinger VPS or Cloud hosting plan
- SSH access to your server
- Domain name (optional but recommended)

## Step 1: Prepare Your Application

### 1.1 Build the Application
```bash
# Install dependencies
npm install

# Build the application
npm run build
```

### 1.2 Environment Variables
Create a `.env` file in your project root:
```env
NODE_ENV=production
PORT=3000
DATABASE_URL=your_postgresql_connection_string
SESSION_SECRET=your_session_secret_key
```

### 1.3 Database Setup
You'll need a PostgreSQL database. Options:
- Use Hostinger's PostgreSQL hosting (if available)
- Use external services like Neon, Supabase, or Railway
- Set up PostgreSQL on your VPS

## Step 2: Server Setup

### 2.1 Connect to Your VPS
```bash
ssh root@your-server-ip
```

### 2.2 Update System
```bash
apt update && apt upgrade -y
```

### 2.3 Install Node.js
```bash
# Install Node.js 18+ (LTS)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

### 2.4 Install PostgreSQL (if using local database)
```bash
apt install postgresql postgresql-contrib -y
sudo -u postgres createuser --interactive
sudo -u postgres createdb your_database_name
```

### 2.5 Install PM2 (Process Manager)
```bash
npm install -g pm2
```

### 2.6 Install Nginx (Reverse Proxy)
```bash
apt install nginx -y
```

## Step 3: Deploy Your Application

### 3.1 Upload Your Code
```bash
# Option 1: Git clone (recommended)
git clone your-repository-url
cd your-project-name

# Option 2: Upload via SFTP/SCP
# Use FileZilla or similar tool to upload files
```

### 3.2 Install Dependencies
```bash
npm install --production
```

### 3.3 Set Environment Variables
```bash
# Create .env file
nano .env
# Add your environment variables here
```

### 3.4 Build the Application
```bash
npm run build
```

### 3.5 Start with PM2
```bash
# Create PM2 ecosystem file
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: 'your-app-name',
    script: 'dist/index.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
EOF

# Start the application
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## Step 4: Configure Nginx

### 4.1 Create Nginx Configuration
```bash
nano /etc/nginx/sites-available/your-app
```

Add this configuration:
```nginx
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
}
```

### 4.2 Enable the Site
```bash
ln -s /etc/nginx/sites-available/your-app /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

## Step 5: SSL Certificate (Optional but Recommended)

### 5.1 Install Certbot
```bash
apt install certbot python3-certbot-nginx -y
```

### 5.2 Get SSL Certificate
```bash
certbot --nginx -d your-domain.com -d www.your-domain.com
```

## Step 6: Database Migration

### 6.1 Run Database Migrations
```bash
npm run db:push
```

## Step 7: Monitoring and Maintenance

### 7.1 PM2 Commands
```bash
# View logs
pm2 logs

# Monitor processes
pm2 monit

# Restart application
pm2 restart your-app-name

# Stop application
pm2 stop your-app-name
```

### 7.2 Nginx Commands
```bash
# Test configuration
nginx -t

# Reload configuration
systemctl reload nginx

# Restart nginx
systemctl restart nginx
```

## Troubleshooting

### Common Issues:

1. **Port already in use**
   ```bash
   netstat -tulpn | grep :3000
   kill -9 <PID>
   ```

2. **Permission denied**
   ```bash
   chown -R $USER:$USER /path/to/your/app
   ```

3. **Database connection issues**
   - Check DATABASE_URL in .env
   - Verify database is running
   - Check firewall settings

4. **Nginx 502 Bad Gateway**
   - Check if Node.js app is running: `pm2 status`
   - Check app logs: `pm2 logs`
   - Verify port configuration

## Security Considerations

1. **Firewall Setup**
   ```bash
   ufw allow ssh
   ufw allow 'Nginx Full'
   ufw enable
   ```

2. **Regular Updates**
   ```bash
   # Update system packages
   apt update && apt upgrade -y
   
   # Update Node.js dependencies
   npm update
   ```

3. **Backup Strategy**
   - Regular database backups
   - Code repository backup
   - Configuration files backup

## Performance Optimization

1. **Enable Gzip Compression**
   Add to nginx config:
   ```nginx
   gzip on;
   gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
   ```

2. **PM2 Clustering**
   ```bash
   pm2 start ecosystem.config.js -i max
   ```

3. **Nginx Caching**
   Add to nginx config:
   ```nginx
   location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
       expires 1y;
       add_header Cache-Control "public, immutable";
   }
   ``` 