
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
        
        $("#numeroIntentos").css({"color":"red","font-size":"30px"});
        $('#numeroIntentos').addClass('animated bounceIn infinite');
        //$("#numeroIntentos").css("transform", "scale(2,2)");
        //$("#numeroIntentos").css("animation","pulse 5s infinite");
    }
    $("#numeroIntentos").text(ahorcado.intentos);
    srcImg = "assests/img/"+(6-ahorcado.intentos)+".jpg";
    $("#imagenAhorcado").attr("src", srcImg);
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
            $(elementLetra).css("transform", "scale(0.8,0.8)");
        }else{
            $(elementLetra).css("background-color","red");
            $(elementLetra).css("transform", "scale(0.6,0.6)");
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


