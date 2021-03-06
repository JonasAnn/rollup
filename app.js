
// Set the date we're counting down to
var countDownDate = new Date("Oct 11, 2020 17:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  function addZero(param){
    let value = param;
    if(`${param}`.length === 1){
        value = `0${param}`;
    }
    return value;
  }

  console.log(typeof addZero(hours))
    
  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = addZero(days);
document.getElementById("hrs").innerHTML =  addZero(hours);
document.getElementById("min").innerHTML = addZero(minutes);
document.getElementById("sec").innerHTML = addZero(seconds);
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


document.addEventListener("DOMContentLoaded", function(event) {
  setTimeout(function(){
    document.querySelector(".popup__area").classList.remove("toggle__hidden");
  }, 1000);
});

document.querySelector(".popup__close").addEventListener("click", () => {
  document.querySelector(".popup__area").classList.add("toggle__hidden");
})

