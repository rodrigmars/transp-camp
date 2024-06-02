const express = require('express')();

const app = express();

const cors = require('cors');

app.listen(3000, () => console.log("Server runnning"));

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(express.json());

app.get("/", (req, res) => {

    res.status(200).send("Something broke!");

});

// 200 (OK)
// 201 (Created)
// 202 (Accepted)
// 204 (No Content)
// 301 (Moved Permanently)

// 400 (Bad Request)
// 401 (Unauthorized)
// 404 (Not Found)
// 405 (Method Not Allowed)


// Access-Control-Allow-Origin: http://localhost:3000/

// Access-Control-Allow-Origin: *