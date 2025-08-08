# payX

A full-stack fintech web application enabling secure money transfers, real-time transaction history, balance tracking, and user authentication.

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Auti29/payX.git
   cd payX
   ```

2. **Install dependencies**

   ```bash
   # Install server dependencies
   cd backend
   npm install

   # Install client dependencies
   cd ../frontend
   npm install
   ```

3. **Set environment variables**  
   Create a `.env` file in both `server` and `client` directories with the following:

   ```
   # Server
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000

   # Client
   VITE_API_URL=http://localhost:5000
   ```

4. **Run the application in dev mode**

   ```bash

   # Run server
   cd backend
   npm run dev


   # Run client
   cd ../frontend
   npm run dev
   ```
