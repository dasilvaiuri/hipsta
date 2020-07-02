function setup(){
  //console.log('setup');
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  somJogo.loop();
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenaAtual = 'telaInicial';
  cenas = {
    jogo,
    telaInicial
  };
  botao = new Botao("Iniciar", width/2, height/2);
}

function draw(){
  cenas[cenaAtual].draw();
}


//captura eventos
function keyPressed(){
  jogo.keyPress(key);
}

function mousePressed(){
  personagem.pular();
}