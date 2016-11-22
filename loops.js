var forLoop = (array) => {for(var i=0; i<25; i++) {array.push(`I am ${i} strange loop${i===1 ? '' : 's'}.`)}return array}

var whileLoop = (number) => {while(number > 0) {console.log(number--)} return "done"}

function maybeTrue() {
  return Math.random() >= 0.5
}

var doWhileLoop = (array) => {do{array.pop()} while (array.length < 0 || maybeTrue()) return array}
