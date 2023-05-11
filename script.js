const textArea= document.querySelector(".text-area");
const mensaje= document.querySelector(".mensaje");

/*La letra "e" es convertidad para "enter"
  La letra "i" es convertidad para "imes"
  La letra "a" es convertidad para "ai"
  La letra "o" es convertidad para "ober"
  La letra "u" es convertidad para "ufat"*/
function btnEncriptar(){
    const textoEncriptado =encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value ="";
    mensaje.style.backgroundImage ="none";
}

function btnDesencriptar(){
    const textoEncriptado =desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value ="";
    
}

function encriptar(stringEncriptado){
    let codigoMatriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado=stringEncriptado.toLowerCase()

    for (let i=0; i < codigoMatriz.length;i ++){
        if(stringEncriptado.includes(codigoMatriz[i][0])){
     stringEncriptado=stringEncriptado.replaceAll(codigoMatriz[i][0],codigoMatriz[i][1])
        }
    }
    return stringEncriptado 
}

function desencriptar(stringDesencriptado){
    let codigoMatriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado=stringDesencriptado.toLowerCase()

    for (let i=0; i < codigoMatriz.length;i ++){
        if(stringDesencriptado.includes(codigoMatriz[i][1])){
            stringDesencriptado=stringDesencriptado.replaceAll(codigoMatriz[i][1],codigoMatriz[i][0])
        }
    }
    return stringDesencriptado
}

 




