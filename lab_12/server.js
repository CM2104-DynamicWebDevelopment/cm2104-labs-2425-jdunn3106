var express = require('express');
var app = express();
var SpotifyWebApi = require('spotify-web-api-node');
app.use(express.static('public'))

var spotifyApi = new SpotifyWebApi({
    clientID: '99891f61c9f045e78fdb6255e10b1ac7',
    clientSecret: 'fe12841c94364704b71f6b45f6a8e624'
});

app.get('/', function(req, res){
    res.send("Hello world! by express");
});

spotifyApi.clientCredentialsGrant().then(
    function(data) {
        console.log('The access token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);

        spotifyApi.setAccessToken(data.body['access_token']);
    },
    function(err) {
        console.log(
            'Something went wrong when retrieving an access token',
            err.message
        );
    }
);

app.listen(8080);