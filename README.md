# Bun + Node.js Hybrid Backend Project

This is a real-world backend project that leverages the speed of Bun for development while using Node.js for production deployment.

## Overview

- **Development**: Uses Bun for fast package installation, hot reloading, and running the application.
- **Production**: Uses Node.js for stable, production-ready deployment.
- **Architecture**: Modular structure with separation of concerns.

## Project Structure

```
src/
├── config/          # Configuration files (database, app settings)
├── constants/       # Application constants
├── controllers/     # Route handlers
├── middlewares/     # Express middlewares (auth, logging, etc.)
├── models/          # Database models
├── modules/         # Feature modules (user, auth, etc.)
├── routes/          # API routes
├── services/        # Business logic services
└── utils/           # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+
- Bun (for development)

### Installation

1. Install dependencies using Bun:
   ```bash
   bun install
   ```

2. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

3. Start development server:
   ```bash
   bun run dev
   ```

## Scripts

- `bun run dev`: Start development server with hot reloading
- `bun run build`: Build for production
- `bun run start`: Start production server (after build)
- `bun run test`: Run tests

## Deployment

For production, build the application and run with Node.js:

```bash
bun run build
bun run start
```

Or use the provided Dockerfile for containerized deployment.

## Why Hybrid?

- **Bun**: Faster development experience, quicker installs, built-in bundler.
- **Node.js**: Mature ecosystem, better production stability and monitoring tools.

This setup allows you to enjoy Bun's development benefits while maintaining Node.js compatibility for production.