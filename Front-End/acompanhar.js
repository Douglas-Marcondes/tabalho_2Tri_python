const temaAtual = localStorage.getItem('tema') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

if (temaAtual === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('botao-tema-escuro').innerHTML = '<i class="fas fa-sun"></i>';
}

document.getElementById('botao-tema-escuro').onclick = function() {
    const estaEscuro = document.body.classList.toggle('dark-mode');
    localStorage.setItem('tema', estaEscuro ? 'dark' : 'light');
    this.innerHTML = estaEscuro ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
};
