const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const apiRoute = require("./routes/apiRoute");
const htmlRoute = require("./routes/htmlRoute");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoute);
app.use("/", htmlRoute);

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`);
});
