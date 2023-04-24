const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function() {
    alert('Sabía que ibas a decir que sí UwU Te Amo Mi Princesa                       PS:Gracias Por Hacerme Muy Feliz, por compartir tu tiempo, por preocuparte por mi, pero sobre todo gracias por amarme<3 ')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function() {
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%,-${randomY}%)`);
})

function PlaySound() {
    var sound = document.getElementById("audio");
    sound.play();
}