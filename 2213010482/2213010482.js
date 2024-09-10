$(document).ready(function() {
    // Submit form using Ajax
    $('#faqForm').submit(function(e) {
        e.preventDefault(); // Prevent the default form submission
        let data = new FormData(this);
        console.log(data)
        $.ajax({
            type: 'POST',//MENGIRIM GAMBAR GAK BISA PAKE GET, HARUS PAKE POST
            url: '2213010482/2213010482.php',
            data: data,
            enctype: 'multipart/form-data',
            contentType: false,
            cache: false,
            processData: false,
            success: function(response) {
                // Handle the response from the server

                // You can update the UI or perform other actions as needed

                // Tambahkan kelas 'tersembunyi' untuk menyembunyikan kolom jawaban
                $('#faqForm textarea[name="answer"]').addClass('hidden');
                $('#jawaban').html(response);
                // console.log(response)
            },
            error: function(error) {
                console.log(error);
            }
        });
        return false;
    });

    // Alihkan visibilitas kolom jawaban berdasarkan kategori yang dipilih
    $('#faqForm select[name="category"]').change(function() {
        var selectedCategory = $(this).val();

        
            // Hapus kelas 'tersembunyi' jika kategori yang dipilih adalah 'teknis'
        if (selectedCategory === 'Tampilkan') {
            $('#faqForm textarea[name="answer"]').removeClass('hidden');
        } else {
            // Tambahkan kelas 'tersembunyi' untuk kategori lainnya
            $('#faqForm textarea[name="answer"]').addClass('hidden');
        }
    });
});
