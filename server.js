const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const app = express();

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to XML Edit." });
});
require('./app/routes/Routes')(app, '/api');

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`API rodando em porta http://localhost:${PORT}`);
});