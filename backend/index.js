const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;