
let mensagem = document.getElementById('mensagem')

function changeText(text) {
    mensagem.innerHTML = `<textarea id="message_area" readonly></textarea><button class="button" id="copy" onclick="copy()">Copiar</button>`
    document.getElementById('message_area').innerText = text

}

function code() {
    let text = document.getElementById('apresentacao__conteudo__textoinserir')

    if (text.value.trim() === '') {
        alert('Digite um texto para criptografar!')
    } else {
        text = text.value.toLowerCase().replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat')
        changeText(text)
    }
}

function decode() {
    let text = document.getElementById('apresentacao__conteudo__textoinserir')
    if (text.value.trim() === '') {
        alert('Digite um texto para descriptografar!')
    } else {
        text = text.value.toLowerCase().replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u')
        changeText(text)
    }
}

function copy() {
    navigator.clipboard.writeText(document.getElementById('message_area').value)
    let copy = document.getElementById('copy')
    copy.innerHTML = 'Copiado'
    copy.addEventListener('mouseleave', ()=>{
        copy.innerText = 'Copiar'
    })
}
