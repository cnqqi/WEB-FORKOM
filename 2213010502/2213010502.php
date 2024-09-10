<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="2213010502/2213010502.css">
    <title>Form Aduan</title>
</head>
<body class="bg-light">



 <div class="container mt-5 boxaduan">
      <div class="mb-2 ">
      <h1 class="fw-bold display-3">Kirim Aduan Anda</h1>
      <h5>Aduan yang anda kirim akan terupload dan terproses maksimal 1x24 jam</h5>
      </div>
        <!-- Form -->
        <form id="complaintForm">
            <div class="mb-3">
                <label for="nama502" class="form-label">Nama</label>
                <input type="text" class="form-control" id="nama502" name="nama502" required>
            </div>
            <div class="mb-3">
                <label for="email502" class="form-label">Email</label>
                <input type="email" class="form-control" id="email502" name="email502" required>
            </div>
            <div class="mb-3">
                <label for="complaintType502" class="form-label">Jenis Aduan</label>
                <select class="form-select" id="complaintType502" name="complaintType502">
                    <option value="gambar">Aduan dengan Gambar</option>
                    <option value="teks">Aduan Hanya Teks</option>
                </select>
            </div>
            <div class="mb-3 file-input-visible502" id="file-input-container502">
                <label for="complaintFile502" class="form-label">File Gambar</label>
                <input type="file" class="form-control" id="complaintFile502" name="complaintFile502" accept="image/*">
            </div>
            <div class="mb-3">
                <label for="complaintText502" class="form-label">Deskripsi Aduan</label>
                <textarea class="form-control" id="complaintText502" name="complaintText502" rows="3" required></textarea>
            </div>
            <button type="button" class="btn btn-primary" id="submitButton502">Kirim Aduan</button>
        </form>

        <!-- Output -->
        <div id="output502" class="mt-4">
            <p id="outputName502"></p>
            <p id="outputEmail502"></p>
            <img id="outputImage502" src="" alt="Output Image" style="max-width: 100%; display: none;">
            <p id="outputComplaintType502"></p>
            <p id="outputComplaintText502"></p>
           
        </div>
    </div>   
    
    <script src="2213010502/jquery-3.7.1.min.js"></script>
    <script src="2213010502/bootstrap/js/bootstrap.min.js"></script>
    <script src="2213010502/2213010502.js"></script>
</body>
</html>


