require("./module/db");

const employeeControler=require("./controllers/employeeControler")
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars');
const bodyparser = require('body-parser');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')


var app =express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/', handlebars: allowInsecurePrototypeAccess(Handlebars) }));
app.set('view engine', 'hbs');



app.listen(8000, ()=>{
    console.log("Express Server Started at Port : 8000");
});
app.get('/', (req, res) => {
    res.send('<h1>GET request to the homepage <a href="/employee">Click Here</a></h1>')
  })
app.use('/employee', employeeControler)