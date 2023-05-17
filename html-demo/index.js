const express = require("express");
const nunjucks = require("nunjucks");

var app = express();

nunjucks.configure(["./src"], {
  autoescape: true,
  express: app,
});

app.set("view engine", "html");

const cookieParser = require("cookie-parser");
app.use(cookieParser());

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

var querystring = require("querystring");
const url = require("url");

const PORT = "3000";

app.get("/:component?", (req, res) => {
  const component = req.params.component;

  res.render('views/components', {component}, (err, html) => {
    if (err) {
      res.render("views/404.html", { error: err });
    } else {
      res.send(html);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
