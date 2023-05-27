function handleFileSelect(event) {
    window.alert("archivo cargando");
    var files = event.target.files;
    for (var i = 0; i < files.length; i++) {
        var f = files[i];
        var reader = new FileReader();
        if (f.type.includes("video/mp4") || f.type.includes("video/ov") || f.type.includes("video/webm")) {
            reader.onloadend = (function (eventFile) {
                return function (e) {
                    var contenedor = document.getElementById("contenedor");
                    var contenedorVideo = document.getElementById("video")
                    contenedor.hidden = false;
                    contenedorVideo.src = e.target.result;
                }
            })(f);
            reader.readAsDataURL(f)
        } else{
            window.alert("El archivo no es un video compatible");
            break;
        }
    }


}


