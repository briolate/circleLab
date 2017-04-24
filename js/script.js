function calcArea(){
  var circle = document.createElement('div');
  var radius = document.getElementById('radius').value;
  var area = Math.PI * (radius * 2);
  var totalArea = document.createElement('h2');
  totalArea.innerText = 'The area of your moon is ' + area.toFixed(2);
  circle.className = "circle";
  circle.style.width = radius * 2 +'px';
  circle.style.height = radius * 2 +'px';
  document.body.appendChild(totalArea);
  document.body.appendChild(circle);
}

function reload() {
    location.reload();
}

window.onload = function() {
    document.getElementById("my_audio").play();
}
