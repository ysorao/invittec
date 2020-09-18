
$(function() {

    $('#result').hide();

   // ALMACENAR DATOS
   $('#app-form').submit(function(e) {
       const posData = {
           nombre: $('#nombre').val(),
           cedula: $('#cedula').val(),
           expedida: $('#expedida').val(),
           sociedad: $('#sociedad').val(),
           nit: $('#nit').val(),
       };
       
       $.post('app-add.php', posData, function(response) {
        $('#exampleModal').modal('show');
           $('#app-form').trigger('reset');
           $('#result').html(response);
           $('#result').show();
       });
       e.preventDefault();
   });
});



function nombrefirma(){
    var nom = document.getElementById('nombre').value;
    var ced = document.getElementById('cedula').value;

    document.getElementById("firma").innerHTML = nom;
    document.getElementById("documento").innerHTML = ced;

}

function fecha(){
    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
        var f=new Date();
        var fec = (f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
        document.getElementById("fecha").innerHTML = fec;

}