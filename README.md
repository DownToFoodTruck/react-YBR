# DTFT

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Login to Vercel (one time):
   ```
   vercel login
   ```

3. Copy `.env.example` to `.env` and add your MongoDB URI:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```

## Development

```
npm run dev
```

Runs full stack (Vite + API routes) at http://localhost:3000

## Scripts

- `npm run dev` - Full stack (UI + API)
- `npm run dev:api` - Full stack (UI + API)
- `npm run dev:ui` - Frontend only (Vite)
- `npm run build` - Build for production
