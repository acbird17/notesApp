const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;

const app = express();

const api = require("./routes/apiRoute");
const html = require("./routes/htmlRoute");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", api);
app.use("/", html);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`);
});
