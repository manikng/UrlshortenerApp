//to use nodemon to start server automatically 
//npm install nodemon --save-dev  //dev dependency
// npx nodemon index.js
import express from 'express';
import db from './connection.js';
const { dbConnection } = db;
import urlRouter from './routes/url.js';

const app = express();
const port = 8000;

// Add this route to handle GET requests to the root URL
app.get("/", (req, res) => {
    res.send("Welcome to the URL Shortener Service");
});

//connection return promise then catch
dbConnection("mongodb://127.0.0.1:27017/url-shortner")
    .then(() => { console.log("DB connected successfully"); })
    .catch((err) => { console.log(err); });

app.use("/url", urlRouter);

app.listen(port, () => { console.log(`Server is running on port ${port}`); });
