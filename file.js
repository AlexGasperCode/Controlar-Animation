const $pelota = document.getElementById('pelota');
// element.animate(keyframes = [], option = {})
const animation = $pelota.animate([
    // from
    {
        transform: 'translateX(0)'
    },
    // to
    {
        transform: 'translateX(500px)'
    }
], {
    duration: 1000,
    delay: 1000,
    direction: 'normal',
    easing: 'linear',
    interations: Infinity,
    // Que se quede los estilos al finales
    fill: 'forwards',
    // Que empiece cierta parte,que sea controlable en cierto estado de la animaciòn
    iterationStart: .10,
    /*= 50%*/
    // Animaciòn en cadena y pausas entre ellas
    // endDelay: 5000,

})
const $playButton = document.getElementById('play');
const $pauseButton = document.getElementById('pause');
const $stopButton = document.getElementById('stop');
const $reverseButton = document.getElementById('reverse');

$playButton.addEventListener('click', (event) => {
    animation.play();
});
$pauseButton.addEventListener('click', (event) => {
    animation.pause();
});
$stopButton.addEventListener('click', (event) => {
    animation.finish();
});
$reverseButton.addEventListener('click', (event) => {
    animation.reverse();
});