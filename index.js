require("dotenv").config();
const express = require("express");
const app = express();

const clientRoutes = require("./Clients/Router/Router");
const cors = require("cors");


app.use(cors());
app.use(express.json());


app.use("/clients", clientRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
