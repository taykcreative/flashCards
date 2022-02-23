'use strict';

let flashcard = document.querySelector('.flashcard');
let question = document.querySelector('.question');
let answer = document.querySelector('.answer');
let i;
let previous;

let questionInput = [
    'Caterpillars, or ______, come out of eggs.',
    'Mother monarch butterflies lay their ______ on leaves.',
    'The scales give the wings ______.',
    'The monarch butterfly is the ______ of butterflies.',
    'Thousands of butterflies ______ together.',
    'Each ______ monarch butterflies choose the same trees in which to rest.',
    "A butterfly's ______ are covered with tiny scales"
];
let answerInput = [
    'larvae',
    'eggs',
    'color',
    'king',
    'swarm',
    'year',
    'wings'
];

function generateNumber() {
    let random = Math.floor(Math.random() * (6 - 1));
    console.log(random);

    return random;
}

question.addEventListener('click', function(){
    previous = i;
    i = generateNumber();

    if (i === previous) {
        i = generateNumber();
    }

    question.classList.add('hidden');
    question.textContent = questionInput[i];
    answer.classList.remove("hidden");
})

answer.addEventListener("click", function () {
    question.classList.remove("hidden");
    answer.classList.add("hidden");
    answer.textContent = answerInput[i];
});


