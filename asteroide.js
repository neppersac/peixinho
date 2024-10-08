var canvas = document.getElementById("asteroids");
 var context = canvas.getContext("2d");
 context.strokeStyle = 'lightgrey';
 context.fillStyle = 'dimgrey';
 context.lineWidth = 5;
 context.rect(75, 50, canvas.width - 150, canvas.height - 100);
 context.stroke();
 context.fill();
 context.font = "34px Arial";
 context.strokeStyle = '#FF2222';
 context.fillStyle = '#FFAAAA';
 context.lineWidth = 0.75;
 context.textAlign="center";
 let msg = "2D Drawing"
 context.fillText(msg, canvas.width / 2, 100);
 context.strokeText(msg, canvas.width / 2, 100);

context.strokeStyle = '#FFFFFF';
context.lineWidth = 2;
context.beginPath();
context.arc(200, 140, 20, 0, Math.PI * 2);
context.moveTo(200, 160);
context.lineTo(200, 220);
context.moveTo(180, 300);
context.lineTo(185, 260);
context.lineTo(200, 220);
context.lineTo(215, 260);
context.lineTo(220, 300);
context.moveTo(240, 130);
context.lineTo(225, 170);
context.lineTo(200, 170);
context.lineTo(175, 180);
context.lineTo(170, 220);
context.stroke();

let msg2 = "its quite easy";
context.font = "24px Arial";
context.fillText(msg2, canvas.width / 2, 330);
context.strokeText(msg2, canvas.width / 2, 330);