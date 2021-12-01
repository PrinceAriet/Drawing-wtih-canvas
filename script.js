
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle="red";
ctx.fillRect(0,0,50,50);
ctx.moveTo(50,0);
ctx.lineTo(50,100);
ctx.stroke();
ctx.beginPath();
ctx.arc(80,35,30,0,6.6);
ctx.stroke();


var canvas2 = document.getElementById("Canvas2");
var ctx2 = canvas2.getContext('2d');

ctx2.beginPath();
ctx2.arc(250,250,150,0,6.28318530718);
ctx2.fillStyle='#000';
ctx2.fill();
ctx2.stroke();

ctx2.fillStyle='#fe6837';
ctx2.fillRect(175,175,70,70);
ctx2.fillStyle='#8ec131';
ctx2.fillRect(255,175,70,70);
ctx2.fillStyle='#00b5ee';
ctx2.fillRect(175,255,70,70)
ctx2.fillStyle='#ffc236';
ctx2.fillRect(255,255,70,70)
