import express from 'express';
import fs from 'fs';
import { run } from './fetchData';

const app = express();
const port = process.env.PORT || 3001;

app.get('/api/getnodewatchdata', async (req, res) => {
    const { fetch } = req.query;

    if (fetch) await run();

    fs.readFile('../nextjs-clone/app/data/nodewatch.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).json({ error: 'Failed to read data file' });
            return;
        }

        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).json({ error: 'Failed to parse JSON data' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});