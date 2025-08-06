const tema = localStorage.getItem('tema') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

if (tema === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('botao-tema-escuro').innerHTML = '<i class="fas fa-sun"></i>';
}

document.getElementById('botao-tema-escuro').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const temaNovo = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('tema', temaNovo);
    this.innerHTML = temaNovo === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});
