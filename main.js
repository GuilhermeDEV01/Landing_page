document.addEventListener('DOMContentLoaded', function () {
    const toggleSinopse = document.getElementById('toggleSinopse');
    const toggleCritica = document.getElementById('toggleCritica');
    const togglePersonagens = document.getElementById('togglePersonagens');
    const sinopseSection= document.getElementById('sinopseSection');
    const criticaSection = document.getElementById('criticaSection');
    const personagensSection = document.getElementById('personagensSection');

    toggleSinopse.addEventListener('click', function () {
        sinopseSection.style.display = 'block';
        personagensSection.style.display = 'none';
        criticaSection.style.display = 'none';
    });
    
    toggleCritica.addEventListener('click', function () {
        sinopseSection.style.display = 'none';
        criticaSection.style.display = 'block';
        personagensSection.style.display = 'none';
    });

    togglePersonagens.addEventListener('click', function () {
        criticaSection.style.display = 'none';
        sinopseSection.style.display = 'none';
        personagensSection.style.display = 'block';
    });
});
