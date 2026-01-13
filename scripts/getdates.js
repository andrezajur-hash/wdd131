
const currentYearElement = document.querySelector('#currentyear');
currentYearElement.textContent = new Date().getFullYear();

const lastModifiedElement = document.querySelector('#lastModified');
lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;