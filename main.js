function toggleRegions() {
    const regionsContent = document.getElementById('regions-content');
    regionsContent.style.display = regionsContent.style.display === 'none' ? 'block' : 'none';
}

function toggleGallery() {
    const galleryContent = document.getElementById('gallery-content');
    galleryContent.style.display = galleryContent.style.display === 'none' ? 'block' : 'none';
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('keep-text-color');
    
}

document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    const themeButton = document.createElement("button");
    themeButton.innerText = "Змінити тему";
    themeButton.classList.add("theme-button");
    themeButton.onclick = toggleTheme;
    header.appendChild(themeButton);
    themeButton.style="border-radius: 10px;"

});

