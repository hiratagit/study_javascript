'use strict';
{
    const question = document.getElementById('question');
    const choices = document.getElementById('choices');
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');
    const scoreLabel = document.querySelector('#result > p');

    //問題文の設定
    const quizSet = shuffle([
        {q: '問題文1', c: ['A01', 'A02', 'A03']},
        {q: '問題文2', c: ['B01', 'B02', 'B03']},
        {q: '問題文3', c: ['C01', 'C02', 'C03']},
    ]);
    //現在の問題カウント
    let currentNum = 0;
    let isAnswered;
    let score = 0;

    //フィッシャーイエーツのシャッフルアルゴリズム
    function shuffle(arr) {
        for(let i = arr.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    }

    function checkAnswer(li) {

        if(isAnswered) {return;}
        isAnswered = true;

        if(li.textContent === quizSet[currentNum].c[0]) {
            li.classList.add('correct');
            score++;
        }else{
            li.classList.add('wrong');
        }

        btn.classList.remove('disabled');
    }

    function setQuiz(){

        isAnswered = false;

        //現在の問題文の表示
        question.textContent = quizSet[currentNum].q;

        //前の問題文をループで削除する
        while(choices.firstChild){
            choices.removeChild(choices.firstChild);
        }

        //[...array]で配列のコピーを引数に渡す（大元の配列を保持するため）
        const shuffledChoices = shuffle([...quizSet[currentNum].c]);
        
        //現在の問題の選択肢を表示
        shuffledChoices.forEach(choice => {
            const li = document.createElement('li');
            li.textContent = choice;
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

        if(currentNum === quizSet.length - 1) {
            scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
            result.classList.remove('hidden');
        }else{
            currentNum++;
            setQuiz();
        }
    });

}