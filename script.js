const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/*La letra "e" es convertida para "enter"
  La letra "i" es convertida para "imes"
  La letra "a" es convertida para "ai"
  La letra "o" es convertida para "ober"
  La letra "u" es convertida para "ufat"*/
function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}

function btnDesencriptar() {
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
}

function encriptar(stringEncriptado) {
  let codigoMatriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
  ];
  stringEncriptado = stringEncriptado.toLowerCase();

  if (stringEncriptado.trim() === "") {
    alert("No hay texto a encriptar");
    return stringEncriptado;
  }

  for (let i = 0; i < codigoMatriz.length; i++) {
    if (stringEncriptado.includes(codigoMatriz[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(
        codigoMatriz[i][0],
        codigoMatriz[i][1]
      );
    }
  }
  return stringEncriptado;
}

function desencriptar(stringDesencriptado) {
  let codigoMatriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
  ];
  stringDesencriptado = stringDesencriptado.toLowerCase();

  if (stringDesencriptado.trim() === "") {
    alert("No hay texto a desencriptar");
    return stringDesencriptado;
  }

  for (let i = 0; i < codigoMatriz.length; i++) {
    if (stringDesencriptado.includes(codigoMatriz[i][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(
        codigoMatriz[i][1],
        codigoMatriz[i][0]
      );
    }
  }
  return stringDesencriptado;
}

function btnCopiar() {
  const mensaje = document.querySelector(".mensaje");

  if (mensaje.value.trim() === "") {
    // No hay texto para copiar
    alert("No se ha encontrado texto para copiar");
    return;
  }

  // Copiar el texto al portapapeles utilizando la API Clipboard
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(mensaje.value)
      .then(() => {
        showSpam();
      })
      .catch((error) => {
        console.error("Error al copiar el texto al portapapeles:", error);
      });
  } else {
    // Utilizar una estrategia alternativa si la API Clipboard no está disponible
    alert("La función de copiar al portapapeles no es compatible en este navegador");
  }
}

function showSpam() {
  const spamMessage = document.getElementById("spamMessage");
  const modal = document.getElementById("modal");

  spamMessage.textContent = "¡Texto copiado al portapapeles!";
  modal.style.display = "block";
  modal.classList.add("show-spam");

  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("show-spam");
  }, 2000); // Ocultar el mensaje después de 2 segundos
}
