require('babel-core/register')({
    presets: ['es2015', 'react']
});

var express = require('express')
    , app = express()
    , React = require('react')
    , ReactDOM = require('react-dom/server')
    , components = require('./public/components/Components.jsx')

var HelloMessage = React.createFactory(components.HelloMessage)


app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
    res.render('index', {
        react: ReactDOM.renderToString(HelloMessage({name: "John"}))
    })
})

app.listen(3000, function() {
    console.log('Listening on port 3000...')
})