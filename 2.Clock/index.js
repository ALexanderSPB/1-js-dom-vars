var input = document.createElement("input");
var button = document.createElement("button");
var options = [];
document.body.appendChild(input);
document.body.appendChild(button);
button.setAttribute("class","button");
input.setAttribute("id","clockinput");
button.innerHTML = "Запускаем часы";
button.addEventListener("click",start);
function start(){
  window.setInterval(refreshClock,1000);
  var args = [];
  args = document.getElementById("clockinput").value.split(", [")
  if(args.length === 1 && args[0][0] ==="[") args[0]=args[0].slice(1,args[0].lenght);
  InitClock.apply(this,args);
}
function refreshClock(){
  document.body.innerHTML ="";
  console.log(options);
  if(options.length == 1 && options[0] === ""){ document.body.innerHTML = clock;}
  else{
  for(var i = 0; i < options.length; i++)
    switch (options[i]) {
      case "seconds": document.body.innerHTML = document.body.innerHTML+ clock.getSeconds() + " ";break;
      case "minutes": document.body.innerHTML = document.body.innerHTML+ clock.getMinutes() + " ";break;
      case "hours": document.body.innerHTML = document.body.innerHTML + clock.getHours() + " ";break;
      case "days":  document.body.innerHTML = document.body.innerHTML + clock.getDay() + " ";break;
      case "month":  document.body.innerHTML = document.body.innerHTML + clock.getMonth() + " ";break;
      case "year":  document.body.innerHTML = document.body.innerHTML + clock.getYear() + " ";break;
      default:
    }
}
    clock = new Date(clock.getTime()+1000) ;
}
function InitClock(){
  if ( arguments.length > 1 && eval(arguments[0]) instanceof Date) {
    clock = eval(arguments[0]);
    options = arguments[1].slice( 0,arguments[1].length-1).replace(/[''"‘’]/g,"").split(", ");
  }
  else if (eval(arguments[0]) instanceof Date){
    clock = eval(arguments[0]);
    options[0] = "";
  }
  else {
    clock = new Date();
    options = arguments[0].slice(0,arguments[0].length-1).replace(/[''"‘’]/g,"").split(", ");
  }
}
