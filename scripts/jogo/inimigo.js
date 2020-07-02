class Inimigo extends Animacao{
  
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade);
    
    this.velocidade = velocidade;
    this.x = width;
  }
  
  mover(){
    this.x = this.x - this.velocidade;
  }
  
  reaparecer(){
      this.x = width;
  }
  
}