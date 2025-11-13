require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./src/routes/auth');
const jobRoutes = require('./src/routes/jobs');
const appRoutes = require('./src/routes/applications');
const parserRoutes = require('./src/routes/parser');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', appRoutes);
app.use('/api/parser', parserRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true})
  .then(()=>{
    console.log('MongoDB connected');
    app.listen(PORT, ()=> console.log('Server running on', PORT));
  })
  .catch(err=> console.error(err));
