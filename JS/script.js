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

function drawFood(){
	context.fillStyle="red";
	context.fillRect(food.x, food.y, box, box);
}


document.addEventListener('keydown', update);/*esse evento pega o Keydown e chama a função update*/

function update(event){
		if(event.keyCode ==37 && direction != "right")direction ="left";
		if(event.keyCode ==38 && direction != "down")direction ="up";
		if(event.keyCode ==39 && direction != "left")direction ="right";
		if(event.keyCode ==40 && direction != "up")direction ="down";
}


function iniciarJogo(){
	/* os if´s abaixo tem por função fazer a cobrinha "atravessar" a tela*/
	if(snake[0].x > 15 * box && direction == "right") snake[0].x=0;
	if(snake[0].x < 0 && direction == "left") snake[0].x= 16 * box;
	if(snake[0].y > 15 * box && direction == "down") snake[0].y=0;
	if(snake[0].y < 0 && direction == "up") snake[0].y=16 * box;
	
	 /*se a posição 0 (cabeça) se chocar com a posição 1 (corpo) parar o jogo*/
	for(i=1; i < snake.length; i++){
		if(snake[0].x == snake[i].x && snake[0].y== snake[i].y){
			clearInterval(jogo);
			alert('Game Over :(');
		}
	}
	criarBG();
	criarcobrinha();
	drawFood();
	
			
	/*definindo o ponto de partida da cobrinha*/
	let snakeX= snake[0].x;
	let snakeY= snake[0].y;
	
	/* definindo as coordenadas */
	if(direction == "right") snakeX += box;
	if(direction == "left")  snakeX -= box;/*diminui p dar a ilusão q foi p a esquerda*/
	if(direction == "up")    snakeY -= box;
	if(direction == "down")  snakeY += box;
	
	/*aumentar o tamanho da cobrinha qdo ela comer a comida*/
	if (snakeX != food.x || snakeY != food.y){
			snake.pop();/*remove o último elemento do array*/
	}else{food.x = Math.floor(Math.random() * 15 + 1) * box;
		 food.y = Math.floor(Math.random() * 15 + 1) * box; 
	}
	
	/*definindo a cabeça da cobrinha*/
	let newHead= {
		x: snakeX,
		y: snakeY
	}
	
	snake.unshift(newHead); /*até aqui a cobrinha aparece mas qdo chega no final da tela desaparece*/
	
	/* capturar o code da tecla*/
	
}

let jogo = setInterval(iniciarJogo,100);  /*tempo em milesegundo para o jogo reiniciar*/
