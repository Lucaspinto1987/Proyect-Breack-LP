document.addEventListener('DOMContentLoaded', () => {
    const tituloInput = document.getElementById('titulo');
    const linkInput = document.getElementById('link');
    const addLinkButton = document.getElementById('addLinkButton');
    const linkList = document.getElementById('linkList');


loadLinks();


    addLinkButton.addEventListener('click', addLink);

    function addLink() {
        const titulo = tituloInput.value.trim();
        const url = linkInput.value.trim();

        if (titulo && url) {
            const link = { titulo, url };
            createLinkElement(link);
            saveLinkToLocalStorage(link);
            tituloInput.value = '';
            linkInput.value = '';
        }
    }

    function createLinkElement(link) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = link.titulo;
        a.href = link.url;
        a.target = '_blank';

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '&times;';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            linkList.removeChild(li);
            removeLinkFromLocalStorage(link);
        });

        li.appendChild(a);
        li.appendChild(deleteButton);
        linkList.appendChild(li);
    }

    function saveLinkToLocalStorage(link) {
        const links = getLinksFromLocalStorage();
        links.push(link);
        localStorage.setItem('links', JSON.stringify(links));
    }

    function getLinksFromLocalStorage() {
        return JSON.parse(localStorage.getItem('links')) || [];
    }

    function loadLinks() {
        const links = getLinksFromLocalStorage();
        links.forEach(createLinkElement);
    }

    function removeLinkFromLocalStorage(linkToRemove) {
        let links = getLinksFromLocalStorage();
        links = links.filter(link => link.url !== linkToRemove.url);
        localStorage.setItem('links', JSON.stringify(links));
    }
    
});

