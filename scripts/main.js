document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const iconLight = document.querySelector('.icon-light');
    const iconDark = document.querySelector('.icon-dark');

    // Função para definir o tema
    function setTheme(theme) {
        body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme); // Salva a preferência do usuário

        // Os ícones serão controlados pelo CSS agora, então removemos a lógica de display aqui
        // No entanto, podemos adicionar uma classe se quisermos um controle mais granular ou animações
    }

    // Verifica a preferência do usuário ou do sistema ao carregar a página
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        setTheme(storedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Se não houver preferência, verifica a preferência do sistema operacional
        setTheme('dark');
    } else {
        setTheme('light'); // Padrão para claro
    }

    // Adiciona o evento de clique ao botão
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });
});