function prepareGame() {
    //Comandos para utilizar local storage na função abaixo retirados de https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-web-storage/b332393f-7548-4075-83e3-f632735efb95/conteudos/e90b472b-e79b-4b29-9979-8222daff0d70/local-e-session-storage/2ac29f5c-c36e-473d-8546-6fb18340e55e?use_case=next_button

    if (localStorage.getItem('scoreStorage') === null) {
        localStorage.setItem('scoreStorage', JSON.stringify([]));
        let scoreStorage1 = JSON.parse(localStorage.getItem('scoreStorage'));
        const initialScore = 0;
        scoreStorage1.push(initialScore);
        localStorage.setItem('scoreStorage', JSON.stringify(scoreStorage1));
    } else {
        let scoreStorage2 = JSON.parse(localStorage.getItem('scoreStorage'));
        const scoreDisplay = document.getElementById('score');
        scoreDisplay.innerText = 'Placar: ' + scoreStorage2[0];
    }

    // função gerar cor retirada do site https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript

    function generateColor() {
        let r = parseInt(Math.random() * 255); 
        let g = parseInt(Math.random() * 255); 
        let b = parseInt(Math.random() * 255); 
        return `rgb(${r}, ${g}, ${b})`;
    }

    const colorOne = document.querySelector('#color1');
    colorOne.style.backgroundColor = generateColor();
    const colorTwo = document.querySelector('#color2');
    colorTwo.style.backgroundColor = generateColor();
    const colorThree = document.querySelector('#color3');
    colorThree.style.backgroundColor = generateColor();
    const colorFour = document.querySelector('#color4');
    colorFour.style.backgroundColor = generateColor();
    const colorFive = document.querySelector('#color5');
    colorFive.style.backgroundColor = generateColor();
    const colorSix = document.querySelector('#color6');
    colorSix.style.backgroundColor = generateColor();

    function generateColorNumber() {
        let colorNumber = Math.ceil(Math.random() * 6); 
        return `color${colorNumber}`;
    }

    const answerElement = document.getElementById(generateColorNumber());
    answerElement.classList.add('answerElement');

    const answerElementColor = document.getElementById('rgb-color');
    answerElementColor.innerText = answerElement.style.backgroundColor;

    const balls = document.getElementsByClassName('ball');

    function compareAnswer(origin) {
        const answerDisplay = document.getElementById('answer');
        const selectedAnswer = origin.target;        
        
        if(answerElement.style.backgroundColor === selectedAnswer.style.backgroundColor) {
            answerDisplay.innerText = 'Acertou!';

            //Comandos para utilizar local storage na função abaixo retirados de https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-web-storage/b332393f-7548-4075-83e3-f632735efb95/conteudos/e90b472b-e79b-4b29-9979-8222daff0d70/local-e-session-storage/2ac29f5c-c36e-473d-8546-6fb18340e55e?use_case=next_button

            let scoreStorage3 = JSON.parse(localStorage.getItem('scoreStorage'));
            let currentScore = scoreStorage3[0];
            currentScore = currentScore + 3;
            localStorage.removeItem('scoreStorage')
            localStorage.setItem('scoreStorage', JSON.stringify([]));
            let scoreStorage4 = JSON.parse(localStorage.getItem('scoreStorage'));
            scoreStorage4.push(currentScore);
            localStorage.setItem('scoreStorage', JSON.stringify(scoreStorage4));
            let scoreStorage5 = JSON.parse(localStorage.getItem('scoreStorage'));
            const scoreDisplay2 = document.getElementById('score');
            scoreDisplay2.innerText = 'Placar: ' + scoreStorage5[0];            
        } else {
            answerDisplay.innerText = 'Errou! Tente novamente!';
        }
    }

    const answerDisplay2 = document.getElementById('answer');
    answerDisplay2.innerText = 'Escolha uma cor';

    for(index = 0; index < balls.length; index += 1) {
        balls[index].addEventListener('click', compareAnswer);
    }
}

const resetButton = document.getElementById('reset-game');
resetButton.addEventListener('click', prepareGame);

window.onload = prepareGame();