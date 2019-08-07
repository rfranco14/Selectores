$("#todos").click(function(evento){
    //alert("Haz precionado el boton ALL!!!")
    $("*").addClass("selector")
});
$("#elemento").click(function(evento){
    $("p").addClass("selector")
});
$("#elementoid").click(function(evento){
    $("#email").addClass("selector")
});
$("#elementoclase").click(function(evento){
    $(".ejemplo").addClass("selector")
});
$("#elementoinput").click(function(evento){
    $("input").addClass("selector")
});
$("#ajax").click(function(evento){
    $.ajax({
        url:"https://swapi.co/api/planets", 
        succes: function(respuesta){
            console.log(respuesta.results);
        },
        error: function(){
            console.log("Existe un error al realizar la peticion");
        }
    });
});