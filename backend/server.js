const express = require("express");
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const connectDB = require("./config/db");

// Connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to support desk API" });
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/tickets", ticketRoutes);

app.use(errorHandler);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server is running on ${port}`));
