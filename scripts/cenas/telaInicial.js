class TelaInicial{
  constructor(){
  
  }
  
  draw(){
    this._imagemFundo();
    this._texto();
    this._botao();
  }
  
  _imagemFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto(){
    textFont(fonteTelaInicial)
    textAlign(CENTER);
    textSize(50);
    text("As aventuras de", width/2, height/3);
    textSize(150);
    text("Hipsta", width/2,  height/5*3);
  }
  
  _botao(){
    botao.y=height/7*5;
    botao.draw();
  }
}