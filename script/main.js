// let showSection = () => document.getElementById('email').style.display = "block";

function showSection(id) {
    let htmlElement = document.getElementById(id);
    if(htmlElement.style.display === 'none') {
        htmlElement.style.display = 'block';
    } else {
        htmlElement.style.display = 'none';
    }
}