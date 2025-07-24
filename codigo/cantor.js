function Cantor( ){
    this.balotasSacadas = new Array(75).fill(false)
    this.ultimaBalota = 0;

    this.tabla = [];
    for (var f = 0; f < 15; f++){
        this.tabla[f] = [];
        for(var c = 0; c < 5; c++) {
            this.tabla[f][c]= c * 15 + f + 1;
        }
    }
    //metodo para iniciar
    this.iniciar = function(){
        this.balotasSacadas = new Array(75).fill(false);
    }
    //metodo para sacar balotas
    this.sacarBalota = function() {
        let totalsacadas = this.balotasSacadas.filter(valor => valor == true).length;
        if(totalsacadas < 75){
        let balota = Math.floor(Math.random() * 75) + 1;
        while(this.balotasSacadas[balota - 1]){
balota = Math.floor(Math.random() * 75) + 1;
        }
        this.balotasSacadas[balota - 1] = true;
        this.ultimaBalota = balota;
    }
    else{
        window.alert("Ya se acabaron las balotas")
    }
}
}