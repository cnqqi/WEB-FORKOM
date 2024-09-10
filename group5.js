$(document).ready(function(){   
    $("#berandagroup5").click(function(){
        $("#resultgroup5").load("pages/beranda/berandagroup5.php");
    });

    $("#eventgroup5").click(function(){
        $("#resultgroup5").load("pages/event/eventgroup5.php");
    });
    

    $("#forumgroup5").click(function(){
        $("#resultgroup5").load("pages/forum/forumgroup5.php");
    });

    $("#informasigroup5").click(function(){
        $("#resultgroup5").load("pages/informasi/informasigroup5.php");
    });

    $("#menfessgroup5").click(function(){
        $.get("2213010493/2213010493.php"), function(data, status){
            
        };
    });
});
