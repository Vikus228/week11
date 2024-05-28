document.addEventListener('DOMContentLoaded', (event) => {
    const list = document.getElementById('list');
    const button = document.getElementById('but');
    const input = document.getElementById('input');

    function createTask() {
        const newli = document.createElement('li');
        newli.textContent = input.value;
        list.prepend(newli);
        input.value = '';
    }

    button.addEventListener('click', createTask);

    list.addEventListener('click', function(evt) {
        if (evt.target.tagName === 'LI') {
            evt.target.classList.toggle('ready');
        }
    });
});