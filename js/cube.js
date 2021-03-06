window.onload = () => {

  // 初始第一个动画
  init();
  // 初始第二个动画
  window.requestAnimationFrame(clock);
  // 初始第三个动画
  initCanvas2()
}

function initCanvas2 (){
	let canvas2 = document.querySelector('#canvas2')
	let ctx = canvas2.getContext('2d')
	
	// ctx.fillStyle = 'black'
	// ctx.fillRect(20, 20, 100, 100)
	ctx.translate(canvas2.width/2, canvas2.height/2)
	
	ctx.rotate(Math.PI)
	ctx.fillStyle = 'red'
	ctx.fillRect(0, 0, 200, 200)
}


var sun = new Image();
var moon = new Image();
var earth = new Image();
function clock(){
  var now = new Date();
  var ctx = document.getElementById('canvas1').getContext('2d');
  ctx.save();
  ctx.clearRect(0,0,150,150); // 每次清理画布
  ctx.translate(75,75); // 将canvas远点移动到中心
  ctx.scale(0.5,0.5); // 缩小canvas
  ctx.rotate(-Math.PI/2);
  ctx.strokeStyle = "green";
  ctx.fillStyle = "white";
  ctx.lineWidth = 8;
  ctx.lineCap = "round"; // 端点圆润

  // Hour marks
  ctx.save();
  ctx.strokeStyle = "black";
  // 画出12小时
  for (var i=0;i<12;i++){
    ctx.beginPath();
    ctx.rotate(Math.PI/6);
    ctx.moveTo(100,0);
    ctx.lineTo(120,0);
    ctx.stroke();
  }
  ctx.restore();

  // Minute marks
  ctx.save();
  // 画出分钟
  ctx.strokeStyle = "pink";
  ctx.lineWidth = 5;
  for (i=0;i<60;i++){
    if (i%5!=0) {
      ctx.beginPath();
      ctx.moveTo(117,0);
      ctx.lineTo(120,0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI/30);
  }
  ctx.restore();

  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr  = now.getHours();
  hr = hr>=12 ? hr-12 : hr;

  ctx.fillStyle = "black";

  // write Hours
  ctx.save();
  ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20,0);
  ctx.lineTo(80,0);
  ctx.stroke();
  ctx.restore();

  // write Minutes
  ctx.save();
  ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28,0);
  ctx.lineTo(112,0);
  ctx.stroke();
  ctx.restore();

  // Write seconds
  ctx.save();
  ctx.rotate(sec * Math.PI/30);
  ctx.strokeStyle = "#D40000";
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30,0);
  ctx.lineTo(83,0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0,0,10,0,Math.PI*2,true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95,0,10,0,Math.PI*2,true);
  ctx.stroke();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.arc(0,0,3,0,Math.PI*2,true);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = '#325FA2';
  ctx.arc(0,0,142,0,Math.PI*2,true);
  ctx.stroke();

  ctx.restore();

  window.requestAnimationFrame(clock);
}

function init(){
  sun.src = 'http://p26lefllv.bkt.clouddn.com/Canvas_sun.png';
  moon.src = 'http://p26lefllv.bkt.clouddn.com/Canvas_moon.png';
  earth.src = 'http://p26lefllv.bkt.clouddn.com/Canvas_earth.png';
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over'; // 在源图像上方显示目标图像。
  ctx.clearRect(0,0,300,300); // clear canvas

  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.strokeStyle = 'rgba(0,153,255,0.4)';
  ctx.save(); // 保存当前画布的状态
  ctx.translate(150,150); // 移动画布（地球旋转的中心坐标）

  // Earth
  var time = new Date();
  // earth 60s旋转1圈
  ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
  ctx.translate(105,0); // 在上次移动的基础上再次移动
  ctx.fillRect(0,-12,50,24); // 地球昼夜阴影
  ctx.drawImage(earth,-12,-12); // 使用地球图片

  // Moon 6s旋转1圈
  ctx.save();
  ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
  ctx.translate(0,28.5);
  ctx.drawImage(moon,-3.5,-3.5);
  ctx.restore();

  ctx.restore();

  ctx.beginPath();
  ctx.arc(150,150,105,0,Math.PI*2,false); // Earth orbit
  ctx.stroke();

  ctx.drawImage(sun,0,0,300,300);

  window.requestAnimationFrame(draw);

}


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

















































