document.getElementById('botao-tema-escuro').addEventListener('click', function() {
    const escuro = document.body.classList.toggle('dark-mode');
    localStorage.setItem('tema', escuro ? 'dark' : 'light');
    this.innerHTML = escuro ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

if (localStorage.getItem('tema') === 'dark' || 
   (!localStorage.getItem('tema') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark-mode');
    document.getElementById('botao-tema-escuro').innerHTML = '<i class="fas fa-sun"></i>';
}
