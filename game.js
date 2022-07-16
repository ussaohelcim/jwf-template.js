let canvas = document.querySelector("#ctx");
let gfx = jwf(canvas);

setInterval(()=>{
	gfx.drawCircle({
		x:canvas.clientWidth/2,
		y:canvas.clientHeight/2,
		r:100
	})
},16)