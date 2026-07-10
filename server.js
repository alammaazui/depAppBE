const app = require("./app");
const sequelize = require("./config/db.config");
const User = require("./models/user.model");
require('dotenv').config()

const port = process.env.PORT; 

(async() =>{
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
      await User.sync({force :false});
      console.log('user model sync');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }

} )();


app.listen(port ,(err)=>{

    if (err){console.log(`${err.message}`)}
    else {console.log(`server is up at port${port}`)}
})