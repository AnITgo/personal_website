var http = require('https')
var cheerio = require('cheerio')
var url = 'https://www.imooc.com/learn/348'
var baseUrl = 'https://www.imooc.com/learn/348'

var Promise = require('bluebird')

function filterChapters(html) {
  var $ = cheerio.load(html)
  var chapters = $('.course-chapters')
  var title = $('.hd clearfix')
/*
  title : '',
  number : '', 
  videos : [{
    chapterTitle: '',
    videos: [
      title: '',
      id:''
    ]
  }]*/
  var courseData = {
    videos:[],
    title:title
  }
  chapters.each(function(item) {
    var chapter = $(this)
    var chapterTitle = chapter.find('h3').text()
    var videos = chapter.find('.video').children('li')
    var chapterData = {
      chapterTitle : chapterTitle,
      videos:[]
    }
    videos.each(function(item){
      var video = $(this).find('.J-media-item')
      var videoTitle = video.text()
      var id = video.attr('href').split('video/')[1]
      chapterData.videos.push({
        title: videoTitle,
        id: id
      })
    })

    courseData.push(chapterData)
  })

  return courseData
}

function printCourseInfo(courseData) {
  courseData.forEach(function(item) {
    var chapterTitle = item.chapterTitle

    console.log(chapterTitle + '\n')

    item.videos.forEach(function(video){
        console.log('【'+ video.id + '】' + video.title + '\n')
    })
  })
}

function getPageAsync(url){
  return new Promise(function(resolve, reject){
    console.log('正在爬去' + url)

    http.get(url, function(res){
      var html = ''

      res.on('data', function(data){
        html += data
      })

      res.on('end', function() {
        resolve(html)
/*        var courseData = filterChapters(html)
        printCourseInfo(courseData)*/

        })
      }).on('errpr', function(e) {
        reject(e)
        console.log('error')
    })
  })
}

var fetchCourseArray = []

videoId.forEach(function(id){
  fetchCourseArray.push(getPageAsync(baseUrl + id))
})

Promise
  .all([
fetchCourseArray
    ]).then(function(pages){
    //
    var coursesData = []
     pages.forEach(function(html){
      var courses = filterChapters(html)

      courseData.push(courses)
     })
  })
