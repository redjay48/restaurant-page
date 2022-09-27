import intro, {home} from "./tab1.js";

intro();

function addButton() {
    const buttons = document.getElementById('buttons');

    const tabOne = document.createElement('button');
    const tabTwo = document.createElement('button');
    const tabThree = document.createElement('button');

    tabOne.textContent = 'Home';
    tabTwo.textContent = 'Menu';
    tabThree.textContent = 'Contact';

    buttons.appendChild(tabOne);
    buttons.appendChild(tabTwo);
    buttons.appendChild(tabThree);

}



document.body.appendChild(addButton());