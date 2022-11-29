const express = require('express')
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
const PORT = process.env.PORT;
const email = require('./js/email.js');


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

//global
//que si no da error
const corsConfig = {
    credentials: true,
    origin: true,
};
app.use(cors(corsConfig));
//end of global


email.runEmail(app).then()

app.get('/', async function (req, res) {
  res.send('security emails')
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
