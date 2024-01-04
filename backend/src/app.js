const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const githubRoutes = require("./routes/githubRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors()); // Enable CORS
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/github", githubRoutes);

app.get("/", (request, response) => {
  response.json({ info: "Node-expess server is running" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
