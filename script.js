const projects = [
    {
        title: 'Profitchart (mercado financeiro)',
        imgName: 'stock.jpg',
        description: 'Projetos desenvolvidos atuando como freelancer, para a plataforma de operações em bolsa ProfitChart (Nelogica)',
        stack: ['others'],
        siteUrl: 'https://github.com/matheus-ferreira1/ProfitChart-Mercado-Financeiro',
        codeUrl: 'https://github.com/matheus-ferreira1/ProfitChart-Mercado-Financeiro'
    },
    {
        title: 'Carrinho e-commerce',
        imgName: 'shoppingcart.png',
        description: 'Este é um projeto desenvolvido para simular a página de um e-commerce, onde o usuário pode clicar nos produtos para adicioná-los ao carrinho.',
        stack: ['react', 'js'],
        siteUrl: 'https://shopping-matheus.netlify.app/',
        codeUrl: 'https://github.com/matheus-ferreira1/shopping-cart-react'
    },
    {
        title: 'Churrascômetro',
        imgName: 'churras.png',
        description: 'Projeto para estimar a quantidade de carne e bebida necessária para um churrasco, baseado na quantidade de pessoas e duração do evento.',
        stack: ['react', 'js'],
        siteUrl: 'https://churrascometro-matheus.netlify.app/',
        codeUrl: 'https://github.com/matheus-ferreira1/churrascometro'
    },
    {
        title: 'Landing page',
        imgName: 'land.png',
        description: 'Esta é uma landing page para um site de venda de serviços holísticos. A mesma contém carrossel e responsividade.',
        stack: ['html', 'css', 'js'],
        siteUrl: 'https://matheus-ferreira1.github.io/landing-page/',
        codeUrl: 'https://github.com/matheus-ferreira1/landing-page'
    },
    {
        title: 'DT money',
        imgName: 'dtmoney.png',
        description: 'Esta é uma aplicação desenvolvida para ajudar as pessoas a monitorarem seus gastos e receitas, separados por categoria.',
        stack: ['react'],
        siteUrl: '',
        codeUrl: 'https://github.com/matheus-ferreira1/DT-money'
    },
    {
        title: 'Clone home Spotify',
        imgName: 'spotify.png',
        description: 'Clone da landing page do Spotify. O projeto possui um carrossel funcional Projeto feito utilizando o framework Bootstrap 4.',
        stack: ['html', 'css'],
        siteUrl: 'https://matheus-ferreira1.github.io/Pagina-Spotify-Clone/',
        codeUrl: 'https://github.com/matheus-ferreira1/Pagina-Spotify-Clone'
    },
    {
        title: 'Calculadora (React)',
        imgName: 'calcreact.png',
        description: 'Calculadora simples totalmente funcional, semelhante as calculadoras disponíveis em dispositivos móveis. Desenvolvida com React',
        stack: ['html', 'js'],
        siteUrl: 'https://calculator-matheus.netlify.app/',
        codeUrl: 'https://github.com/matheus-ferreira1/calculator-react'
    },
    {
        title: 'Calculadora',
        imgName: 'calc.png',
        description: 'Calculadora simples totalmente funcional, semelhante as calculadoras disponíveis em dispositivos móveis e desktop',
        stack: ['html', 'js'],
        siteUrl: 'https://matheus-ferreira1.github.io/Calculadora-Basica/',
        codeUrl: 'https://github.com/matheus-ferreira1/Calculadora-Basica'
    },
    {
        title: 'Glowing circle',
        imgName: 'glow.png',
        description: 'Círculo luminoso feito inteiramente com CSS para ter seu efeito rotativo. Já assstiu a algum show do Tame Impala?',
        stack: ['css'],
        siteUrl: 'https://matheus-ferreira1.github.io/css-glowing-circle/',
        codeUrl: 'https://github.com/matheus-ferreira1/css-glowing-circle'
    },

    {
        title: 'Player de música',
        imgName: 'player.png',
        description: 'Music player totalmente funcional, com 5 faixas já embarcadas. Opções de auto replay e mute inclusas.',
        stack: ['js'],
        siteUrl: 'https://matheus-ferreira1.github.io/music-player-JavaScript/',
        codeUrl: 'https://github.com/matheus-ferreira1/music-player-JavaScript'
    },
    {
        title: 'Game FPS Trainer',
        imgName: 'fps.png',
        description: 'Game para eliminar alvos randomicos que aparecem, baseados na dificuldade e time selecionados no início.',
        stack: ['js'],
        siteUrl: 'https://matheus-ferreira1.github.io/game-FPS-trainer/',
        codeUrl: 'https://github.com/matheus-ferreira1/game-FPS-trainer'
    },
    {
        title: 'Calculadora IMC',
        imgName: 'imc.png',
        description: 'Calculadora de índice de massa corporal, semelhante as calculadoras disponíveis na web, com uma tabela colorida de referência. ',
        stack: ['js'],
        siteUrl: 'https://matheus-ferreira1.github.io/Calculadora-IMC/',
        codeUrl: 'https://github.com/matheus-ferreira1/Calculadora-IMC'
    },
    {
        title: 'Calculadora juros compostos',
        imgName: 'juros.png',
        description: 'Este é um projeto com a finalidade de criar uma calculadora de e compostos, desenvolvida inteiramente com HTML e CSS e JavaScript.',
        stack: ['js'],
        siteUrl: 'https://matheus-ferreira1.github.io/calculadora-juros-compostos/',
        codeUrl: 'https://github.com/matheus-ferreira1/calculadora-juros-compostos'
    },

]

//////////////////////////////////////////////////////

const portWrapper = document.querySelector('.port-wrapper');

function renderPage() {
    portWrapper.innerHTML = '';

    for (i = 0; i < projects.length; i++) {
        createItems(projects[i])
    }
}
renderPage();


function createItems(projects) {

    const cardDiv = document.createElement('div');
    const cardContent = document.createElement('div');
    const img = document.createElement('img');
    const h4 = document.createElement('h4');
    const paragraph = document.createElement('p');
    const linkDiv = document.createElement('div');
    const linkSite = document.createElement('a');
    const linkCode = document.createElement('a');

    cardDiv.className = `card ${projects.stack.toString().replaceAll(',', ' ')}`;
    cardContent.className = 'card-content';
    linkDiv.className = 'links';

    img.src = `/img/${projects.imgName}`;
    h4.innerHTML = projects.title;
    paragraph.innerHTML = projects.description;
    linkSite.setAttribute('href', projects.siteUrl);
    linkSite.setAttribute('target', '_blank');
    linkSite.textContent = 'Site';
    linkCode.setAttribute('href', projects.codeUrl);
    linkCode.setAttribute('target', '_blank');
    linkCode.textContent = 'Código';

    cardDiv.appendChild(cardContent);
    cardContent.appendChild(img);
    cardContent.appendChild(h4);
    cardContent.appendChild(paragraph);
    cardContent.appendChild(linkDiv);
    linkDiv.appendChild(linkSite);
    linkDiv.appendChild(linkCode);

    portWrapper.appendChild(cardDiv);
}


let cards = document.querySelectorAll('.card')

applyFilter('all')

function applyFilter(tech) {

    if (tech == 'all') {
        for (i = 0; i < cards.length; i++) {
            cards[i].classList.add('show')
        }
    }

    if (tech == 'html') {
        for (i = 0; i < cards.length; i++) {
            if (cards[i].classList.contains("html")) {
                if (!cards[i].classList.contains("show")) {
                    cards[i].classList.add('show')
                }
            } else {
                cards[i].classList.remove("show")
            }
        }
    }

    if (tech == 'css') {
        for (i = 0; i < cards.length; i++) {
            if (cards[i].classList.contains("css")) {
                if (!cards[i].classList.contains("show")) {
                    cards[i].classList.add('show')
                }
            } else {
                cards[i].classList.remove("show")
            }
        }
    }
    if (tech == 'js') {
        for (i = 0; i < cards.length; i++) {
            if (cards[i].classList.contains("js")) {
                if (!cards[i].classList.contains("show")) {
                    cards[i].classList.add('show')
                }
            } else {
                cards[i].classList.remove("show")
            }
        }
    }
    if (tech == 'react') {
        for (i = 0; i < cards.length; i++) {
            if (cards[i].classList.contains("react")) {
                if (!cards[i].classList.contains("show")) {
                    cards[i].classList.add('show')
                }
            } else {
                cards[i].classList.remove("show")
            }
        }
    }
    if (tech == 'next') {
        for (i = 0; i < cards.length; i++) {
            if (cards[i].classList.contains("next")) {
                if (!cards[i].classList.contains("show")) {
                    cards[i].classList.add('show')
                }
            } else {
                cards[i].classList.remove("show")
            }
        }
    }
    if (tech == 'others') {
        for (i = 0; i < cards.length; i++) {
            if (cards[i].classList.contains("others")) {
                if (!cards[i].classList.contains("show")) {
                    cards[i].classList.add('show')
                }
            } else {
                cards[i].classList.remove("show")
            }
        }
    }
}

var btnContainer = document.querySelector(".btn-container");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
