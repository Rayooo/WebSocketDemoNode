/**
 * Created by Ray on 2017/2/4.
 */
var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(3000);

var userList = [];

io.on('connection', function (socket) {
    socket.emit('userList', userList);

    socket.on("name",function (data) {
        userList.push({
            name:data.name,
            id:socket.id
        });
        console.log(userList);
    });

    socket.on('disconnect', function(data){
        for(var i = userList.length - 1; i >= 0; i--) {
            if(userList[i].id === socket.id) {
                userList.splice(i, 1);
            }
        }
        console.log(userList);

    });
});