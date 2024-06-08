function playSound() {
    const audio = new Audio('assets/sound/a.mp3');
    audio.play();
}


window.addEventListener('DOMContentLoaded', (event) => {
    playSound();
    console.log(1);
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Получаем значения ответов на вопросы
        const q1 = document.getElementById('q1').value;
        const q2 = document.getElementById('q2').value;
        const q3 = document.getElementById('q3').value;
        const q4 = document.querySelector('input[name="q4"]:checked').value;
        const q5 = document.getElementById('q5').value;

        // Выводим сообщение о принятии ответов
        alert('Супер ответы приняты!');

        // Отправляем ответы на сервер или выполняем другие действия
        // В данном примере просто выводим ответы в консоль
        console.log('Ответ на вопрос 1:', q1);
        console.log('Ответ на вопрос 2:', q2);
        console.log('Ответ на вопрос 3:', q3);
        console.log('Ответ на вопрос 4:', q4);
        console.log('Ответ на вопрос 5:', q5);

        // Можно также добавить код для отправки ответов на сервер
    });
});


const box = document.getElementById('animatedBox');

function getRandomDirection() {
    return Math.random() * 2 - 1; // Returns a random number between -1 and 1
}

function getRandomSpeed() {
    return Math.random() * 5 + 1; // Adjust the range of speed as needed
}

function animate() {
    let directionX = getRandomDirection();
    let directionY = getRandomDirection();
    let speedX = getRandomSpeed();
    let speedY = getRandomSpeed();

    let posX = window.innerWidth / 2;
    let posY = window.innerHeight / 2;

    function move() {
        posX += speedX * directionX;
        posY += speedY * directionY;

        if (posX >= window.innerWidth - box.offsetWidth || posX <= 0) {
            directionX = -directionX;
        }

        if (posY >= window.innerHeight - box.offsetHeight || posY <= 0) {
            directionY = -directionY;
        }

        box.style.left = posX + 'px';
        box.style.top = posY + 'px';

        requestAnimationFrame(move);
    }

    move();
}

animate();
