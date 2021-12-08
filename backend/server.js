const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const cors = require("cors");

const userRoutes = require("./routes/userRoutes")

dotenv.config();
const app = express();

const mongoose = require("mongoose");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware.js");
mongoose
  .connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((conn) => console.log("mongoose running", conn.connection.host))
  .catch((err) => console.log("mongoose ERROR", err));

app.use(express.json({ extended: true }));
app.use(cors());

app.use("/api/users", userRoutes )

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Running on ${PORT}`));
