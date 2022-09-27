export default function intro() {
    const heading = document.createElement('h1');
    const content = document.getElementById('content');

    heading.innerHTML = 'Restaurant Epicurean';
    content.appendChild(heading);

}

export function home() {
    const main = document.getElementByTagName('main')
    const homeDiv = document.createElement('div');
    const divOne = document.createElement('div');
    const divTwo = document.createElement('div');
    homeDiv.classList.add('template');

    const restOne = document.createElement('img');
    // restOne.src = "img/restaurant1.jpg";
    const descriptOne = document.createElement('p');
    descriptOne.textContent = "Come to The Best Restaurant in the Bay Area."
    const restTwo = document.createElement('img');
    // restTwo.src = "img/restaurant2.jpg"
    const descriptTwo = document.createElement('p');
    descriptTwo.textContent = "Enjoy The Beach while you treat your tastebuds."


   
    
    main.appendChild(homeDiv);
    homeDiv.appendChild(divOne);
    homeDiv.appendChild(divTwo);
    divOne.appendChild(restOne);
    divOne.appendChild(descriptOne);
    divTwo.appendChild(restTwo);
    divTwo.appendChild(descriptTwo);
}

