require('dotenv').config();
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const db = require("./db/index");


const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// INSERT A NEW EMPLOYEE DATA
app.post('/teacher', async (req, res) => {
    console.log(req.body);
    try {
        const { name, dept, salary } = req.body;
        const results = await db.query(
            "INSERT INTO teacher (name, dept, salary) VALUES ($1, $2, $3) returning *",
            [name, dept, salary]
        );
        console.log(results);
        res.status(201).json({
            status: "success",
            data: {
                employee: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});

// GET ALL EMPLOYEE DATA
app.get('/teacher', async (req, res) => {
    try {
        const employeedata = await db.query(
            "SELECT * FROM teacher;"
        );
        res.status(200).json({
            status: "success",
            results: employeedata.rows.length,
            data: {
                allemployee: employeedata.rows,
            },
        });
    } catch (err) {
        console.log(err);
    } 
});


// run express server
const port = process.env.PORT || 4001;
app.listen(port, () => {
    console.log(`app is running on port ${port}`);
}); 