let express = require('express')
let app = express()
let path = require('path')

app.use(express.static(path.join(__dirname)));
// app.use("/Bootstrap", express.static(__dirname + '/Bootstrap'));
// app.use("/CSSandJS", express.static(__dirname + '/CSSandJS'));
// app.use("/Images", express.static(__dirname + '/Images'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + 'index.html'))
})

app.listen(process.env.PORT || 3002)