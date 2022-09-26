export default function intro () {
    const heading = document.createElement('h1');
    const content = document.getElementById('content');

    heading.innerHTML = 'Restaurant Epicurean';
    content.appendChild(heading);

}