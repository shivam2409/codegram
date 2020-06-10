const express = require('express');
const app = express();
const connectDB = require('./config/database');
const path = require('path');

//Connect Database
connectDB();

//Initialize middleware
app.use(express.json({ extended: false }));

//connecting Express
// app.get('/', (req, res) => res.send('API Running'));

//Define routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/posts', require('./routes/posts'));

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //set static foulder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 2001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
