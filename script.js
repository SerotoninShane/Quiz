"use strict";

// Create a class
class question {
    constructor (question, correctAnswer, answerA, answerB, answerC, answerD) {
        this.question = question;
        this.correctAnswer = correctAnswer;

        this.answers = [
            answerA,
            answerB,
            answerC,
            answerD
        ]
    }
}

const Questions = [
    new question (
        'What does CSS stand for?',
        'C',
        'Colorful Style Sheets',
        'Computer Style Sheets',
        'Cascading Style Sheets',
        'Creative Style Sheets'
    ),
    
    new question (
        'What is the correct HTML for referring to an external style sheet?',
        'B',
        'style rel="stylesheet type="text/css" src="style.css"',
        'link rel="stylesheet type="text/css" href="style.css"',
        'link rel="stylesheet type="text/css" src="style.css"',
        'style rel="stylesheet type="text/css" link="style.css"'
    ),
    
    new question (
        'Where in an HTML document is the correct place to refer to an external style sheet?',
        'A',
        'In the head section',
        'In the style section',
        'In the body section',
        'At the end of the document'
    ),
    
    new question (
        'Which HTML tag is used to define an internal style sheet?',
        'C',
        'The head tag',
        'The CSS tag',
        'The style tag',
        'The script tag'
    ),
    
    new question (
        'Which is the correct CSS syntax?',
        'D',
        '{body; color: black;}',
        '{body: color = black;}',
        'body {color = black;}',
        'body {color: black;}'
    ),
    
    new question (
        'How do you insert a comment in a CSS file?',
        'C',
        '// #Comment //',
        '/* #Comment',
        '/* #Comment */',
        '// #Comment'
    ),
    
    new question (
        'Which property is used to change the background color in CSS?',
        'B',
        'bgcolor',
        'background-color',
        'color',
        'backgroundColor'
    ),
    
    new question (
        'Which CSS property controls the text size?',
        'A',
        'font-size',
        'text-size',
        'font-style',
        'text-style'
    ),
    
    new question (
        'How do you display hyperlinks without an underline?',
        'D',
        'a {underline: none;}',
        'a {text-decoration: no-underline;}',
        'a {text-decoration: hidden;}',
        'a {text-decoration: none;}'
    ),
    
    new question (
        'How do you make each word in a text start with a capital letter?',
        'B',
        'text-style: capitalize',
        'text-transform: capitalize',
        'font-style: capitalize',
        'None of these are correct'
    ),

    new question (
        'You Win',
        'C',
        'Your Got _ Wrong',
        'You Got A Streak of _',
        'Retry',
        'Your Score _ !!!'
    )]



const CreateParticle = (x, y, emoji) => {
    const particle = document.createElement('div');
    particle.className = 'click-particle';
    particle.style.position = 'absolute';
    particle.style.left = x - 12 + 'px';
    particle.style.top = y - 12 + 'px';
    particle.innerHTML = emoji;
    return particle;
}

const EmitClickParticle = (e, emoji) => {
    const particle = CreateParticle(e.clientX, e.clientY, emoji);
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
}


const Quiz = () => {
    const colorVariables = getComputedStyle(document.body)

    const red = colorVariables.getPropertyValue('--red'); // #FF5964
    const yellow = colorVariables.getPropertyValue('--yellow'); // #FFE74C
    const green = colorVariables.getPropertyValue('--green'); // #6BF178
    const blue = colorVariables.getPropertyValue('--blue'); // #35A7FF

    const colors = [
        red,
        yellow,
        green,
        blue
    ]

    let questionNumber = 0;

    const newQuestion = () => {
        let letter = 0;

        document.querySelectorAll('.📌').forEach(e => {
            e.innerHTML = Questions[questionNumber].answers[letter];
            e.style.backgroundColor = colors[letter]
            letter++
        });

        document.getElementById('🔳').innerHTML = Questions[questionNumber].question
        document.getElementById('❓').innerHTML = `${Math.min(questionNumber + 1, 10)} / 10`

    }

    document.querySelectorAll('.📌').forEach(e => {
        e.addEventListener('click', function(button, el=e) {
            let emoji;
            
            el.id != Questions[questionNumber].correctAnswer ? emoji = '❌' : emoji = '✔️';

            EmitClickParticle(button, emoji);

            document.querySelectorAll('.📌').forEach(e => {
                e.id != Questions[questionNumber].correctAnswer? e.style.backgroundColor = red : e.style.backgroundColor = green;
            });
            
            if (this.id == Questions[questionNumber].correctAnswer) {

                questionNumber++
                if (questionNumber == Questions.length) questionNumber = 0
                newQuestion()

            }
        });
    });

    newQuestion()
    
};

Quiz()
