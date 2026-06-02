document.addEventListener('DOMContentLoaded', () => {


    // 1. Saudação Dinâmica baseada na hora do dia
    const saudacaoElement = document.getElementById('saudacao');
    const horaAtual = new Date().getHours();
    let mensagemSaudacao = '';

    if (horaAtual >=5 && horaAtual < 12) {
        mensagemSaudacao = '☀️ Bom dia, Rafael!';
    } else if (horaAtual >= 12 && horaAtual < 18) {
        mensagemSaudacao = '☕ Boa tarde, Rafael!';
    } else {
        mensagemSaudacao = '🌙 Boa noite, Rafael!';
    }
    saudacaoElement.textContent = mensagemSaudacao;

});