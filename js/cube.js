window.onload = () => {
var sun = new Image();
var moon = new Image();
var earth = new Image();
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

init();	
}





	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

















































