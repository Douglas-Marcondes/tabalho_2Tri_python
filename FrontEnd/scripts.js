// Toggle do menu mobile
document.querySelector('.botao-menu-mobile').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

// Toggle do dark mode
const darkModeToggle = document.getElementById('botao-tema-escuro');
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

function toggleDarkMode(enable) {
    if (enable) {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.remove('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Verifica preferência do sistema
if (darkModeMediaQuery.matches) {
    toggleDarkMode(true);
}

// Alternar manualmente
darkModeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-mode');
    toggleDarkMode(!isDark);
    
    // Salva preferência no localStorage
    localStorage.setItem('darkMode', !isDark);
});

// Verifica preferência salva
const savedMode = localStorage.getItem('darkMode');
if (savedMode === 'true') {
    toggleDarkMode(true);
} else if (savedMode === 'false') {
    toggleDarkMode(false);
}

// Fechar menu ao clicar em um item (mobile)
document.querySelectorAll('.menu a').forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            document.querySelector('.menu').style.display = 'none';
        }
    });
});

// Feedback visual para botões
document.querySelectorAll('button, a[href]').forEach(btn => {
    btn.addEventListener('mousedown', () => {
        btn.style.transform = 'scale(0.98)';
    });
    btn.addEventListener('mouseup', () => {
        btn.style.transform = 'scale(1)';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
    });
});
