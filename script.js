const projects = [
    {
        title: 'dt-money',
        description: 'Aplicativo para acompanhamento de despesas e receitas',
        stack: ['HTML', 'CSS'],
        siteUrl: '',
        codeUrl: 'https://github.com/matheus-ferreira1/DT-money'
    },
    {
        title: 'profitchart',
        description: 'Projetos desenvolvidos atuando como freelancer, para a plataforma de operações em bolsa ProfitChart',
        stack: ['HTML', 'CSS'],
        siteUrl: '',
        codeUrl: 'https://github.com/matheus-ferreira1/DT-money'
    },
    {
        title: 'dt-money',
        description: 'Aplicativo para acompanhamento de despesas e receitas',
        stack: ['HTML', 'CSS'],
        siteUrl: '',
        codeUrl: 'https://github.com/matheus-ferreira1/DT-money'
    },
    {
        title: 'dt-money',
        description: 'Aplicativo para acompanhamento de despesas e receitas',
        stack: ['HTML', 'CSS'],
        siteUrl: '',
        codeUrl: 'https://github.com/matheus-ferreira1/DT-money'
    },
]


cards = document.querySelectorAll('.card')

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
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
