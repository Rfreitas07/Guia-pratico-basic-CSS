// Guia CSS Interativo - Script Principal
document.addEventListener('DOMContentLoaded', function() {
    
    // Função para melhorar a experiência do usuário
    initializeGuide();
    
    // Adicionar funcionalidades de acessibilidade
    addAccessibilityFeatures();
    
    // Adicionar funcionalidades de busca (futuro)
    // addSearchFunctionality();
});

/**
 * Inicializa funcionalidades básicas do guia
 */
function initializeGuide() {
    // Smooth scroll para navegação (se houver âncoras futuras)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Adicionar efeito de destaque ao passar mouse nas linhas da tabela
    const propertyRows = document.querySelectorAll('.property-row');
    propertyRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Feedback visual para textarea
    const textarea = document.querySelector('.demo-textarea');
    if (textarea) {
        textarea.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });
        
        textarea.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    console.log('📚 Guia CSS carregado com sucesso!');
}

/**
 * Adiciona recursos de acessibilidade
 */
function addAccessibilityFeatures() {
    // Adicionar navegação por teclado nas linhas da tabela
    const propertyRows = document.querySelectorAll('.property-row');
    propertyRows.forEach((row, index) => {
        row.setAttribute('tabindex', '0');
        row.setAttribute('role', 'row');
        
        row.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                // Destacar temporariamente a linha selecionada
                this.style.backgroundColor = '#2196F3';
                this.style.color = 'white';
                
                setTimeout(() => {
                    this.style.backgroundColor = '';
                    this.style.color = '';
                }, 1000);
            }
        });
    });

    // Melhorar navegação por teclado
    document.addEventListener('keydown', function(e) {
        // Ctrl + F para busca futura
        if (e.ctrlKey && e.key === 'f') {
            // Preparado para funcionalidade de busca
            console.log('Busca ativada - funcionalidade futura');
        }
    });
}

/**
 * Funcionalidades que podem ser adicionadas no futuro
 */

// Função para adicionar busca (implementação futura)
function addSearchFunctionality() {
    // Aqui pode ser implementada uma funcionalidade de busca
    // por propriedades CSS específicas
}

// Função para adicionar filtros por categoria (implementação futura)
function addCategoryFilters() {
    // Filtrar propriedades por categoria (layout, tipografia, etc.)
}

// Função para adicionar modo escuro (implementação futura)
function addDarkMode() {
    // Toggle entre modo claro e escuro
}

// Função para exportar como PDF (implementação futura)
function addPDFExport() {
    // Gerar PDF do guia para download
}

// Utilitários
const utils = {
    // Debounce para otimizar eventos
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Verificar se é dispositivo móvel
    isMobile: function() {
        return window.innerWidth <= 768;
    },
    
    // Copiar texto para clipboard
    copyToClipboard: function(text) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Texto copiado:', text);
        });
    }
};

// Exportar para uso global se necessário
window.CSSGuide = {
    utils: utils,
    init: initializeGuide
};