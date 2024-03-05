function criptografar() {
    const text_textarea = document.querySelector('.content__section__textarea').value;

    const new_text = text_textarea.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');

    const board = document.querySelector('.content__container__board');
    board.innerHTML = new_text;
}

function descriptografar() {
    const text_textarea = document.querySelector('.content__section__textarea').value;

    const new_text = text_textarea.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');

    const board = document.querySelector('.content__container__board');
    board.innerHTML = new_text;
}