const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')
// MIDDLEWEARES
dotenv.config({ path: './config/config.env' })
require('./config/Db')
app.use(cors())
app.use(express.json())
app.use(morgan('dev')) // for logging
// ROUTES
app.use('/api/v1', require('./routes/posts'))
app.use('/api/v1', require('./routes/auth'))
app.use('/api/v1', require('./routes/features'))


// Allow specific origin(s)
app.use(cors({
  origin: 'https://fullstack-auth-app.vercel.app/api/v1'
}));
// Curb Cores Error by adding a header here
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });

  
  
PORT  = process.env.PORT || 5000
app.listen(PORT, console.log(`SERVER RUNNING ON PORT: ${PORT}`))