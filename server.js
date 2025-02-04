const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require("./routes/authRoutes");
const emailRoutes = require("./routes/emailRoutes");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/auth', authRoutes);
app.use('/email', emailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started running on PORT ${PORT}`));