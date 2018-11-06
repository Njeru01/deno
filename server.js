const EXPRESS = require('express');
const APP= EXPRESS();
const PORT= 2998;
const Employer= require('./Employer.js');

console.log("Employer");
//configure app to accept get requests

APP.use(EXPRESS.static("test"));

APP.listen(PORT, function(){
  console.log("Server listening on "+PORT);
});
