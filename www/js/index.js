document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    generateOperation();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateOperation() {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[getRandomInt(0, operators.length - 1)];
    const num1 = getRandomInt(1, 10);
    const num2 = getRandomInt(1, 10);

    let operation;
    let correctAnswer;

    switch (operator) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;
        case '/':
            correctAnswer = (num1 / num2).toFixed(2); // Limita a 2 casas decimais
            break;
    }

    operation = `${num1} ${operator} ${num2} =`;
    document.getElementById('operation').textContent = operation;
    document.getElementById('operation').dataset.answer = correctAnswer;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value;
    const correctAnswer = document.getElementById('operation').dataset.answer;

    if (userAnswer == correctAnswer) {
        navigator.vibrate(2000); // Vibra por 2 segundos
        alert('Correto!');
    } else {
        navigator.vibrate(1000); // Vibra por 1 segundo
        alert('Errado! Tente novamente.');
    }

    document.getElementById('answer').value = '';
    generateOperation();
}
