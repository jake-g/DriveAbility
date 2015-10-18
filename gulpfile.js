'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

gulp.task('app', function(callback) {
  var port = 9100;
  var config = require('./webpack.dev.js')(port);

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    stats: false,
  }).listen(port, 'localhost', function(err) {
    if (err) throw new gutil.PluginError('docs-error', err);
    gutil.log('app', 'http://localhost:' + port + '/app/');
  });
});

gulp.task('app-build', function(done) {
  var config = require('./webpack.prod.js')();
  webpack(config, function(err, stats) {
    if (err) throw new Error(err);
    done();
  });
});
