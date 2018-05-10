var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

life.setMaxListeners(11)

function water(who){
  console.log('给' + who + '倒水')
}

life.on('求安慰',water)
life.on('求安慰',function(who){
  console.log('给' + who + '揉肩')
})
life.on('求安慰',function(who){
  console.log('给' + who + '倒水')
})
life.on('求安慰',function(who){
  console.log('给' + who + '倒水')
})
life.on('求安慰',function(who){
  console.log('给' + who + '倒水')
})
life.on('求安慰',function(who){
  console.log('给' + who + '6')
})
life.on('求安慰',function(who){
  console.log('给' + who + '7')
})
life.on('求安慰',function(who){
  console.log('给' + who + '8')
})
life.on('求安慰',function(who){
  console.log('给' + who + '9')
})
life.on('求安慰',function(who){
  console.log('给' + who + '10')
})
life.on('求安慰',function(who){
  console.log('给' + who + 'lei')
})

life.removeListener('求安慰', water)
life.removeAllListeners('求安慰') //若不参入参数，全删除

var hasConfortListener = life.emit('求安慰','帅哥')

console.log(hasConfortListener)
console.log(life.listeners('求安慰').length)
console.log(EventEmitter.listenerCount(life,'求安慰'))