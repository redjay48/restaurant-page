import intro, {home, toggle} from "./tab1.js";
import menu from "./tab2.js";

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

    tabOne.addEventListener('click', home);
    tabTwo.addEventListener('click', menu);

}







document.body.appendChild(addButton());