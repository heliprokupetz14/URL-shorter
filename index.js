const express = require("express");
const connectDB = require('./config/db');

const app = express();

//connect to DB
connectDB();

app.use(express.json());

// Defult routes
app.use('/', require('./routes/index'));
app.use('/api/url' , require('./routes/url'));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});
