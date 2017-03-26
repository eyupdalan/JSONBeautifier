var express = require('express');
var webpack = require('webpack');
var path = require('path');
var config = require('../webpack.config');
var configProd = require('../webpack.config.prod');
var open = require('open');

const port = 3000;
const app = express();
const compiler = webpack(configProd);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

//app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});


app.listen(process.env.PORT || port, function (err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});

