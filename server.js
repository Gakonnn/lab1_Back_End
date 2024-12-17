const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.send('hi');
});

app.get('/json', (req, res) => {
    res.json({ text: 'hi', numbers: [1, 2, 3] });
});

app.get('/echo', (req, res) => {
    const input = req.query.input || '';
    res.json({
        normal: input,
        shouty: input.toUpperCase(),
        charCount: input.length,
        backwards: input.split('').reverse().join(''),
    });
});

app.use('/static', express.static(path.join(__dirname, 'mychat')));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});