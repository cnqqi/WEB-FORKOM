$(document).ready(function () {
    $("#complaintType502").change(function () {
        var complaintType = $(this).val();
        var fileInputContainer = $("#file-input-container502");

        // Atur tampilan berdasarkan pilihan jenis aduan
        if (complaintType === "gambar") {
            fileInputContainer.addClass("file-input-visible502");
        } else {
            fileInputContainer.removeClass("file-input-visible502");
        }
    });

    $("#submitButton502").click(function () {
        var name = $("#nama502").val();
        var email = $("#email502").val();
        var complaintType = $("#complaintType502").val();
        var complaintText = $("#complaintText502").val();
        var file = $("#complaintFile502")[0].files[0];

        // Validasi input
        if (!name || !email || !complaintType || !complaintText) {
            alert("Mohon isi semua kolom yang diperlukan.");
            return;
        }

        // Tampilkan output
        $("#outputName502").text("Nama: " + name);
        $("#outputEmail502").text("Email: " + email);
        $("#outputComplaintType502").text("Jenis Aduan: " + complaintType);
        $("#outputComplaintText502").text("Deskripsi Aduan: " + complaintText);

        // Tampilkan gambar yang berhasil diunggah (jika ada)
        if (complaintType === "gambar" && file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $("#outputImage502").attr("src", e.target.result).show();
            };
            reader.readAsDataURL(file);
        } else {
            // Sembunyikan gambar jika tidak ada opsi gambar terpilih
            $("#outputImage502").hide();
        }

        // Tampilkan output
        $("#output502").show();
    });
});
