var clock_hours = document.getElementById('hours');
var clock_minutes = document.getElementById('minutes');
var clock_seconds = document.getElementById('seconds');
var body = document.getElementsByTagName('body')[0];
var ampm = document.getElementById('ampm');
var displayColor = document.getElementById('hexColor');

function am() {
  var date = new Date();
  if(date.getHours < 12) {
    return true;
  } else {
    return false;
  }
}
function zgetHours() {
  var date = new Date();
  if(date.getHours() < 10) {
    return '0'+date.getHours();
  } else if(am() == false && date.getHours() > 12) {
    return '0'+(date.getHours()-12);
  }
  else {
    return date.getHours();
  }
}

function zgetMinutes() {
  var date = new Date();
  if(date.getMinutes() < 10) {
    return '0'+date.getMinutes();
  } else {
    return date.getMinutes();
  }
}

function zgetSeconds() {
  var date = new Date();
  if(date.getSeconds() < 10) {
    return '0'+date.getSeconds();
  } else {
    return date.getSeconds();
  }
}



window.setInterval(function() {
  clock_hours.innerHTML = zgetHours()+':';
  clock_minutes.innerHTML = zgetMinutes()+':';
  clock_seconds.innerHTML = zgetSeconds();
  if(am() == true) {
    ampm.innerHTML = 'AM';
  } else {
    ampm.innerHTML = 'PM';
  }
  body.style.backgroundColor = '#'+zgetHours()+zgetMinutes()+zgetSeconds();
  // hexColor.style.color = '#'+zgetHours()+zgetMinutes()+zgetSeconds();
  displayColor.innerHTML = '#'+zgetHours()+zgetMinutes()+zgetSeconds();
  /* Testing */
  // console.log('#'+zgetHours()+zgetMinutes()+zgetSeconds())
},1000);
