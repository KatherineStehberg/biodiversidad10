
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRouter = require("./routes/auth");
const pageRouter = require("./routes/pages"); 
const projectRouter = require("./routes/projects");
const userRouter = require("./routes/users"); 
const serviceRouter = require("./routes/services");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api/auth", authRouter);
app.use("/api/pages", pageRouter);
app.use("/api/projects", projectRouter);
app.use("/api/users", userRouter); 
app.use("/api/services", serviceRouter)

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});

module.exports = app;
