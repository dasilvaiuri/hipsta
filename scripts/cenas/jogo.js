class Jogo{
  constructor(){
    this.indice = 0;
    this.mapa = fita.mapa;
  }
  
  setup(){
    
    cenario = new Cenario(imagemCenario, 3)
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima,fita.configuracoes.vidaInicial);

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);

    //inimigos
    inimigo = new Inimigo(matrizInimigo, imagemInimigo, width-52, 30, 52, 52, 104, 104, 10);
    troll = new Inimigo(matrizTroll, imagemTroll, width*2, 0, 200, 200, 400, 400, 15);
    voador = new Inimigo(matrizVoador, imagemVoador, width-52, 200, 100, 75, 200, 150, 10);

    inimigos.push(inimigo);
    inimigos.push(troll);
    inimigos.push(voador);
 
  }
  
  keyPress(key){
    if(key=='ArrowUp'){
      personagem.pular();
    }
  }
   
  draw(){
    cenario.exibir();
    cenario.mover();
    vida.draw();
    pontuacao.exibir();
    pontuacao.adicionarPontos();
    personagem.exibir();
    personagem.aplicarGravidade();
    
    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;
    
    inimigo.exibir();
    inimigo.mover();

    if(inimigoVisivel){
      this.indice++;
      inimigo.reaparecer();
      if(this.indice > this.mapa.length-1){
        this.indice = 0; //reinicia o array para aparecer outros inimigos
      }
    }

      //Ao colidir, exibe gameover
      if(personagem.estaColidindo(inimigo)){
        vida.perderVida();
        personagem.tornarInvencivel();
        
        if(vida.vidas == 0){
          image(imagemGameOver, width/2-200, height/3);
          //Para o script/jogo
          noLoop();
        }
      }
        
  }
}