import express from 'express';
import { turso } from './api/turso_db.js';

const app = express();
const PORT = process.env.PORT ?? 8080;

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(PORT, console.log(`Server running on ${PORT}`));