var http = require('https')
var url = 'https://www.imooc.com/learn/348'

http.get(url, function(res){
  var html = ''

  res.on('data', function(data){
    html += data
  })

  res.on('end', function() {
    console.log(html)
  })
}).on('errpr', function() {
  console.log('error')
})