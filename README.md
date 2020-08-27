# stop-watch
Simple javascript stop watch with start/pause/stop
https://codepen.io/emuigai/pen/MWymEpK?editors=1111

```
var c = document.getElementById("stop-watch");  

cTimer = new Stopwatch(c, {delay: 100}, function(option){  

   console.log('option', option)  
 
});  

cTimer.start();
```
