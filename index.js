const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets
app.use(express.static(path.join(__dirname, 'resources')));

// Set up Handlebars
app.engine('hbs', exphbs.engine({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => res.render('pages/home'));
app.get('/hobbies', (req, res) => res.render('pages/hobbies'));
app.get('/projects', (req, res) => res.render('pages/projects'));
app.get('/resume', (req, res) => res.render('pages/resume'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
