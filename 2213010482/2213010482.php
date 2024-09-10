<?php
if(!empty($_POST['question'])){
    $question = $_POST["question"];
    $answer = $_POST["answer"];
    $photo = $_FILES["photo"];
    

    $img_url = $photo['tmp_name'];
    $str = file_get_contents($img_url);
    $b64img=base64_encode($str);

    // Lakukan sesuatu dengan pertanyaan dan jawaban yang diterima, misalnya menyimpan ke database
    // Di sini kita hanya mencetak hasil untuk tujuan demonstrasi
    echo "<div class='result-box center-result'>";
    echo "Question: $question <br>";
    echo "Answer: $answer <br>";
    echo "Photo: <img src='data:image/jpg;base64,$b64img' />";
    echo "</div>";
}else{
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FAQ Form</title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="2213010482/2213010482.css">
</head>

<body>
    <div class="container faq-form-container">
        <h2 class="text-center">Frequently Asked Questions</h2>
        <form id="faqForm" name="faqForm" action="process.php" method="post" enctype="multipart/form-data">

            <div class="form-group">
                <label for="question">Your Question:</label>
                <input type="text" name="question" class="form-control" required>
            </div>

            <div class="form-group">
                <label for="answer">Your Answer:</label>
                <textarea name="answer" class="form-control" required></textarea>
            </div>

            <div class="form-group">
                <label for="photo">Upload Photo:</label>
                <input type="file" name="photo" class="form-control-file">
            </div>
            <div class="form-group">
                <label for="category">Category:</label>
                <select name="category" class="form-control" id="pilih">
                    <option selected>Open this select menu</option>
                    <option value="Sembunyikan">Sembunyi</option>
                    <option value="Tampilkan">Tampilkan</option>
                    <!-- Add more options as needed -->
                </select>
            </div>

            <button type="submit" class="btn btn-success ">Submit</button>
        </form>
        <div id='jawaban'></div>

        <!-- jQuery library -->
        <script src="./jquery.js"></script>
        <script src="./jquery-3.7.1.min.js"></script>
        <script src="2213010482/2213010482.js"></script>

    </div>
</body>

</html>
<?php } ?>