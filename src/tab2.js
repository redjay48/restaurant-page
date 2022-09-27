export default function menu() {
    const main = document.getElementById('main');
    const menuDiv = document.createElement('div');
    const divOne = document.createElement('div');
    const divTwo = document.createElement('div');
    const headingOne = document.createElement('p');
    const headingTwo = document.createElement('p');
    const hr = document.createElement('hr');
    const breakOne = document.createElement('img');
    const descriptOne = document.createElement('p');
    const breakTwo = document.createElement('img');
    const descriptTwo = document.createElement('p');
    const pastaOne = document.createElement('img');
    const pastaTwo = document.createElement('img');
    const pastaThree = document.createElement('img');
    const descriptThree = document.createElement('p');
    const descriptFour = document.createElement('p');
    const descriptFive = document.createElement('p');

    headingOne.textContent = "Choose from Our breakfast options.";
    headingTwo.textContent = "Choose from the best main course.";
    headingTwo.classList.add('heading');
    headingOne.classList.add('heading');
    menuDiv.classList.add('template');
    menuDiv.style.display = "block";
    breakOne.src = "img/breakfast1.jpg";
    descriptOne.textContent = "Pancakes with multiple toppings to choose from."
    breakTwo.src = "img/breakfast2.jpg"
    descriptTwo.textContent = "French Toasts with multiple toppings to choose from."
    
    pastaOne.src = "img/pasta1.jpg";
    pastaTwo.src = "img/pasta2.jpg";
    pastaThree.src = "img/pasta3.jpg";
    descriptThree.textContent = "Tagliatelle Bolognese";
    descriptFour.textContent = "Penne Ala Vodka";
    descriptFive.textContent = "Pesto Farfalle";





    menuDiv.appendChild(divOne);
    menuDiv.appendChild(divTwo);
    divOne.appendChild(headingOne);
    divOne.appendChild(breakOne);
    divOne.appendChild(descriptOne);
    divOne.appendChild(breakTwo);
    divOne.appendChild(descriptTwo);
    divOne.appendChild(hr);
    divTwo.appendChild(headingTwo);
    divTwo.appendChild(pastaOne);
    divTwo.appendChild(descriptThree);
    divTwo.appendChild(pastaTwo);
    divTwo.appendChild(descriptFour);
    divTwo.appendChild(pastaThree);
    divTwo.appendChild(descriptFive);

    if (main.children[0] !== menuDiv && main.children.length === 1) {
        main.removeChild(main.children[0]);
        main.appendChild(menuDiv);
    }
    else if(!main.children[0]) {
        main.appendChild(menuDiv);
    }

}