var cartas = [
	{
		numero:1,
		nome: "Joe",
		atributos: {
			Beleza: 9,
			Inteligência: 0,
			Engraçado: 10
		},
		url:"https://i.pinimg.com/originals/16/92/39/16923950e34d4136823786eeba6f0798.gif"
	},
	{
		numero:2,
		nome: "Rachel",
		atributos: {
			Beleza: 10,
			Inteligência: 8,
			Engraçado: 6
		},
		url:"https://64.media.tumblr.com/fedc9ab5e3861a11dca77623f913df5f/tumblr_inline_ml2cu9bpLv1qz4rgp.gif"
	},
	{
		numero:3,
		nome: "Phoebe",
		atributos: {
			Beleza: 6,
			Inteligência: 4,
			Engraçado: 10
		},
		url:"https://i.pinimg.com/originals/06/3a/4f/063a4f51df7289c0e3184341a86a9300.gif"
	},
	{
		numero:4,
		nome: "Chandler",
		atributos: {
			Beleza: 5,
			Inteligência: 7,
			Engraçado: 7
		},
		url:"https://img.wattpad.com/7f4124a511682348309886e0a8c00d7bdbfbe8ef/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f3447384c57453047594e357253513d3d2d3839373339363836372e3136313530666539613439383534343731333136383837383338332e676966"
	},
	{
		numero:5,
		nome: "Mônica",
		atributos: {
			Beleza: 10,
			Inteligência: 8,
			Engraçado: 8
		},
		url:"https://data.whicdn.com/images/223657471/original.gif"
	},
	{
		numero:6,
		nome: "Ross",
		atributos: {
			Beleza: 4,
			Inteligência: 10,
			Engraçado: 3
		},
		url:"https://i.pinimg.com/originals/0f/26/21/0f2621f3fad63457842f817f81df58ec.gif"
	},
	{
		numero:7,
		nome: "Janice Litman",
		atributos: {
			Beleza: 2,
			Inteligência: 0,
			Engraçado: 3
		},
		url:"https://cdn.cliqueinc.com/posts/269358/janice-from-friends-outfits-269358-1584714847613-main.700x0c.jpg"
	},
	{
		numero:8,
		nome: "Gunther",
		atributos: {
			Beleza: 1,
			Inteligência: 4,
			Engraçado: 2
		},
		url:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/friends-gunther-2-1509051916.jpg?crop=1.00xw:0.667xh;0,0.0624xh&resize=640:*"
	},
	{
		numero:9,
		nome: "Richard Bunker",
		atributos: {
			Beleza: 5,
			Inteligência: 9,
			Engraçado: 3
		},
		url:"https://4.bp.blogspot.com/-Vj_HR--Vuvw/Wqdr4mlsTcI/AAAAAAACUFQ/pAMf4okZNVYl8_4TpIay08U2Ui4LCSxegCLcBGAs/s320/Richard%2BBurke%2Bfriends%252C%2Bage%252C%2Bwiki%252C%2Bbiography.png"
	},
	{
		numero:10,
		nome: "Frank Jr",
		atributos: {
			Beleza: 2,
			Inteligência: 1,
			Engraçado: 4
		},
		url:"https://media0.giphy.com/media/J2P48qilLlZ4eTqgp3/source.gif"
	},
	{
		numero:11,
		nome: "Super Friends",
		atributos: {
			Beleza: 10,
			Inteligência: 10,
			Engraçado: 10
		},
		url:"https://metropolitanafm.com.br/wp-content/uploads/2018/06/friends.gif"
	},
	{
		numero:12,
		nome: "Ben Geller",
		atributos: {
			Beleza: 10,
			Inteligência: 7,
			Engraçado: 7
		},
		url:"https://static1.purebreak.com.br/articles/5/89/93/5/@/343816--friends-cole-sprouse-e-chamado-para-c-diapo-1.jpg"
	},
	{
		numero:13,
		nome: "Estelle Leonard",
		atributos: {
			Beleza: 0,
			Inteligência: 10,
			Engraçado: 7
		},
		url:"https://i.pinimg.com/originals/34/b8/7f/34b87ff9af71c50521f19222d30268f8.jpg"
	},
	{
		numero:14,
		nome: "Mike",
		atributos: {
			Beleza: 5,
			Inteligência: 5,
			Engraçado: 6
		},
		url:"https://64.media.tumblr.com/d42a68ff0f7014d5ca0cecaaff479f9d/tumblr_p7x0pjGqXL1vjsn8so9_400.png"
	}
	]
//---------------------------------
// Arceus = n 11

var cartaMaquina;
var cartaJogador;
var pontosJogador = 0;
var pontosMaquina = 0;
var deck = [];
var frenteDaCarta1;
var frenteDaCarta2;
var flipCardAudio = document.querySelector("#flipCard");
var winAudio = document.querySelector("#win");
var loseAudio = document.querySelector("#lose");
for(var i = 0; i < cartas.length; i++){
	deck.push(cartas[i]);
}
var state = 0;
var flipCard1 = document.querySelector(".flip-card1");
var flipCard2 = document.querySelector(".flip-card2");
var flipCardInner1 = document.querySelector(".flip-card-inner1");
var flipCardInner2 = document.querySelector(".flip-card-inner2");
var cartasNoDeck = document.querySelector(".cards");
updateDeck()

function sortearCarta(){
  var numeroCartaMaquina = parseInt(Math.random() * deck.length);
  cartaMaquina = deck[numeroCartaMaquina];
	deck.splice(numeroCartaMaquina, 1);
  
  var numeroCartajogador = parseInt(Math.random() * deck.length);
  cartaJogador = deck[numeroCartajogador];
	deck.splice(numeroCartajogador, 1);
  
  document.querySelector('.sortear').style.display = "none";
  
	updateDeck()
	updateData()
	exibirOpcoes()
	
	
}

function updateDeck(){
	var cartasNoBaralho = deck.length;
	cartasNoDeck.innerText = cartasNoBaralho;
}

function updateData(){	
	var nomeCard1 = document.querySelector(".frontCardTitulo1");
	var nomeCard2 = document.querySelector(".frontCardTitulo2");
	var imgCard1 = document.querySelector(".frontCardImage1");
	var imgCard2 = document.querySelector(".frontCardImage2");
	var Beleza1 = document.querySelector(".Beleza1");
	var Inteligência1 = document.querySelector(".Inteligência1");
	var Engraçado1 = document.querySelector(".Engraçado1");
	var Beleza2 = document.querySelector(".Beleza2");
	var Inteligência2 = document.querySelector(".Inteligência2");
	var Engraçado2 = document.querySelector(".Engraçado2");
	
	nomeCard1.innerText = cartaJogador.nome;
	imgCard1.src = cartaJogador.url;
	Beleza1.innerText = cartaJogador.atributos.Beleza;
	Inteligência1.innerText = cartaJogador.atributos.Inteligência;
	Engraçado1.innerText = cartaJogador.atributos.Engraçado;
	
	nomeCard2.innerText = cartaMaquina.nome;
	imgCard2.src = cartaMaquina.url;
	Beleza2.innerText = cartaMaquina.atributos.Beleza;
	Inteligência2.innerText = cartaMaquina.atributos.Inteligência;
	Engraçado2.innerText = cartaMaquina.atributos.Engraçado;
	
	flipCard1.classList.add("pulse");
	flipCardInner1.style.transform = "rotateY(180deg)";
	flipCardAudio.play();
	state = 0;
	
	frenteDaCarta1 = document.querySelector(".flip-card-inner-front1");
	frenteDaCarta2 = document.querySelector(".flip-card-inner-front2");
	
	if(cartaJogador.numero == 11){
	} else if(cartaMaquina.numero == 11){
		frenteDaCarta2.classList.add("brilhante");
	} else if(cartaJogador.numero != 11 && cartaMaquina.numero != 11){
		frenteDaCarta1.classList.remove("brilhante");
		frenteDaCarta2.classList.remove("brilhante");
	}
	
	
}

function exibirOpcoes(){
  var opcoes = document.querySelector(".options");
  var opcoesTexto = "";
  for(var atributo in cartaJogador.atributos){
		opcoesTexto += `<button id="btn${atributo}" class="btnatributo">${atributo}</button>`;
  }
	
	var template = `<p>Que atributo você deseja comparar?</p><br>
	${opcoesTexto}`;
  opcoes.innerHTML = template;
	adicionarEventos();
}

function adicionarEventos(){
	var btns = document.querySelectorAll(".btnatributo");
	btns.forEach(button => {
		button.addEventListener("click", ()=>{
			obtemAtributoSelecionado(button.innerText);
		})
	})
}

function obtemAtributoSelecionado(atributo){
  jogar(atributo);
}

function jogar(atributoSelecionado){
	var placarJogador = document.querySelector("#placarJogador");
	var placarMaquina = document.querySelector("#placarMaquina");
	
  if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
    mostraResultado("Você venceu!");
		pontosJogador++;
		placarJogador.innerText = pontosJogador;
		winAudio.play();
  } else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
    mostraResultado("Você perdeu!");
		pontosMaquina++;
		placarMaquina.innerText = pontosMaquina;
		loseAudio.play();
  } else {
    mostraResultado("Empatou!");
  }
	
	if(state == 0){
		flipCard2.classList.add("pulse");
		flipCardInner2.style.transform = "rotateY(180deg)";
		flipCardAudio.play();
 		state = 1;
 	}
}

function mostraResultado(msg){
	var resultado = document.querySelector(".comandos");
	var template = `<h1>${msg}</h1><br><button class="jogarNovamente">Jogar Novamente</button>`;
	resultado.innerHTML = template;
	var jogarNovamente = document.querySelector(".jogarNovamente");
	jogarNovamente.addEventListener("click", proximoRound);
}

function proximoRound(){
	winAudio.load();
	loseAudio.load();
	if(deck.length != 0){
		flipCardInner1.style.transform = "rotateY(0deg)";
		flipCardInner2.style.transform = "rotateY(0deg)";
		flipCard1.classList.remove("pulse");
		flipCard2.classList.remove("pulse");
		state = 0;

		var comandos = document.querySelector(".comandos");
		var template = `<button class="sortear" onclick="sortearCarta()">Sortear carta</button>
				<div class="options"></div>
				`;

		setTimeout(()=>{
			comandos.innerHTML = template;
		}, 500)
	}else{
		updateDeck()
		var split = document.querySelector(".split");
		var vencedor;
		if(pontosJogador > pontosMaquina){
			vencedor = "Uhul! Você venceu o jogo!";
		} else if(pontosJogador < pontosMaquina){
			vencedor = "Que pena. A máquina venceu o jogo!";
		}else{
			vencedor = "O jogo empatou!";
		}
		var template = `
		<div class="msgFinal">
		<h1 class="msgGrande">${vencedor}</h1>
		<h1 class="msg">Acabaram as Cartas!</h1>
		<button class="novoJogo">Novo jogo!</button>
		</div>`;
		split.innerHTML = template;
		
		var novoJogo = document.querySelector(".novoJogo");
		novoJogo.addEventListener("click", iniciarNovoJogo);
	}
}

function iniciarNovoJogo(){
	pontosMaquina = 0;
	pontosJogador = 0;
	placarJogador.innerText = pontosJogador;
	placarMaquina.innerText = pontosMaquina;
	
	
	for(var i = 0; i < cartas.length; i++){
		deck.push(cartas[i]);
	}
	
	updateDeck()
	var split = document.querySelector(".split");
	var template = `
	<div class="flip-card1">
  <div class="flip-card-inner1">
    <div class="flip-card-inner-back1">
      <img class="cardImageBack1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSysrrRMvsOI3wmoCR0h1gZ6tzuwtNfflYXxw&usqp=CAU" alt="Card Back" >
    </div>
    <div class="flip-card-inner-front1">
      <h1 class="frontCardTitulo1">Goku</h1>
			<img class="frontCardImage1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSysrrRMvsOI3wmoCR0h1gZ6tzuwtNfflYXxw&usqp=CAU" alt="">
      <ul class="frontCardAtributos1">
      	<li class="atributoBeleza1">Beleza <span class="Beleza1">5</span></li>
      	<li class="atributoInteligência1">Inteligência <span class="Inteligência1">5</span></li>
      	<li class="atributoEngraçado1">Engraçado(a) <span class="Engraçado1">5</span></li>
      </ul>
    </div>
  </div>
</div>
		
		<div class="comandos">
			<button class="sortear" onclick="sortearCarta()">Sortear carta</button>
			<div class="options"></div>
			
		</div>
		
		<div class="flip-card2">
  <div class="flip-card-inner2">
    <div class="flip-card-inner-back2">
      <img class="cardImageBack2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSysrrRMvsOI3wmoCR0h1gZ6tzuwtNfflYXxw&usqp=CAU" alt="Card Back" >
    </div>
    <div class="flip-card-inner-front2">
      <h1 class="frontCardTitulo2">Goku</h1>
			<img class="frontCardImage2" src="https://i.pinimg.com/originals/6c/86/c9/6c86c972c6efe73a96c184ffe6b86297.jpg" alt="">
      <ul class="frontCardAtributos2">
      	<li class="atributoBeleza2">Beleza <span class="Beleza2">5</span></li>
      	<li class="atributoInteligência2">Inteligência <span class="Inteligência2">5</span></li>
      	<li class="atributoEngraçado2">Engraçado(a) <span class="Engraçado2">5</span></li>
      </ul>
    </div>
  </div>
</div>
`;

	split.innerHTML = template;
	flipCard1 = document.querySelector(".flip-card1");
	flipCard2 = document.querySelector(".flip-card2");
	flipCardInner1 = document.querySelector(".flip-card-inner1");
	flipCardInner2 = document.querySelector(".flip-card-inner2");
}