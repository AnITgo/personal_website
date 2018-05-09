var c = 0

function print() {
  console.log(c)
}

function plus(callback) {
  setTimeout(function(){
    c++
    callback(c)
  },1000)
}

plus(print)
