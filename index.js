const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();

const appDir = path.resolve();

app.engine("hbs", exphbs.engine({
  extname: "hbs",
  defaultLayout: "main",
  layoutsDir: path.join(appDir, "views/layouts"),
}));
app.set("view engine", "hbs");
app.set("views", path.join(appDir, "views"));

app.use(express.static(path.join(appDir, "public")));

// Routes
app.get('/', (req, res) => res.render('pages/home'));
app.get('/hobbies', (req, res) => res.render('pages/hobbies'));
app.get('/projects', (req, res) => res.render('pages/projects'));
app.get('/resume', (req, res) => res.render('pages/resume'));

// Export the app for Vercel serverless
module.exports = app;
