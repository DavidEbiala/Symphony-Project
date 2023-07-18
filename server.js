const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

//  Import express-handlebars
const exphbs = require('express-handlebars')
//  create an instance of express-handlebars
const hbs = exphbs.create ({});


const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(express.static('develop'));
// setting Handlebars js as the default tamplate engine for the application
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get("/",(req,res)=>{
  res.render("name of the handlebars file");
})

sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
