let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box=32;
let snake =[];
snake[0]={
	x: 8 * box,
	y: 8 * box
}
let direction="right";
let food ={
	x: Math.floor(Math.random() * 15 + 1) * box,
	y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG(){
		context.fillStyle="lightgreen";
		context.fillRect(0,0,16 * box, 16 * box);
}

function criarcobrinha(){
	for(i=0; i< snake.length; i++){
		context.fillStyle="green";
		context.fillRect(snake[i].x, snake[i].y, box, box);
	}
}



function iniciarJogo(){
	criarBG();
	criarcobrinha();
	
	/*definindo o ponto de partida da cobrinha*/
	let snakeX= snake[0].x;
	let snakeY= snake[0].y;
	
	/* definindo as coordenadas */
	if(direction == "right") snakeX += box;
	if(direction == "left") snakeX -= box;/*diminui p dar a ilusão q foi p a esquerda*/
	if(direction == "up")    snakeY -= box;
	if(direction == "down")  snakeY += box;
	
	snake.pop();/*remove o último elemento do array
	
	/*definindo a cabeça da cobrinha*/
	let newHead= {
		x: snakeX,
		y: snakeY
	}
	
	snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo,100);  /*tempo em milesegundo*/
