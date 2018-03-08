

for (var i = 0; i <= height/2; i = i + 10) {
  var startX = width/2+i;
  var startY = i;
  var endX = width/2-i;
	var endY = i;
  line(startX, startY, endX, endY);
}
for (var i = 0; i <= height/2; i = i + 10) {
  var startX = width/2+i;
  var startY = height-i;
  var endX = width/2-i;
  var endY = height-i;
  line(startX, startY, endX, endY);
}
