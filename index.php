<!DOCTYPE html>
<html>
<head>
    <title>Gallery</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css1.css" />
</head>
<body>
    <div class="back" onclick="prev_gambar()"></div>
    <div class="kotak_galeri">
        <img class="gambar aktif" src="img/img1.jpg">
        <img class="gambar" src="img/img2.jpg">
        <img class="gambar" src="img/img3.jpg">
        <img class="gambar" src="img/img4.jpg">
        <img class="gambar" src="img/img5.jpg">
    </div>
    <div class="next" onclick="next_gambar()"></div>
    <div class="thumbnail">
        <img class="thumb1" src="img/img1.jpg" onclick="a()">
        <img class="thumb2" src="img/img2.jpg" onclick="b()">
        <img class="thumb3" src="img/img3.jpg" onclick="c()">
        <img class="thumb4" src="img/img4.jpg" onclick="d()">
        <img class="thumb5" src="img/img5.jpg" onclick="e()">
    </div>
    <script src="js2.js"></script>
</body>
</html>