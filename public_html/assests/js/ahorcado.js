function Ahorcado(palabra,modelToView){
    alert(palabra);
    if(palabra.length<1)
        throw "Se ha producido un error. Para jugar la palabra debe de existir";
    else
        this.intentos;
        this.letras = palabra.split("");
        this.estado = [];
        this.modelToView=modelToView;
        this.reset();
};

Ahorcado.prototype.reset=function(){
    for(i=0;i<this.letras.length;i++){
        this.estado[i]=false;
    }
    this.intentos=6;
    this.modelToView(this);
};

Ahorcado.prototype.colocarLetra=function(letra){
    
    //if(esLetra(letra)){
        alert(letra);
        if(this.existeLetraEnPalabra(letra)){
            var pos = this.getPosicionLetraEnPalabra(letra);
            for(i=0;i<pos.length;i++){
                this.estado[pos[i]]=true;
                
            }
            
        }else{
            this.intentos--;
        }
        
        this.modelToView(this);
        //return existeLetraEnPalabra(letra);
    //}else{
        //throw "El juego solo permite emplear letras";
    //}
        
};

Ahorcado.prototype.existeLetraEnPalabra=function(letra){
    for(i=0;i<this.letras.length;i++){
        if(this.letras[i]===letra){
            return true;
        }
    }
    return false;
};

Ahorcado.prototype.getPosicionLetraEnPalabra=function(letra){
    var posiciones = [];
    for(i=0;i<this.letras.length;i++){
        if(this.letras[i]===letra){
            posiciones.push(i);
        }
    }
    if(posiciones.length===0)
        throw "La letra no existe";
    else
        return posiciones;
};


