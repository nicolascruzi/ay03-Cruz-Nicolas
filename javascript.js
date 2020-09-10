$(document).ready(function(){
    console.log("hola")
    
    $("#elaboracion").mouseenter(function(){
        $("#elaboracion").append("agregando text0...");
        });
    $("#boton").mouseenter(function(){
        $("#maquinaria").append("Oyas, fermentador, malla, termometro, etc...");
        });
    $("#subtitulo").mouseenter(function(){
        $("#subtitulo").text("Se ha cambiado el titulo");
        });
    $("#boton").mouseenter(function(){
        $("#boton").css("background-color", "blue");

    var escondido = false;
    $("#boton").click(function(){
        if (escondido == true) {
            escondido = false;
            $("#tipos").show();
        }   else {
            escondido = true;
            $("#tipos").hide();
        }
    })
    })
})
    


