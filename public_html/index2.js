var ahorcado
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
        //palabraAMostrar+=" ";
    }
    //alert(palabraAMostrar);
    $("#contenidoPalabra").text(palabraAMostrar);
    $("#numeroIntentos").text(ahorcado.intentos);
        srcImg = "assests/img/"+(6-ahorcado.intentos)+".jpg";
        $("#imagenAhorcado").attr("src", srcImg);
    if(ahorcado.isFinalizado()===0){
        if(ahorcado.intentos<3){

            $("#numeroIntentos").css({"color":"red","font-size":"30px"});
            $('#numeroIntentos').addClass('animated bounceIn infinite');
            //$("#numeroIntentos").css("transform", "scale(2,2)");
            //$("#numeroIntentos").css("animation","pulse 5s infinite");
        }
        
    }else{
        $(".letra").attr("draggable","false");
        if(ahorcado.isFinalizado()>0){
            showModalVictoria(ahorcado.getNumIntentos());
            //$("#myModal").modal('show');
            //$("#myModal").modal('show');
            //alert("GANASTE!");
            //location.reload();
        }else{
            alert(ahorcado.palabra);
            showModalDerrota(ahorcado.palabra);
            //alert("PERDISTE!");
        }
    }
}

function reloadPage(){
    location.reload();
}

function showModalVictoria(numIntentos){
   // alert("HOLA");
    var modalWindow = $("#modalAhorcado");
    modalWindow.modal('show');
    
    modalWindow.find('.modal-title').text('GANASTE!!!');
    modalWindow.find('.modal-body p').text('ENHORABUENA!!!. Has ganado, y con '+numIntentos+' intentos restantes');
    modalWindow.find('#recargaPagina').text('Jugar otra partida');    
}

function showModalDerrota(palabra){
    var modalWindow = $("#modalAhorcado");
    modalWindow.modal('show');
    
    modalWindow.find('.modal-title').text('PERDISTE!!!');
    modalWindow.find('.modal-body p').text('OHH!. Has perdido!. La palabra era '+palabra+". Ánimo para la siguiente partida");
    modalWindow.find('#recargaPagina').text('Volver a intentarlo');
    
}


function onDragStartLetra(event){
	event.dataTransfer.setData("text", $(event.target).attr("id-letra"));
};

function onDropLineaAhorcado(event){
    event.preventDefault();
    var idLetra = event.dataTransfer.getData("text");
	var elementLetra = $("[id-letra='"+idLetra+"']");
	var lineaAhorcado = event.target;
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


