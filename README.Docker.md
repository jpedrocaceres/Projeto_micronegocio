# Docker Setup for BizManager (Next.js + Supabase)

This project is configured to run with Docker for both development and production environments.

## Prerequisites

- Docker and Docker Compose installed
- Supabase project set up
- Environment variables configured

## Environment Variables

Create a `.env` file in the root directory with your Supabase configuration:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

## Development

### Quick Start (Development)
```bash
# Start development environment
docker-compose -f compose.dev.yaml up

# Or build and start
docker-compose -f compose.dev.yaml up --build
```

### Development Features
- Hot reload enabled
- Source code mounted as volume
- Development server on port 3000
- Optional local PostgreSQL database

## Production

### Quick Start (Production)
```bash
# Deploy to production
./deploy.sh

# Or manually
docker-compose up --build -d
```

### Production Features
- Optimized Next.js build
- Health checks enabled
- Automatic restarts
- Production environment variables

## Docker Commands

### Development
```bash
# Start development
docker-compose -f compose.dev.yaml up

# Start in background
docker-compose -f compose.dev.yaml up -d

# View logs
docker-compose -f compose.dev.yaml logs -f web-dev

# Stop development
docker-compose -f compose.dev.yaml down
```

### Production
```bash
# Start production
docker-compose up -d

# View logs
docker-compose logs -f web

# Stop production
docker-compose down

# Rebuild and restart
docker-compose up --build -d
```

### General Commands
```bash
# View running containers
docker ps

# Access container shell
docker exec -it bizmanager-web-1 sh

# View container logs
docker logs bizmanager-web-1

# Clean up unused resources
docker system prune
```

## Health Checks

The application includes health checks:

- **Health endpoint**: `http://localhost:3000/api/health`
- **Docker health check**: Monitors application status
- **Manual check**: `curl http://localhost:3000/api/health`

## Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Check what's using port 3000
   lsof -i :3000
   
   # Stop existing containers
   docker-compose down
   ```

2. **Environment variables not loaded**
   ```bash
   # Check if .env file exists
   ls -la .env
   
   # Verify environment variables
   docker-compose config
   ```

3. **Build fails**
   ```bash
   # Clean Docker cache
   docker system prune -a
   
   # Rebuild without cache
   docker-compose build --no-cache
   ```

4. **Container won't start**
   ```bash
   # Check logs
   docker-compose logs web
   
   # Check health status
   docker ps
   ```

### Performance Optimization

1. **Use .dockerignore** - Excludes unnecessary files from build context
2. **Multi-stage builds** - Optimizes image size
3. **Volume mounting** - Faster development builds
4. **Health checks** - Ensures application availability

## File Structure

```
├── Dockerfile              # Production Docker configuration
├── compose.yaml            # Production Docker Compose
├── compose.dev.yaml        # Development Docker Compose
├── .dockerignore           # Files to exclude from build
├── deploy.sh              # Deployment script
└── app/api/health/        # Health check endpoint
```

## Next Steps

1. Set up your Supabase project
2. Configure environment variables
3. Run `./deploy.sh` for production
4. Or use `docker-compose -f compose.dev.yaml up` for development

## Support

For issues related to:
- **Docker**: Check Docker documentation
- **Next.js**: Check Next.js documentation
- **Supabase**: Check Supabase documentation
- **Project-specific**: Check the main README.md