const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const indexRouter = require("./routes");

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(morgan("dev"));
app.use(express.json());

app.use("/api", indexRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
