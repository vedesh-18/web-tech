const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


ctx.fillStyle = 'green';
ctx.fillRect(50, 40, 120, 80);


ctx.beginPath();
ctx.arc(400, 100, 50, 0, Math.PI * 2);
ctx.fillStyle = 'blue';
ctx.fill();


ctx.beginPath();
ctx.moveTo(50, 200);
ctx.lineTo(450, 200);
ctx.strokeStyle = '#000';
ctx.lineWidth = 2;
ctx.stroke();


ctx.font = 'bold 28px sans-serif';
ctx.fillStyle = '#000';
ctx.textAlign = 'center';
ctx.fillText('HTML5 Canvas', 250, 260);
