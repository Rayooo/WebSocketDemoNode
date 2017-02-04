/**
 * Created by Ray on 2017/2/4.
 */
var app = require("express")();

app.listen(3000);

app.get('/', function (req, res) {
    res.send('Hello world\n');
});
