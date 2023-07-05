const express = require("express");
const errorHnadler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();
connectDB();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/contacts", require("../mycontacts-backend/routes/contactRoutes"));
app.use("/api/users", require("../mycontacts-backend/routes/userRoutes"));
app.use(errorHnadler);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
