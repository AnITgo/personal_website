var http = require('https')

var querystring = require('querystring')

var postData = querystring.stringify({
  'content': '讲得真不错！',
  'mid' : 6687
})

var options = {
  hostname : 'www.imooc.com',
  port: 443,
  path: '/course/document',
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Content-Length':postData.length,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie': 'imooc_uuid=a49a4ab9-662b-47c9-ba0a-cd8931d01380; imooc_isnew_ct=1499822639; imooc_isnew=2; cninfo=bdqdkj-3cdcd22936839af2fc9fdc6c228f0f98; PHPSESSID=7kl7b7es8gig6m16miq0d0nau6; IMCDNS=0; last_login_username=yulong_yang%40tju.edu.cn; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1525791078,1525791083,1525875272,1525908765; loginstate=1; apsid=FjYTQ5OGUzZTZhMDI4YmNlMzA2MTE5ODViZTdhNDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANjY5NTY5NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGY4MDRlMDYyOTJhOGI3Njg5MTU5NGMwZTM3ZjhjMDU1UIXzWgAAAAA%3DND; mc_channel=syb6; mc_marking=b587280c0c1c0e76c1092aa21406565a; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1525908882; cvde=5ae33533c7df4-278',
    'Host': 'www.imooc.com',
    'Origin': 'https://www.imooc.com',
    'Referer': 'https://www.imooc.com/video/6687',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest'
  }
}

var req = http.request(options, function(res){
  console.log('Status ' + res.statusCode)
  console.log('headers' + JSON.stringify(res.headers))

  res.on('data', function(chunk){
    console.log(Buffer.isBuffer(chunk))
    console.log(typeof chunk)
  })

  res.on('end', function(){
    console.log('评论完事')
  })
})

req.on('error', function(e){
    console.log('Error'+ e.message)
  })

req.write(postData)

req.end()

  