 function codificar() {
        var entrada = texto.value;
        var salida = "";
    
        if (entrada == "") {
            return false;
        }
    
        for (var i = 0; i < entrada.length; i++) {
            if ((entrada[i] != entrada[i].toUpperCase()) || entrada[i] == " ") {
                if (entrada[i] == 'a') {
                    salida += 'ai';
                } else if (entrada[i] == 'e') {
                    salida += 'enter';
                } else if (entrada[i] == 'i') {
                    salida += 'imes';
                } else if (entrada[i] == 'o') {
                    salida += 'ober';
                } else if (entrada[i] == 'u') {
                    salida += 'ufat';
                } else {
                    salida += entrada[i];
                }
            } else {
                alert("No se permiten letras mayusculas o caracteres especiales!!!");
                return;
            }
        }
    
        txtSalida.innerHTML = salida;
        texto.value = "";
        texto.focus();
    
        txtSalida.style.textAlign = "start";
        btnCopiar.style.display = "flex";
        document.getElementById("interr").style.display = "none";
    }
    
    function desencriptar() {
        var entrada = texto.value;
        var salida = "";
    
        if (entrada == "") {
            return false;
        }
    
        for (var i = 0; i < entrada.length; i++) {
            if ((entrada[i] != entrada[i].toUpperCase()) || entrada[i] == " ") {
                if (entrada[i] == 'a' && i < entrada.length - 1) {
                    salida += 'a';
                    if (entrada[i + 1] == "i") {
                        i++;
                    }
                } else if (entrada[i] == 'e' && i < entrada.length - 4) {
                    salida += 'e';
                    if (entrada[i + 1] == "n" && entrada[i + 2] == "t" && entrada[i + 3] == "e" && entrada[i + 4] == "r") {
                        i += 4;
                    }
                } else if (entrada[i] == 'i' && i < entrada.length - 3) {
                    salida += 'i';
                    if (entrada[i + 1] == "m" && entrada[i + 2] == "e" && entrada[i + 3] == "s") {
                        i += 3;
                    }
                } else if (entrada[i] == 'o' && i < entrada.length - 3) {
                    salida += 'o';
                    if (entrada[i + 1] == "b" && entrada[i + 2] == "e" && entrada[i + 3] == "r") {
                        i += 3;
                    }
                } else if (entrada[i] == 'u' && i < entrada.length - 3) {
                    salida += 'u';
                    if (entrada[i + 1] == "f" && entrada[i + 2] == "a" && entrada[i + 3] == "t") {
                        i += 3;
                    }
                } else {
                    salida += entrada[i];
                }
            } else {
                alert("No se permiten letras mayusculas o caracteres especiales!!!");
                return;
            }
        }
    
        txtSalida.innerHTML = salida;
        texto.value = "";
        texto.focus();
    
        txtSalida.style.color = "black";
        txtSalida.style.fontSize = "18px";
        btnCopiar.style.display = "inline-block";
        document.getElementById("interr").style.display = "none";
    }
    
    function copiar() {
        var text_to_copy = txtSalida.innerHTML;
    
        navigator.clipboard.writeText(text_to_copy).then(
                function() {
                    alert("Texto copiado!!"); // success 
                })
            .catch(
                function() {
                    alert("Falla en copiar, intentar mas tarde!!)"); // error
                });
    }
    
    function pintar(cor) {
        document.body.style.transition = "all 0.5s ease";
        document.body.style.backgroundColor = cor;
    }
    
    var btnCodificar = document.getElementById("btn-codificar");
    var btnDecodificar = document.getElementById("btn-decodificar");
    var btnCopiar = document.getElementById("btn-copiar");
    
    var texto = document.getElementById("txt-cod");
    var txtSalida = document.getElementById("txt-respuesta");
    
    btnCodificar.onclick = codificar;
    btnDecodificar.onclick = desencriptar;
    btnCopiar.onclick = copiar;