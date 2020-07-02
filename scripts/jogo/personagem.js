class Personagem extends Animacao{
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0
    this.gravidade = 3;
    this.pulos = 0;
    this.invencivel = false;
  }
  
  pular(){
    if(this.pulos<2){
      somPulo.play();
      this.velocidadeDoPulo = -35;  
      this.pulos++;
    }
  }
  
  
  aplicarGravidade(){
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if(this.y > this.yInicial){
      this.y = this.yInicial;
      this.pulos = 0;
    }
    
  }

  estaColidindo(inimigo){
    /**nao utilizar*/
    /*noFill(); //exibe conteudo
    //mostra o retangulo dos objetos
    rect(this.x, this.y, this.largura, this.altura);
    rect(inimigo.x, inimigo.y, inimigo.altura, inimigo.largura);*/
    /**nao utilizar*/
    
    if(this.invencivel){
      return false;
    }
    
    //desconta o quadrado para colidir com personagem
    const precisao = .65
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
      )
    return colisao;
  }
  
  tornarInvencivel(){
    this.invencivel = true;
    setTimeout(() => {this.invencivel = false}, 1000);
  }
  
  
}