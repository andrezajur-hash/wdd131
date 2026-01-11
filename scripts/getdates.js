
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;