const temaSalvo = localStorage.getItem('tema');
const preferenciaSistema = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const temaAtual = temaSalvo || preferenciaSistema;

document.body.classList.toggle('dark-mode', temaAtual === 'dark');
document.getElementById('botao-tema-escuro').innerHTML = temaAtual === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

document.getElementById('botao-tema-escuro').addEventListener('click', () => {
    const temaNovo = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('tema', temaNovo);
    document.getElementById('botao-tema-escuro').innerHTML = temaNovo === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});
