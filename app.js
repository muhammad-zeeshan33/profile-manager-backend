
const express = require('express');
const cors = require('cors'); // Import the cors module
const app = express();
const config = require('./config/enviroments.dev');
const sequelize = require('./db/connection');

const appRoutes = require('./appRoutes');

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/api', appRoutes);

sequelize.authenticate().then(() => {
    app.listen(config.port, () => {
        console.log(`Server is running on port ${config.port}`);
    });    
})
.catch(err => {
    console.log(err);
});



