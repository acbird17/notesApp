const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const api = require("./routes/apiRoute");
const html = require("./routes/htmlRoute");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", api);
app.use("/", html);

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`);
});
