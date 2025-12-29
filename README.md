# DTFT

## Setup

1. Copy `.env.example` to `.env` and add your credentials:
   ```
   MONGO_URI=your_mongodb_connection_string
   VERCEL_TOKEN=your_vercel_token
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Development

```
sudo npm start
```

Runs at http://localhost (port 80)

## Scripts

- `npm start` - Run full stack (Vite + Vercel API routes)
- `npm run dev` - Run Vite only (frontend)
- `npm run build` - Build for production
