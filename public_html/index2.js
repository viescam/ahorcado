var ahorcado
$(document).ready(function() {
    var frutas = ['MANZANA','MELOCOTON','PIMIENTO'];
    var aleatorio = Math.round(Math.random()*2);
    ahorcado = new Ahorcado(frutas[aleatorio],modelToView);
});

function modelToView(ahorcado){
    var palabraAMostrar ="";
    for(i=0;i<ahorcado.letras.length;i++){
        if(ahorcado.estado[i]===true){
            palabraAMostrar+=ahorcado.letras[i];
        }else{
            palabraAMostrar+="_";
        }
        //palabraAMostrar+=" ";
    }
    //alert(palabraAMostrar);
    $("#contenidoPalabra").text(palabraAMostrar);
    if(ahorcado.intentos<3){
        //$("#numeroIntentos").css({"color":"red","font-size":"20px","animation" : "pulse 5s infinite"});
        $("#numeroIntentos").css("animation","pulse 5s infinite");
    }
    $("#numeroIntentos").text(ahorcado.intentos);
}


function onDragStartLetra(event){
	event.dataTransfer.setData("text", $(event.target).attr("id-letra"));
};

function onDropLineaAhorcado(event){
    event.preventDefault();
    var idLetra = event.dataTransfer.getData("text");
	var elementLetra = $("[id-letra='"+idLetra+"']");
	var lineaAhorcado = event.target;
	
	//$(lineaAhorcado).text($(elementLetra).text());
        //$(lineaAhorcado).find("div").text($(elementLetra).text());
        var letraAColocar = $(elementLetra).text()
        ahorcado.colocarLetra(letraAColocar);
        if(ahorcado.existeLetraEnPalabra(letraAColocar)){
            $(elementLetra).css("background-color","green");
            $(elementLetra).css("transform", "scale(0.75,0.75)");
        }else{
            $(elementLetra).css("background-color","red");
            $(elementLetra).css("transform", "scale(0.5,0.5)");
        }
	$(elementLetra).removeAttr("draggable");
};

function onDragOverLineaAhorcado(event){
    event.preventDefault()
};











/*function onDragStartLetra(event){
    
    event.dataTransfer.setData("text", event.target.id);
};

function onDropLineaAhorcado(event){
    alert("hola");
    event.preventDefault();
    
    var idLetra = event.dataTransfer.getData("text");
    alert($(idLetra).attr('class'));
    alert($(idLetra).text());
    var lineaAhorcado = event.currentTarget;
    var contentAhorcado
    //$(lineaAhorcado).text("A");
    $(lineaAhorcado).find("div").text("A");
    
};



function onDragOverLineaAhorcado(event){
    event.preventDefault()
};*/


