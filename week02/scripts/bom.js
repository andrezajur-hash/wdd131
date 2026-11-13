
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const chapter = document.createElement('li');

        chapter.textContent = input.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

        chapter.appendChild(deleteButton);

        deleteButton.addEventListener('click', function () {
            chapter.remove();
            input.focus();
        });

        list.appendChild(chapter);
        input.value = '';
    }

    input.focus();
});


