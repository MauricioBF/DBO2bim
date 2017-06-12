function ATM() {
  var nota100=[100, 0], nota50=[50, 0], nota20=[20, 0], nota1=[10, 0], nota5=[5, 0];
  this.nota100=nota100;
  this.nota50=nota50;
  this.nota20=nota20;
  this.nota10=nota1;
  this.nota5=nota5;
  var coloca=function (quant, nota) {
    if (nota==100) {
      var q100=nota100[1];
      if (quant+q100<=100){
        nota100[1]+=quant
      }
    }
    if (nota==50) {
      var q50=nota50[1];
      if (quant+q50<=100){
        nota50[1]+=quant
      }
    }
    if (nota==20) {
      var q20=nota20[1];
      if (quant+q20<=100){
        nota20[1]+=quant
      }
    }
    if (nota==10) {
      var q10=nota1[1];
      if (quant+q10<=100){
        nota1[1]+=quant
      }
    }
    if (nota==5) {
      var q5=nota5[1];
      if (quant+q5<=100){
        nota5[1]+=quant
      }
    }
  }
  this.abastecer=coloca;
  var ter= function (nota) {
    if(nota==100){
      return nota100[1];
    }
    if(nota==50){
      return nota50[1];
    }
    if(nota==20){
      return nota20[1];
    }
    if(nota==10){
      return nota1[1];
    }
    if(nota==5){
      return nota5[1];
    }
    else{
      return 0;
    }
  }
  this.consultarQuantidade=ter;
  var ver= function () {
    var caixa=0
    if(nota100[1]!=0){
      caixa=nota100[0]*nota100[1];
    }
    if(nota50[1]!=0){
      caixa=nota50[0]*nota50[1];
    }
    if(nota20[1]!=0){
      caixa=nota20[0]*nota20[1];
    }
    if(nota1[1]!=0){
      caixa=nota1[0]*nota1[1];
    }
    if(nota5[1]!=0){
      caixa=nota5[0]*nota5[1];
    }
    return caixa;
  }
  this.consultarValor=ver;
  var tira=function (value) {
    if(value%5==0){
      var n100=0, n50=0, n20=0, n10=0, n5=0;
      if((value/100>0)&&(nota100[1]>0)){
        var n100= (value - (value%100))/100;
        if(n100<=nota100[1]){
          var resto= value%100;
        }
          else{
            var extra=(((value-(value%100))/100)-nota100[1])*100;
            n100=nota100[1];
            resto=extra+(value%100);
        }
      }
      if((resto/50>0)&&(nota50[1]>0)){
      var n50= (resto - (resto%50))/50;
        if(n50<=nota50[1]){
          var resto= resto%50;
        }
          else{
            var extra=(((resto-(resto%50))/50)-nota50[1])*50;
            n50=nota50[1];
            resto=extra+(value%50);
        }
      }
      if((resto/20>0)&&(nota20[1]>0)){
      var n20= (resto - (resto%20))/20;
        if(n20<=nota20[1]){
          var resto= resto%20;
        }
          else{
            var extra=(((resto-(resto%20))/20)-nota20[1])*20;
            n20=nota20[1];
            resto=extra+(value%20);
        }
      }

      if((resto/10>0)&&(nota1[1]>0)){
      var n10= (resto - (resto%10))/10;
        if(n10<=nota1[1]){
          var resto= resto%10;
        }
          else{
            var extra=(((resto-(resto%10))/10)-nota50[1])*10;
            n10=nota10[1];
            resto=extra+(value%10);
        }
      }
      if((resto/5>0)&&(nota5[1]>0)){
      var n5= (resto - (resto%5))/5;
        if(n5<=nota5[1]){
        }
          else{
            return false;
        }
      nota100[1]=nota100[1]-n100;
      nota50[1]=nota50[1]-n50;
      nota20[1]=nota20[1]-n20;
      nota1[1]=nota1[1]-n10;
      nota5[1]=nota5[1]-n5;
      }
      else {
        return "retirada rejeitada";
      }
    }
  }
this.retirar=tira;
}
