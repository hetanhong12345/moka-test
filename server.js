/**
 * Created by hekk on 2017/5/19.
 */
var path = require('path');
var express = require('express');
var app = express();
app.use(express.static(path.resolve('./dist')));
var port = 3100;
app.get("/", function (req, res) {
  res.sendFile(path.resolve('./html/index.html'))
})
app.get('*')
app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {

    console.info("==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});