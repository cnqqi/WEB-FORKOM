$(document).ready(function(){
    $("#aduan_group5").click(function(){
        $.get("pages/forum/prosesforum.php", {page:"aduan"}, function(data){
            $("#penampil_group5").html(data);
        });
    });
    $("#menfess_group5").click(function(){
        $.get("pages/forum/prosesforum.php", {page:"menfess"}, function(data){
            $("#penampil_group5").html(data);
        });
    });
    $("#tanya_group5").click(function(){
        $.get("pages/forum/prosesforum.php", {page:"tanya"}, function(data){
            $("#penampil_group5").html(data);
        });
    });
});