# stop-watch
Simple javascript stop watch with start/pause/stop


```
var c = document.getElementById("stop-watch");  

cTimer = new Stopwatch(c, {delay: 100}, function(option){  

   console.log('option', option)  
 
});  

cTimer.start();
```
