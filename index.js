// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialise the app
let app = express();

// Import routes
let apiRoutes = require('./api-routes');
// Configure bodyparser to handle post requests
let swaggerUi = require('swagger-ui-express');
let swaggerDocument = require('./swagger.json');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable

//mongoose.connect('mongodb://192.168.99.100:32768/museum_db', { useNewUrlParser: true});

var mongo_host = (process.env.MONGO_SERVICE_HOST || 'localhost' );
var mongo_port = (process.env.MONGO_SERVICE_PORT || 27017 );
var url = 'mongodb://'+mongo_host+':'+mongo_port+'/museum_db';

mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true})
    .then(() => console.log("Connected to Database"+"____"+url))
    .catch(err => console.error("Error connecting db", err + url));

var db = mongoose.connection;

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL

app.get('/', (req, res) => res.send('Hello World with Express UXsers'));

// Use Api routes in the App
app.use('/api-docs/usuarios', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api', apiRoutes);
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("* Running exacta_ServerUser on port " + port);
});
