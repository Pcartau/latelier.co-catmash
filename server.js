const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.download('./macosweb');
});


app.listen(PORT, () => {
  console.log('server listening');
});
