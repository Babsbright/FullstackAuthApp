// const express = require('express')
// const app = express()
// const dotenv = require('dotenv')
// const cors = require('cors')
// const morgan = require('morgan')
// // MIDDLEWEARES
// dotenv.config({ path: './config/config.env' })
// require('./config/Db')
// app.use(cors())
// app.use(express.json())
// app.use(morgan('dev')) // for logging
// // ROUTES
// app.use('/api/v1', require('./routes/auth'))


// // Allow specific origin(s)
// app.use(cors({
//   origin: 'https://fullstack-auth-app.vercel.app/api/v1'
// }));
// // Curb Cores Error by adding a header here
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
//     );
//     res.setHeader(
//       "Access-Control-Allow-Methods",
//       "GET, POST, PUT, DELETE, PATCH, OPTIONS"
//     );
//     next();
//   });

  
  
// PORT  = process.env.PORT || 5000
// app.listen(PORT, console.log(`SERVER RUNNING ON PORT: ${PORT}`))


const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')

// MIDDLEWARE CONFIGURATION
dotenv.config({ path: './config/config.env' })
require('./config/Db')

// CORS Configuration - MUST come BEFORE routes
const corsOptions = {
  origin: [
    'https://fullstack-auth-app-frontend.vercel.app',
    'http://localhost:3000', // for local development
    'http://localhost:5173'  // if using Vite
  ],
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization']
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(morgan('dev'))

// ROUTES - Must come AFTER CORS middleware
app.use('/api/v1', require('./routes/auth'))

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT: ${PORT}`))