import { projects } from './data.js';

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
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
