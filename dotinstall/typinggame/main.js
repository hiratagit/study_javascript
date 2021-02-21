'use strict';

{
    const words = [
        'apple',
        'sky',
        'blue',
        'middle',
        'set',
        'container',
        'nobukazu hirata',
        'family',
        'frendly'
    ]
    let word = words[Math.floor(Math.random() * words.length)];
    let loc;
    let score;
    let miss;
    const timelimit = 10 * 1000;
    let startTime;
    let isPlaying = false;

    const target = document.getElementById('target');
    const scoreLabel = document.getElementById('score');
    const missLabel = document.getElementById('miss');
    const timerLabel = document.getElementById('timer');
    const resultScore = document.getElementById('result_score');
    const resultMiss = document.getElementById('result_miss');
    const resultAccuracy = document.getElementById('result_accuracy');


    function updateTarget() {
        let placeholder = '';
        for (let i = 0; i < loc; i++) {
            placeholder += '_';
        }

        target.textContent = placeholder + word.substring(loc);
    }

    function uppdateTimer() {
        const timeLeft = startTime + timelimit - Date.now();
        timerLabel.textContent = (timeLeft / 1000).toFixed(2);

        const timeoutId = setTimeout(() => {
            uppdateTimer();
        }, 10);

        if (timeLeft < 0) {
            isPlaying = false;
            clearTimeout(timeoutId);
            timerLabel.textContent = '0.00';
            setTimeout(() => {
                showResult();;
            }, 100);

            target.textContent = 'click to replay'
        }
    }

    function showResult() {
        const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
        resultScore.textContent = score;
        resultMiss.textContent = miss;
        resultAccuracy.textContent = accuracy.toFixed(2);

        // alert(`${score} letters, ${miss} misses, ${accuracy.toFixed(2)}% accuracy!`);
    }
1
    window.addEventListener('click', () => {
         
        if(isPlaying === true) return;

        isPlaying = true;
        loc = 0;
        score = 0;
        miss = 0;
        scoreLabel.textContent = score;
        missLabel.textContent = miss;
        resultScore.textContent = 0;
        resultMiss.textContent = 0;
        resultAccuracy.textContent = 0;
        word = words[Math.floor(Math.random() * words.length)];

        target.textContent = word;
        startTime = Date.now();
        uppdateTimer();
    });

    window.addEventListener('keydown', (e) => {
        if(isPlaying === false) return;
        if (e.key === word[loc]) {
            loc++;
            if (loc === word.length) {
                word = words[Math.floor(Math.random() * words.length)];
                loc = 0;
            }
            updateTarget();
            score++;
            scoreLabel.textContent = score;
        } else {
            miss++;
            missLabel.textContent = miss;
        }
    });

}