$(document).ready(function(){
    $("#hasil_493").hide();
    $("#menfes_493").addClass("sembunyi_493");
    $("#kontener_493").addClass("sembunyi_493");
    $("#pilih_493").change(function(){
        if ($("#pilih_493").val() == "1"){
            $("#kontener_493").removeClass("sembunyi_493");
            $("#kontener_493").addClass("muncul_493");
            $("#menfes_493").addClass("sembunyi_493");
            $("#menfes_493").removeClass("muncul_493");
        }
        else if ($("#pilih_493").val() == "2"){
            $("#kontener_493").addClass("sembunyi_493");
            $("#kontener_493").removeClass("muncul_493");
            $("#menfes_493").removeClass("sembunyi_493");
            $("#menfes_493").addClass("muncul_493");
        }
    });
    $("#kirim_493").click(function(){
        // var keywordValue = $("#tulis_493").val().toLowerCase();
        // if (keywordValue === "!kom"){
        //     alert("berhasil");
        // }
        // else {
        //     alert("gagal");
        // }
        var pesan = $("#tulis_493").val();
        $.get("2213010493/proses_2210310493.php",{
            menfes : pesan
        },function(data){
            $("#hasil_493").before(data);
        });
    });
});