import express from 'express';
import api from '../routes/api';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Image Converter</h1>');
});

app.use('/api', api);

app.listen(port, () => {
    console.log(`Server is running on "http://localhost:${port}"`);
});

export default app;
