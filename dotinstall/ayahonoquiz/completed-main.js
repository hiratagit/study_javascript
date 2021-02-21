'use strict';

{
    const question = document.getElementById('question');
    const choices = document.getElementById('choices');
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');
    const scoreLabel = document.querySelector('#result > p');

    const quizSet = shuffle([
        { q: 'what is A?', c: ['A00', 'A01', 'A02'] },
        { q: 'what is B?', c: ['B00', 'B01', 'B02'] },
        { q: 'what is C?', c: ['C00', 'C01', 'C02'] },
        { q: 'what is D?', c: ['D00', 'D01', 'D02'] },
        { q: 'what is E?', c: ['E00', 'E01', 'E02'] },
    ]);

    let currentNum = 0;
    let isAnswered;
    let score = 0;

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    }

    function checkAnswer(li) {
        
        if( isAnswered ) return;
        isAnswered = true;

        if (li.textContent === quizSet[currentNum].c[0]) {
            li.classList.add('correct');
            score ++;
        } else {
            li.classList.add('wrong');
        }

        btn.classList.remove('disabled');
    }

    function setQuiz() {

        isAnswered = false;

        question.textContent = quizSet[currentNum].q;

        while(choices.firstChild){
            choices.removeChild(choices.firstChild);
        }

        const shuffledChoices = shuffle([...quizSet[currentNum].c]);

        shuffledChoices.forEach(chois => {
            const li = document.createElement('li');
            li.textContent = chois;

            li.addEventListener('click', () => {
                checkAnswer(li);
            });
            choices.appendChild(li);
        });

        if(currentNum === quizSet.length - 1){
            btn.textContent = 'Show Score';
        }
    }

    setQuiz();

    btn.addEventListener('click', () => {

        if(btn.classList.contains('disabled')){
            return;
        }
        btn.classList.add('disabled');

        if(currentNum === quizSet.length - 1){
            scoreLabel.textContent = `Score: ${score} / ${quizSet.length }`;
            result.classList.remove('hidden');
        } else {
            currentNum ++;
            setQuiz();
        }
    });


}