//A logica geral do jogo é atingir as associações //corretas 
//entre os diferentes povos que constituiram o que //hoje é o povo brasileiro e a época em que chegaram ou foram trazidos, identificando os povos originários 
//

var tela = 1;
var xMenu = 0;
var yMenu = 0;
var yMenu1 = 95;
var yMenu2 = 185;
var yMenu3 = 285;
var largura = 150;
var altura = 40;
var rad = 8; // tamanho da figura- elipse
var xpos, ypos;
var xspeed = 2.8; // velocidade de mov da figura
var yspeed = 2.2;
var xdirection = 1; // direção de mov da figura
var ydirection = 1;
var cont = 0;
var j=0;
var x =240;
var y = 175;
var i =0;
var n =0;
var pontos = 0;
var xMud = 0;
var yMud = 0;
var xMud1 = 50;
var xMud3 = 100;
var xMud4 = 150;
var xMud5 = 200;
var xMud6 = 250;
var xMud7 = 300;
var xMud8 = 350;
var raiofig = 40;
var Xcolon = 410;
var Ycolon = 30;
var Xarabe = 340;
var Yarabe = 295;
var Xasia = 410;
var Yasia = 230;
var Xafrica = 410;
var Yafrica = 295;
var Xind = 410;
var Yind = 90;
var Xaborig = 410;
var Yaborig = 160;
var Xface = 20;
var Yface = 320;
var willyfoto 
var Fernfoto;
var fundo1
var fundo2 
var fundofoto
var fundoflam
var fotofont1;
var fotocolon;
var fotoasia;
var fotoafrica;
var fotoaborig;
var fotoarabe;
var fotoameric;
var fotoeslavo;
var face = [];
 //carregando as imagens
function preload(){  
  fotocolonia = loadImage("brasil-colonia-og.jpg");
  fotofont1 = loadImage("indigena Brasil.jpg");
  willyfoto = loadImage("e2e87d3b-27f7-4bb7-a6d0-1e75ed64ae72.jpg");
  Fernfoto = loadImage("Fernanda Flavia educ.jpg");
  fotoarabe = loadImage("cultura-arabe.jpg");
  fotoameric = loadImage("Apaches.jpg");
  fotoaborig = loadImage("maoris_1105729430.jpg");
  fundofoto = loadImage("fundo1.png");
  fundoflam = loadImage("padrãofundoflamenco-373.png");
  fundo3 = loadImage("mapa-do-brasil-estados-branco-comlegenda.jpg");
  fundo2 = loadImage("Raças Brasil.png");
  fundo1 = loadImage("mapa-do-brasil-legendado-pintado-regioes.jpg");
  fotocolon = loadImage("Colonizadores-Portugueses-no-Brasil.jpg");
 fotoasia = loadImage("asiaticos.jpg");
fotoafrica = loadImage("povo africano.jpg");
  face[1] = loadImage("tint1_head.png");
  face[2] = loadImage("tint2_head.png");
   face[3] = loadImage("tint3_head.png");
   face[4] = loadImage("tint4_head.png");
   face[5] = loadImage("tint5_head.png");
   face[6] = loadImage("tint6_head.png");
  face[7] = loadImage("tint7_head.png");
  face[8] = loadImage("tint8_head.png");
}                       
function setup() { 
  createCanvas(480,350);
  frameRate(30);
  ellipseMode(RADIUS);
  // definindo a posição inicial da figura
  xpos = width / 2;
  ypos = 300;
}

function draw() {
  textStyle(BOLD);
  textFont('cursive')
  
  if (tela == 1){ 
    tela1();
  }
if (tela == 2) {
  tela2();
}
 if (tela == 3){
   tela3();
  }  
   if (tela == 4){
     tela4();
} 
  if (tela==5){
    tela5();
  }
  if(tela===6){
    tela6();
  }
}
function tela1(){ 
    textAlign(CENTER);
  textSize(20);
  background('white');
  image(fundo1,40,40,400,310);
     textSize(15);
    text("DE QUEM SOMOS FEITOS?",100,20,300,20);
    cont ++
    seg = parseInt(cont/30);
  //usando o vetor  de imagem para rodar de 1 a 8, trocando as imagens
    n ++
  if(n>8){
    n=1
  }
    image(face[n],xMud,yMud,20,20);
    xMud = xMud+1;
    if(xMud>480){
      xMud=0;
     yMud = yMud+10;
    }
     image(face[n],xMud3,yMud+150,20,20);
    xMud3 = xMud3+1;
    if(xMud3>480){
      xMud3=0;
      yMud = yMud-10;
    }
     image(face[n],xMud6,yMud+100,20,20);
    xMud6 = xMud6-1;
    if(xMud6<0){
      xMud6=480;
      yMud = yMud+10;
    }
     image(face[n],xMud8,yMud+225,20,20);
    xMud8 = xMud8-1;
    if(xMud8<0){
      xMud8=480;
      yMud = yMud-10;
    }
     image(face[n],xMud7,yMud+300,20,20);
    xMud7 = xMud7+1;
    if(xMud7>480){
      xMud7=0;
      yMud = yMud-10;
    }
     image(face[n],xMud5,yMud+180,20,20);
    xMud5 = xMud5+1;
    if(xMud5>480){
      xMud5=0;
      yMud = yMud+10;
    }
     image(face[n],xMud4,yMud+250,20,20);
    xMud4 = xMud4-1;
    if(xMud4<0){
      xMud4=480;
      yMud = yMud-10;
    }
      image(face[n],xMud1,yMud+50,20,20);
    xMud1 = xMud1-1;
    if(xMud1<0){
      xMud1=480;
      yMud = yMud+10;
    }
    //botão "Jogar"
     if(mouseX > xMenu && mouseX < xMenu+largura-30 && mouseY > yMenu1+50 && mouseY < yMenu1+altura+80){
    stroke(200);
    fill(25);
    rect(xMenu,yMenu1+80,largura-30,altura,15);
    
    if (mouseIsPressed){
      tela = 2;
    }
    }
    fill('magenta');
    noStroke();
   textSize(17);
    text("Jogar", 60,200);
    //botão "regras e instruções"
     if(mouseX > xMenu+15 && mouseX < xMenu+15+largura+47 && mouseY > yMenu2+80 && mouseY < yMenu2+altura+80){
    stroke(200);
    fill(25);
    rect(xMenu+15,yMenu2+80,largura+47,altura,15);
       
    if (mouseIsPressed){
      tela = 3;
    }
  }
  fill(1,180,2);
    noStroke();
    text("Regras e instruções", 110,290);
  //botão "créditos"
     if(mouseX > xMenu+370 && mouseX < xMenu+largura+370 && mouseY > yMenu3 && mouseY < yMenu3+altura){
    stroke(200);
    fill(25);
    rect(xMenu+370,yMenu3,largura-40,altura-10,15);
       
    if (mouseIsPressed){
      tela = 4;
    }
     }
        fill('orange');
    noStroke();
    textSize(17);
    text("Créditos",425,305);
    fill('black');
  
}
function tela2(){
  textAlign(CENTER);
  textSize(25);
  background('white');
  image(fundo3,60,60,320,260);
  
  //botão "voltar" 
  if(mouseX > xMenu+300 && mouseX < xMenu+300+largura-50 && mouseY > yMenu3+30 && mouseY < yMenu3+20+altura){
    stroke(200);
    fill(25);
    rect(xMenu+295,yMenu3+30,largura-60,altura-10,15);
   if (mouseIsPressed){
      tela = 1;
    }
  }
  fill('red');
  textSize(15);
  textStyle(BOLD);
    text("VOLTAR",280,325,130,30);
 
  stroke(200);
  image(fotofont1,0,0,70,70);
  textSize(9);
  text("Povos Indígenas",0,75,80,20);
   image(fotocolon,410,0,70,70);
    text("Povos Europeus",400,75,90,20);
   image(fotoasia,0,280,70,70);
    text("Povos Orientais",0,270,80,20);
   image(fotoafrica,410,280,70,70);
    text("Povos Africanos",400,270,90,20);
     n++
 if(n>8){
 n=1;
}
   image(face[n],xpos, ypos, rad+5, rad+5);
  //movimentando a elipse com o teclado
  
  fill('black');
  ellipse(x,y,rad,rad);
  if(keyIsDown(UP_ARROW)){
  y=y-3;
  }
   if(keyIsDown(DOWN_ARROW)){
  y=y+3;
   }
   if(keyIsDown(RIGHT_ARROW)){
  x=x+3;
}
   if(keyIsDown(LEFT_ARROW)){
  x = x-3;
   }
  // atualiza a posição da figura
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // verifica se a figura ultrapassa os limites da tela
  // se sim, inverte a direção multiplicando por -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }
  //verifica se a figura ultrapassa os limites do distancia //entre o diametro da figura e a posição da elipse 
    if(dist(xpos,ypos,x,y)<(rad+rad-2)){
      xdirection *= -1;
    }
  //pontua quando a figura entra na area da resposta correta 
  if(xpos<rad+60&&ypos<rad+60){
    pontos = pontos + 1;
   }
   fill('magenta');
    textSize(12)
  textStyle(BOLD);
    text("Quais os povos que habitavam o Brasil antes da colonização?",100,20,280,40);
  fill('black');
  textSize(15);
   text("Pontos = "+pontos,430,230);
  //Se pontos ultrapassam 99, abre a próxima fase
  if(pontos>=100){
       if(mouseX > xMenu+70 && mouseX < xMenu+70+largura-20 && mouseY > yMenu3+30 && mouseY < yMenu3+30+altura-15){
    stroke(200);
    fill(25);
  rect(xMenu+70,yMenu3+30,largura-30,altura-10,15);
         if (mouseIsPressed){
      tela = 5;
 }
       }
    textSize(9);
     text("Parabéns, você passou para a próxima fase!",370,190,largura-30,altura);       
   
      textSize(10);
  text("Clique aqui para a próxima fase",xMenu+70,yMenu3+35,largura-20,altura-15);
   textSize(9);
    fill('blue');
  } 
}
function tela3(){
  
  textAlign(CENTER);
  textSize(10);
  background(160);
  image(fundofoto,45,20,390,310);
   fill('black');
    text("- Para jogar a primeira fase, movimente a bolinha preta com o teclado para colidir com o objeto móvel, fazendo-o atingir o campo da resposta correta à pergunta e pontuando. O campo das respostas corresponde aos cantos da tela, cada qual contendo uma figura que representa um povo diferente e apenas uma das figuras corresponde à resposta correta. O seu objetivo é atingir ou ultrapassar 100 pontos, liberando o botão para acessar a próxima fase.",10,20,240,130);
  text("- Na segunda fase, arraste com o mouse para o espaço no centro do país apenas as figuras que correspondem à resposta correta. As figuras que não correspondem não irão encaixar no espaço, retornando ao ponto inicial. Nesta fase, há mais de uma figura como resposta.",10,150,240,80);
    
  fill('white');
  noStroke();
  text("Conteúdo:(EF03HI07) História 3º ano - Identifica, através de um jogo espacial interativo, os povos e/ou as raças que compõem o povo brasileiro, segundo a cronologia referente a antes e depois da colonização, levando o aluno a refletir sobre o ambiente que hoje o cerca e sobre o seu pertencimento.",115,230,250);
   
    if(mouseX > xMenu+225 && mouseX < xMenu+225+largura-50 && mouseY > yMenu3+30 && mouseY < yMenu3+20+altura){
    stroke(200);
    fill(25);
    rect(xMenu+225,yMenu3+30,largura-50,altura-10,15);
  
    if (mouseIsPressed){
      tela = 1;
    }
  }
  fill('black');
 textSize(15);
  textStyle(BOLD);
    text("VOLTAR",215,325,130,30);
}
function tela4(){
   textAlign(CENTER);
  textSize(20);
  background(200);
     image(fundoflam,15,20,440,310);
     
   fill('black');
    noStroke();
     textStyle(BOLDITALIC);
    text("CRÉDITOS:", 67,42);
     textStyle(BOLD);
     textSize(13);
     fill('blue')
     text("Aluno-programador: Wilhelm Araújo da Silva",300,121);
     fill('green');
     text("Educadora: Fernanda Flávia",120,210);
     image(willyfoto,300,135,80,90);
  image(Fernfoto,80,225,80,90);
     
      if(mouseX > xMenu+225 && mouseX < xMenu+225+largura-50 && mouseY > yMenu3+30 && mouseY < yMenu3+20+altura){
    stroke(200);
    fill(25);
    rect(xMenu+225,yMenu3+30,largura-50,altura-10,15);
  
    if (mouseIsPressed){
      tela = 1;
    }
  }
  fill('black');
  textSize(15);
    text("VOLTAR",215,325,130,30);
}
function tela5(){
     background('white');
   image(fotocolonia,0,0,470,340);
     textStyle(BOLD);
  textSize(10);
    fill('white');
  stroke(51);
  strokeWeight(3);
 
    text("QUAIS OS PRINCIPAIS POVOS QUE VIERAM OU FORAM TRAZIDOS PARA O BRASIL A PARTIR DO ANO DE 1.500?",150,10,220,80);
    fill('orange');
  //ajustando o centro da figura para calcular a dist pro mouse, arrasto da figura com o mouse
   if(mouseIsPressed && dist(mouseX,mouseY,Xind+20,Yind+20) <raiofig/2){
   Xind = mouseX -20;
    Yind = mouseY -20;
  }
     image(fotofont1,Xind,Yind,raiofig,raiofig);
  textSize(9);
  text("Indígenas",390,80,80,20);
   if(mouseIsPressed && dist(mouseX,mouseY,Xaborig+20,Yaborig+20) <raiofig/2){
   Xaborig = mouseX -20;
  Yaborig = mouseY -20;
  }
  image(fotoaborig,Xaborig,Yaborig,raiofig,raiofig);
   text("Aborígenes",380,150,100,20);
  if(mouseIsPressed && dist(mouseX,mouseY,Xcolon+20,Ycolon+20) <raiofig/2){
   Xcolon = mouseX -20;
    Ycolon= mouseY -20;
  }
   image(fotocolon,Xcolon,Ycolon,raiofig,raiofig);
    text("Europeus",395,20,70,20);
   if(mouseIsPressed && dist(mouseX,mouseY,Xasia+20,Yasia+20) <raiofig/2){
   Xasia = mouseX -20;
    Yasia = mouseY -20;
  }
   image(fotoasia,Xasia,Yasia,raiofig,raiofig);
    text("Orientais",385,220,90,20);
   if(mouseIsPressed && dist(mouseX,mouseY,Xafrica+20,Yafrica+20) <raiofig/2){
   Xafrica = mouseX -20;
    Yafrica = mouseY -20;
  }
   image(fotoafrica,Xafrica,Yafrica,raiofig,raiofig);
    text("Africanos",385,285,90,20);
   if(mouseIsPressed && dist(mouseX,mouseY,Xarabe+20,Yarabe+20) <raiofig/2){
   Xarabe = mouseX -20;
    Yarabe = mouseY -20;
  }
   image(fotoarabe,Xarabe,Yarabe,raiofig,raiofig);
    text("Árabes",315,285,90,20);
  if(mouseX > xMenu+100 && mouseX < xMenu+100+largura-80 && mouseY > yMenu1+30 && mouseY < yMenu1+50+altura){
    stroke(51);
    strokeWeight(8);
    noFill();
    rect(xMenu+100,yMenu1+30,largura-80,altura+30,15);
  }
   fill('red');
  textSize(10);
  text("Arraste para cá!!", 90,105,90,20);
  //retorna as figuras não-correspondentes para a //posição inicial
    if(Xind+20>xMenu+100 && Xind+20<xMenu+170 && Yind > yMenu1+30 && Yind < yMenu1 +100){
      Xind = 410;
      Yind = 90;
    }
   if(Xarabe+20>xMenu+100 && Xarabe+20<xMenu+170 && Yarabe > yMenu1+30 && Yarabe < yMenu1 +100){
      Xarabe = 340;
      Yarabe = 295;
    }
   if(Xaborig+20>xMenu+100 && Xaborig+20<xMenu+170 && Yaborig > yMenu1+30 && Yaborig < yMenu1 +100){
      Xaborig = 410;
      Yaborig = 160;
    }
   if(Xasia+20>xMenu+100 && Xasia+20<xMenu+170 && Yasia > yMenu1+30 && Yasia < yMenu1 +100){
      Xasia = 410;
      Yasia = 230;
    }
   if(Xcolon+20>xMenu+100 && Xcolon+20<xMenu+170 && Ycolon > yMenu1+30 && Ycolon < yMenu1 +100 && Xafrica+20>xMenu+100 && Xafrica+20<xMenu+170 && Yafrica > yMenu1+30 && Yafrica < yMenu1 +100){
     textSize(11);
     text("Parabéns, você acertou!!", 210,180,120,60);
     textSize(10);
     text("clique aqui para a próxima fase",215,210,100,40);
     if(mouseX > 210 && mouseX < 310 && mouseY > 205 && mouseY < 240){
    stroke(51);
    strokeWeight(4);
    noFill();
    rect(210,205,100,35,15);
       if(mouseIsPressed){
         tela = 6;     }
  }
    }
  cont ++
    seg = parseInt(cont/30);
  }
function tela6(){
  textAlign(CENTER);
  textSize(10);
  background('white');
  image(fundo2,140,80,190,210);
  j++;
  if(j>8){
    j=1;
  }
  image(face[j],Xface+40,Yface,rad*2,rad*2);
  image(face[j],Xface+90,Yface,rad*2,rad*2)
  image(face[j],Xface+140,Yface,rad*2,rad*2)
  image(face[j],Xface+190,Yface,rad*2,rad*2)
  image(face[j],Xface+240,Yface,rad*2,rad*2)
  image(face[j],Xface+290,Yface,rad*2,rad*2)
  image(face[j],Xface+340,Yface,rad*2,rad*2)
  image(face[j],Xface+390,Yface,rad*2,rad*2)
  
  fill('magenta');
  stroke(51);
    strokeWeight(2);
  text("Você aprendeu que o povo brasileiro é composto por diferentes povos que começaram a se integrar a partir do ano de 1.500, sendo os indígenas os primeiros habitantes do Brasil.Você também muito provavelmente é assim, fruto de uma grande miscigenação!! ",80,15,300,70);
  fill('black');
  text("Fim de jogo!!",210,300,80,20);
}
//https://editor.p5js.org/willyreltimi/sketches/MIBjo//3-4r
//https://youtu.be/8M05147lqd4  - video trailer do jogo
//https://youtu.be/LShQ4Wp4K-w - video explicativo