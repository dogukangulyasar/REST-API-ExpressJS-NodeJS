import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;
const jsonParser = bodyParser.json();
app.get('/', (req,res) => {
    res.send('Hello from home page');
});
app.use(express.json()); //Getting the post request body.
app.use('/users', usersRoutes);

app.listen(PORT, () => {
    console.log(`Server Running on port: http://localhost:${PORT}`)
});