function aplicarTema(escuro) {
    document.body.classList.toggle('dark-mode', escuro);
    const botao = document.getElementById('botao-tema-escuro');
    botao.innerHTML = escuro ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

const temaEscuro = localStorage.getItem('tema') === 'dark' || 
                  (!localStorage.getItem('tema') && window.matchMedia('(prefers-color-scheme: dark)').matches);
aplicarTema(temaEscuro);

document.getElementById('botao-tema-escuro').addEventListener('click', () => {
    const novoEstado = !document.body.classList.contains('dark-mode');
    aplicarTema(novoEstado);
    localStorage.setItem('tema', novoEstado ? 'dark' : 'light');
});
