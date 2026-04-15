const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors") 
const app = express();
const connectDB = require("./config/db");

dotenv.config();

app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 5000

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})