var express = require('express');
var app = express();
var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({
    clientID: '99891f61c9f045e78fdb6255e10b1ac7',
    clientSecret: 'fe12841c94364704b71f6b45f6a8e624'
});
app.use(express.static('public'))


app.get('/', function(req, res){
    res.send("Hello world! by express");
});

//route for love in tracks, artists and albums
app.get('/searchLove', function (req, res) {
    getTracks('love', res);
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

async function getTracks(searchterm, res) {
    spotifyApi.searchTracks(searchterm)
    .then(function (data) {
        res.send(json.stringify(data.body));
    }, function (err) {
        console.error(err);
    });
}

app.listen(8080);