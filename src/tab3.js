export default function contact() {
    const main = document.getElementById('main');
    const contactDiv = document.createElement('div');
    const hr = document.createElement('hr');
    const h2 = document.createElement('h2');
    const address = document.createElement('p');
    const address1 = document.createElement('p');
    const pin = document.createElement('p');
    const number = document.createElement('p');



    contactDiv.classList.add('template');
    h2.textContent = "Epicurean Restaurant";
    address.textContent = "Turks and Caicos Islands";
    address1.textContent = "United Kingdom";
    pin.textContent = "Pin Code: TKCA 1ZZ";
    number.textContent = "Contact us at: +(121)-(3492073)";

    contactDiv.appendChild(h2);
    contactDiv.appendChild(hr);
    contactDiv.appendChild(address);
    contactDiv.appendChild(address1);
    contactDiv.appendChild(pin);
    contactDiv.appendChild(number);


    if (main.children[0] !== contactDiv && main.children.length === 1) {
        main.removeChild(main.children[0]);
        main.appendChild(contactDiv);
    }
    else if(!main.children[0]) {
        main.appendChild(contactDiv);
    }

}