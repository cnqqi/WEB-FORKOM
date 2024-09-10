$(document).ready(function(){
    $("#pencariankontakgroup5").on("keyup", function(){
        var value = $(this).val().toLowerCase();
        $("#tabelgroup5 tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});