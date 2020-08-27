/**
Stop Watch function
**/
var Stopwatch = function(elem, options, callback = function(c){
  
}) {

  var timer       = createTimer(),
      startButton = createButton("start", startStop, "play", "play-pause"),
      resetButton = createButton("reset", reset, "stop", "reset"),
      offset,
      clock,
      interval;

  // default options
  options = options || {};
  options.delay = options.delay || 1;

  // append elements     
  elem.appendChild(timer);
  elem.appendChild(startButton);
  elem.appendChild(resetButton);

  // initialize
  reset();

  // create tiemr element and class timer
  function createTimer() {
    let time =  document.createElement("span")
    time.classList.add("timer")
    return time;
  }
  /**
  * action = the action
  * handler - fn
  * font-awesome icon without the 'fa'
  * cls - class to add to the new created element
  */
  function createButton(action, handler, ico = '', cls='') {
    var a = document.createElement("span");
    // a.href = "#" + action;
    if(cls) {
      a.classList.add(cls);
    }
    if(ico.length){
      a.innerHTML = `<i class="fa fa-${ico}"></i>`;
    }
    else {
      a.innerHTML = action;
    }
    a.addEventListener("click", function(event) {
      handler();
      event.preventDefault();
    });
    return a;
  }
  function startStop(){
    let curr = document.getElementsByClassName("play-pause")[0];
    if(curr.classList.contains("playing")) {
      pause();
      addCls(true)
    }else {
      start();
      addCls(false);
    }
  }
  
  function addCls(playing=true) {
    let curr = document.getElementsByClassName("play-pause")[0];
    if(playing) {
      curr.classList.remove("playing")
      curr.classList.add('paused');
      curr.innerHTML = `<i class="fa fa-play"></i>`;
      callback("pause")
    }
    else {
      curr.classList.remove("paused")
      curr.classList.add('playing');
      curr.innerHTML = `<i class="fa fa-pause"></i>`;
      callback("playing")
    }
  }
  
  function start() {
    addCls(false);
    if (!interval) {
      offset   = Date.now();
      interval = setInterval(update, options.delay);
    }
  }

  function pause() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }


  function reset() {
    startStop();
    clock = 0;
    render();
    callback("stop")
  }

  function update() {
    clock += delta();
    render();
  }

  function render() {
    timer.innerHTML = new Date(clock).toISOString().substr(11, 8)
  }

  function delta() {
    var now = Date.now(),
        d   = now - offset;

    offset = now;
    return d;
  }

  // public API
  this.start  = start;
  this.stop   = stop;
  this.reset  = reset;
};
