function criptografar() {
    const notUseContainer = document.querySelector('.content__nouse');
    notUseContainer.style.display = 'none';
    const viewBoard = document.querySelector('.content__container');
    viewBoard.style.display = 'flex';

    const textarea = document.querySelector('.content__section__textarea');

    const text = textarea.value;

    const new_text = text.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');

    const board = document.querySelector('.content__container__board');
    board.innerHTML = new_text;
    textarea.value = '';
}

function descriptografar() {
    const notUseContainer = document.querySelector('.content__nouse');
    notUseContainer.style.display = 'none';
    const viewBoard = document.querySelector('.content__container');
    viewBoard.style.display = 'flex';
    
    const textarea = document.querySelector('.content__section__textarea');

    const text = textarea.value;

    const new_text = text.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');

    const board = document.querySelector('.content__container__board');
    board.innerHTML = new_text;
    textarea.value = '';
}

function copy() {
    const board = document.querySelector('.content__container__board');
    const text = board.textContent;

    navigator.clipboard.writeText(text)
    .then(() => {
        // console.log('Texto copiado com sucesso!');
    })
    .catch((e) => {
        // console.error('Erro!', e);
    })
    board.innerHTML = '';
}