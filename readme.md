# 📚 Guia Completo de Propriedades CSS

Um guia de referência interativo e abrangente para propriedades CSS, organizado por categorias de uso com exemplos e explicações detalhadas.

## 📁 Estrutura dos Arquivos

```
projeto-guia-css/
├── index.html          # Arquivo principal HTML
├── css/
│   └── styles.css      # Estilos do guia
├── js/
│   └── script.js       # Funcionalidades JavaScript
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### Método 1: Arquivo Local
1. **Baixe todos os arquivos** mantendo a estrutura de pastas
2. **Abra o `index.html`** em qualquer navegador moderno
3. **Funciona offline** - não precisa de internet após baixar

### Método 2: Servidor Local (Recomendado para desenvolvimento)
```bash
# Se você tem Python instalado:
python -m http.server 8000

# Ou se tem Node.js:
npx http-server

# Acesse: http://localhost:8000
```

## 📋 Conteúdo do Guia

### Seções Organizadas:
- **📏 Dimensões e Tamanho** - width, height, min/max valores
- **📦 Espaçamento** - padding, margin, box-sizing
- **🔲 Bordas** - border, border-radius, outline
- **🎨 Cores e Fundos** - background-color, color, opacity
- **📝 Tipografia** - font-family, font-size, text-align
- **📐 Layout e Posicionamento** - display, position, z-index
- **🔄 Flexbox** - flex-direction, justify-content, align-items
- **✨ Efeitos e Interação** - transition, transform, box-shadow
- **📋 Controles de Formulário** - resize, white-space

### Formato da Tabela:
| Propriedade | Descrição | Valores | Detalhes |
|-------------|-----------|---------|----------|
| Cada propriedade tem explicações detalhadas dos valores possíveis |

## 💡 Funcionalidades

### ✅ Atual:
- **Tabela responsiva** que se adapta a diferentes telas
- **Exemplo de textarea** demonstrando propriedades em ação
- **Hover effects** para melhor experiência visual
- **Navegação por teclado** para acessibilidade
- **Design otimizado para impressão**

### 🔮 Futuras (preparadas no JS):
- Sistema de busca de propriedades
- Filtros por categoria
- Modo escuro/claro
- Exportação para PDF
- Exemplos interativos

## 🖨️ Para Impressão

O guia está otimizado para impressão:
- **Use Ctrl+P** no navegador
- **Selecione "Mais configurações"**
- **Marque "Gráficos de fundo"** para manter as cores
- **Paisagem** recomendado para melhor visualização da tabela

## 📱 Responsividade

- **Desktop**: Tabela com 4 colunas
- **Tablet**: Tabela adaptada
- **Mobile**: Layout vertical com labels

## 🛠️ Personalização

### Alterar Cores:
No arquivo `css/styles.css`, modifique as variáveis de cor:
```css
/* Linha 43 - Cor principal */
background: linear-gradient(45deg, #2196F3, #21CBF3);

/* Linha 156 - Cor de destaque */
color: #2196F3;
```

### Adicionar Propriedades:
No arquivo `index.html`, adicione novas linhas seguindo o padrão:
```html
<div class="property-row">
    <div class="property-name">nova-propriedade</div>
    <div>Descrição da propriedade</div>
    <div class="values">valores, possíveis</div>
    <div>
        <strong>valor1:</strong> Explicação<br>
        <strong>valor2:</strong> Explicação
    </div>
</div>
```

## 🌐 Compatibilidade

- **Navegadores**: Chrome, Firefox, Safari, Edge (versões modernas)
- **Dispositivos**: Desktop, tablet, smartphone
- **Impressão**: Otimizado para A4 paisagem

## 📝 Licença

Este projeto é de uso livre para fins educacionais e profissionais.

## 🤝 Contribuições

Para adicionar novas propriedades ou melhorias:
1. Mantenha a estrutura da tabela
2. Siga o padrão de documentação
3. Teste a responsividade
4. Verifique a funcionalidade de impressão

---

**Desenvolvido para desenvolvedores web** 💻
**Mantido sempre atualizado com as melhores práticas CSS** ✨