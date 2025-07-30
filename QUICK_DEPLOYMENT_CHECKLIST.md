# Quick Deployment Checklist - Simetrix

## 🚀 **PRE-DEPLOYMENT**

### **Local Testing** ✅ COMPLETED
- [x] Dependencies installed
- [x] Development server running
- [x] API endpoints tested
- [x] Build process verified
- [x] Cross-platform compatibility fixed

## 📋 **HOSTINGER VPS DEPLOYMENT**

### **Step 1: Server Setup**
```bash
# Connect to your VPS
ssh root@your-server-ip

# Run server setup
chmod +x server-setup.sh
sudo ./server-setup.sh
```

### **Step 2: Database Setup**
**Option A: External Database (Recommended)**
- Sign up for [Neon](https://neon.tech) or [Supabase](https://supabase.com)
- Get PostgreSQL connection string
- Format: `postgresql://username:password@host:port/database_name`

**Option B: Local PostgreSQL**
```bash
sudo -u postgres createuser --interactive
sudo -u postgres createdb simetrix_db
```

### **Step 3: Upload & Deploy**
```bash
# Upload your code to /var/www/simetrix
# Create .env file with:
NODE_ENV=production
PORT=3000
DATABASE_URL=your_postgresql_connection_string
SESSION_SECRET=your-super-secret-key

# Run deployment
chmod +x deploy.sh
./deploy.sh
```

### **Step 4: Domain & SSL**
```bash
# Update Nginx config with your domain
nano /etc/nginx/sites-available/simetrix

# Get SSL certificate
certbot --nginx -d your-domain.com
```

## 🔧 **VERIFICATION**

### **Check Application Status**
```bash
pm2 status
pm2 logs simetrix-app
```

### **Test Endpoints**
```bash
curl http://your-domain.com/api/blog
curl http://your-domain.com/api/case-studies
curl http://your-domain.com/api/testimonials
```

## 🛠️ **TROUBLESHOOTING**

### **Common Issues**
1. **Port 3000 not accessible**: Check firewall settings
2. **Database connection failed**: Verify DATABASE_URL
3. **Nginx 502 error**: Check if PM2 process is running
4. **Permission denied**: Check file ownership

### **Useful Commands**
```bash
# Check processes
pm2 status
ps aux | grep node

# Check logs
pm2 logs simetrix-app
tail -f /var/log/nginx/error.log

# Restart services
pm2 restart simetrix-app
systemctl restart nginx
```

## 📞 **SUPPORT**

If you encounter issues:
1. Check the detailed deployment guide: `deployment-guide.md`
2. Review test results: `DEPLOYMENT_TEST_RESULTS.md`
3. Check server logs for specific error messages

**Estimated Time**: 30-60 minutes
**Difficulty**: Intermediate 