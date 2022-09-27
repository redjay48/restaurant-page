export default function intro() {
    const heading = document.createElement('h1');
    const content = document.getElementById('content');

    heading.innerHTML = 'Restaurant Epicurean';
    content.appendChild(heading);

}

export function home() {
    const main = document.getElementById('main');
    const homeDiv = document.createElement('div');
    const divOne = document.createElement('div');
    const divTwo = document.createElement('div');
    homeDiv.classList.add('template');
    homeDiv.style.display = "block";
    const restOne = document.createElement('img');
    restOne.classList.add('restImg');
    restOne.src = "img/restaurant1.jpg";
    const descriptOne = document.createElement('p');
    descriptOne.textContent = "Come to The Best Restaurant in the Bay Area."
    const restTwo = document.createElement('img');
    restTwo.src = "img/restaurant2.jpg"
    const descriptTwo = document.createElement('p');
    descriptTwo.textContent = "Enjoy The Beach while you treat your tastebuds."


   
    
    homeDiv.appendChild(divOne);
    homeDiv.appendChild(divTwo);
    divOne.appendChild(restOne);
    divOne.appendChild(descriptOne);
    divTwo.appendChild(restTwo);
    divTwo.appendChild(descriptTwo);

    if(main.children[0] !== homeDiv && main.children.length === 1) {
        main.removeChild(main.children[0]);
        main.appendChild(homeDiv);
    } 
    else if(!main.children[0]) {
        main.appendChild(homeDiv);
    }

}
