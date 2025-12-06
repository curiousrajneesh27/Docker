# Node.js Authentication API

A simple authentication API built with Node.js, Express, JWT, and bcryptjs.

## Features

- User Registration
- User Login with JWT tokens
- Protected routes with JWT authentication
- Password hashing with bcryptjs
- Docker support

## API Endpoints

### Public Routes

- `GET /` - Welcome message and API information
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login and get JWT token

### Protected Routes (Requires JWT Token)

- `GET /auth/profile` - Get user profile
- `GET /dashboard` - Access dashboard

## Getting Started

### Local Development

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file:

```bash
cp .env.example .env
```

3. Run the application:

```bash
npm start
```

Or for development with auto-reload:

```bash
npm run dev
```

### Docker Deployment

1. Build the Docker image:

```bash
docker build -t nodejs-auth-app .
```

2. Run the container:

```bash
docker run -p 3000:3000 -e JWT_SECRET=your-secret-key nodejs-auth-app
```

Or with environment variables:

```bash
docker run -p 3000:3000 --env-file .env nodejs-auth-app
```

## Usage Examples

### Register a new user

```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"john","email":"john@example.com","password":"password123"}'
```

### Login

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

### Access protected route

```bash
curl http://localhost:3000/auth/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment mode (development/production)
- `JWT_SECRET` - Secret key for JWT signing

## Security Notes

- Change the JWT_SECRET in production
- Use HTTPS in production
- Implement rate limiting
- Add input validation
- Use a proper database instead of in-memory storage
