const express = require("express");
const app = express();

const path = require('path');
const PORT = process.env.PORT || 8081;

const cors = require("cors");
const corsOptions = process.env.NODE_ENV === 'production'
  ? ['https://avemaria.acm.org']  // Production domain
  : ['http://localhost:5173'];  // Vite dev server

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get("/api", (req, res) => {
  res.json({fruits: ["apple", "orange", "banana"]});
})

app.listen(PORT, () => {
  console.log("Server running...")
})
