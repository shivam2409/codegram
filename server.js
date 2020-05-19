const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 2001;

app.listen(PORT, () => console.log(`Server srarted on port ${PORT}`));
