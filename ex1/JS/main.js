function Conta(saldo=500) {
  if (saldo <500){
     throw "saldo inicial invalido";
  }
  this.saldo=saldo;
  var vetor1=[];
  this.historico=vetor1;
  this.historico[0]="abertura: +" + saldo;
  var saque = function (quant){
    if(4<quant && this.saldo>quant){
      var tam=this.historico.length;
      this.historico[tam]="saque: -" + quant;
      this.saldo-=quant;
      return true;
    }
    if(5>quant || this.saldo<quant){
      return false;
    }
  }
  this.sacar = saque;
  var dinheiro=function (money) {
    if(1000<money){
      return false;
    }
    if(1000>=money){
      var tam=this.historico.length;
      this.historico[tam]="deposito dinheiro: +" + money;
      this.saldo+=money;
      return true;
    }
  }
  this.depositarDinheiro=dinheiro;
  var cheque=function (money) {
    if(10000<money){
      return false;
    }
    if(10000>=money){
      var tam=this.historico.length;
      this.historico[tam]="deposito cheque: +" + money;
      this.saldo+=money;
      return true;
    }
  }
  this.depositarCheque=cheque;
  var transferencia=function (value, contaB) {
    if (value>5000) {
          algo="transferencia excede limite de 5000";
          throw "transferencia excede limite de 5000";
        }
    if (value>this.saldo) {
        throw "saldo insuficiente para transferencia";
    }
    if(5000>=value){
      this.saldo-=value;
      this.historico[this.historico.length]="transferencia: -"+value;
      contaB.saldo+=value;
      contaB.historico[contaB.historico.length]="transferencia: +"+value;
      return true;
    }
  }
  this.transfere=transferencia;
}
