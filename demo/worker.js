importScripts('../lib/audio.js', '../lib/jsfx.js')

var arrayToParams = function(pararr){
  var params = {};
  var len = jsfx.Parameters.length;
  for(var i = 0; i < len; i++){
      params[jsfx.Parameters[i].id] = pararr[i];
  }
  return params;
}

onmessage = function(e) {
  var data = jsfx.generate(this.arrayToParams(e.data));
  postMessage(audio.makeData64(data));
}
