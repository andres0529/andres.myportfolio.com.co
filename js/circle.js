function scrollAppear(){
	let intro = document.querySelector('#circleBar');
	let introPosition = intro.getBoundingClientRect().top;
	let screenPosition = window.innerHeight / 1.4;
	if(introPosition < screenPosition){
		Circlle('.round');
	}
}


function Circlle(el){
	$(el).circleProgress({fill: {color:'#f5af31'}}).on('circle-animation-progress', function(event, progress, stepValue){
		$(this).find('strong').text(String(stepValue.toFixed(2))+'%');
	});
}

window.addEventListener('scroll', scrollAppear);

