const express  = require('express')
require('dotenv').config(); 

const app = express();
const TokenRoute = require("./routes/token");

app.use(express.json())
app.listen(5000, () => {
    console.log('server runs smoothly on port 5000')
})

app.get("/", (req,res) => {
    res.send("M-pesa Daraja integration in progress")
})

app.use("/token",TokenRoute )