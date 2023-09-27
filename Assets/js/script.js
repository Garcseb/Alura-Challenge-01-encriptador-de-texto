function encriptar() {
    // Obtener el texto original ingresado por el usuario
    var textoOriginal = document.getElementById("texto").value;
    var textoEncriptado = "";
  
    // Recorrer cada letra del texto original
    for (var i = 0; i < textoOriginal.length; i++) {
      var letra = textoOriginal[i];
  
      // Realizar la encriptación según las reglas establecidas
      if (letra === "a") {
        textoEncriptado += "ai";
      } else if (letra === "e") {
        textoEncriptado += "enter";
      } else if (letra === "i") {
        textoEncriptado += "imes";
      } else if (letra === "o") {
        textoEncriptado += "ober";
      } else if (letra === "u") {
        textoEncriptado += "ufat";
      } else {
        // Mantener las letras que no requieren encriptación        
        textoEncriptado += letra;
      }
    }
  
    // Mostrar el resultado en el campo de texto correspondiente  
    document.getElementById("resultado").value = textoEncriptado;
    toggleImagen();
  }
  
  function desencriptar() {
    // Obtener el texto encriptado ingresado por el usuario
    var textoEncriptado = document.getElementById("texto").value;
    var textoOriginal = "";
  
    // Recorrer cada letra del texto encriptado
    for (var i = 0; i < textoEncriptado.length; i++) {
      var letra = textoEncriptado[i];
  
      // Realizar la desencriptación según las reglas establecidas
      if (letra === "a" && textoEncriptado[i + 1] === "i") {
        textoOriginal += "a";
        i++;
      } else if (letra === "e" && textoEncriptado.substring(i, i + 5) === "enter") {
        textoOriginal += "e";
        i += 4;
      } else if (letra === "i" && textoEncriptado.substring(i, i + 4) === "imes") {
        textoOriginal += "i";
        i += 3;
      } else if (letra === "o" && textoEncriptado.substring(i, i + 4) === "ober") {
        textoOriginal += "o";
        i += 3;
      } else if (letra === "u" && textoEncriptado.substring(i, i + 4) === "ufat") {
        textoOriginal += "u";
        i += 4;
      } else {
        // Mantener las letras que no requieren desencriptación
        textoOriginal += letra;
      }
    }
    
    // Mostrar el resultado en el campo de texto correspondiente
    document.getElementById("resultado").value = textoOriginal;
    toggleImagen();
  }

  function toggleImagen() {
    var texto = document.getElementById("resultado").value;
    var imagen = document.getElementById("imagen");
    var textoImagen = document.getElementById ("imagen-texto")
    var textoImagen2 = document.getElementById ("imagen-texto2")
  
    if (texto.trim().length > 0) {
      imagen.style.display = "none"; // Ocultar la imagen si hay texto en el resultado
      textoImagen.style.display = "none";
      textoImagen2.style.display = "none";
    } else {
      imagen.style.display = "block"; // Mostrar la imagen si no hay texto en el resultado
      textoImagen.style.display = "block";
      textoImagen2.style.display = "block";
    }
  }

  
function copiarResultado() {
  var resultado = document.getElementById("resultado");

  resultado.select();
  resultado.setSelectionRange(0, 99999); // Para dispositivos móviles

  document.execCommand("copy");
  alert("Texto copiado al portapapeles: " + resultado.value);
}