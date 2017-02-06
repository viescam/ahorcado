var ahorcado;
$(document).ready(function() {
    var frutas = ['MANZANA','MELOCOTON','PIMIENTO'];
    var aleatorio = Math.round(Math.random()*2);
    ahorcado = new Ahorcado(frutas[aleatorio],modelToView,6);
});

function modelToView(ahorcado){
    var palabraAMostrar ="";
    for(i=0;i<ahorcado.letras.length;i++){
        if(ahorcado.estado[i]===true){
            palabraAMostrar+=ahorcado.letras[i];
        }else{
            palabraAMostrar+="_";
        }
            }

    $("#contenidoPalabra").text(palabraAMostrar);
    $("#numeroIntentos").text(ahorcado.getNumIntentos);
        srcImg = "assests/img/"+(6-ahorcado.getNumIntentos)+".jpg";
        $("#imagenAhorcado").attr("src", srcImg);
    if(ahorcado.isFinalizado()===0){
        if(ahorcado.getNumIntentos<3){
            $("#numeroIntentos").css({"color":"red","font-size":"40px"});            
            $('#numeroIntentos').addClass('animated bounceIn infinite');            
        }
    }else{
        $(".letra").attr("draggable","false");
        if(ahorcado.isFinalizado()>0){
            showModalVictoria(ahorcado.getNumIntentos());            
        }else{
            showModalDerrota(ahorcado.palabra);            
        }
    }
}

function reloadPage(){
    location.reload();
}

function showModalVictoria(numIntentos){
    var modalWindow = $("#modalAhorcado");
    modalWindow.modal('show');
    
    modalWindow.find('.modal-title').text('GANASTE!!!');
    modalWindow.find('.modal-body p').text('ENHORABUENA!!!. Has ganado, y con '+numIntentos+' intentos restantes');
    modalWindow.find('.modal-body p').addClass("alert alert-success");  
    modalWindow.find('#recargaPagina').text('Jugar otra partida');    
    modalWindow.find('#recargaPagina').addClass("btn-success");    
};

function showModalDerrota(palabra){
    var modalWindow = $("#modalAhorcado");
    modalWindow.modal('show');
    
    modalWindow.find('.modal-title').text('PERDISTE!!!');
    modalWindow.find('.modal-body p').text('OHH!. Has perdido!. La palabra era '+palabra+". Ánimo para la siguiente partida");
    modalWindow.find('.modal-body p').addClass("alert alert-warning");  
    modalWindow.find('#recargaPagina').text('Volver a intentarlo');  
    modalWindow.find('#recargaPagina').addClass("btn-warning");  
};

function closeModal(){
    $('#numeroIntentos').removeClass('animated bounceIn infinite');
    $("#volverAJugar").addClass('animated fadeInDown');
    $(".linea-ahorcado").css('display','none');
}

function onDragStartLetra(event){
    event.dataTransfer.setData("text", $(event.target).attr("id-letra"));
};

function onDropLineaAhorcado(event){
    event.preventDefault();
    var idLetra = event.dataTransfer.getData("text");
	var elementLetra = $("[id-letra='"+idLetra+"']");
	var lineaAhorcado = event.target;
	var letraAColocar = $(elementLetra).text();
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






