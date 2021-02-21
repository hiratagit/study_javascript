'use strict';
{

    const body = document.querySelector('body');

    //トップページ
    if(body.classList.contains('home')){

        let animeParts = document.querySelector('.opening-anime');

            animeParts.classList.add('anime-start');

            let speechText = document.createElement('div');
            
            speechText.textContent = "クイズにちょうせんしよう！！";
            speechText.style.position = "absolute";
            speechText.style.backgroundColor = "#ef8abb";
            speechText.style.color = "#fff";
            speechText.style.padding = "1em";
            speechText.style.fontWeight = "bold";
            speechText.style.textAlign = "center";

            speechText.style.width = "160px"
            speechText.style.top = "33px";
            speechText.style.left = "68px";
            speechText.style.borderRadius = "25px";

            speechText.style.fontSize = "14px";
            speechText.classList.add('speech');

            animeParts.appendChild(speechText);
            setTimeout(() => {
                speechText.classList.add('speech-start'); 
            }, 1500)
    }

    //クイズページ
    if (body.classList.contains('quiz')) {

        const question = document.getElementById('question');
        const choices = document.getElementById('choices');
        const btn = document.getElementById('btn');
        const result = document.getElementById('result');
        const scoreLabel = document.querySelector('#result > p');

        //問題文の設定
        const quizSet = shuffle([
            { q: 'あやちゃんとほのちゃんが、すんでいるのはどこ？', c: ['あかし', 'こうべ', 'ひろしま'] },
            { q: 'あやちゃんとほのちゃんが、かよっている「ほいくしょ」は？', c: ['まつかげほいくしょ', 'あかしほいくしょ', 'まつげかほいくしょ'] },
            { q: '「わるいひと」をつかまえるのは？', c: ['けいさつかん', 'しょうぼうし', 'おかあさん'] },
            { q: '「つの」があるむしは？', c: ['かぶとむし', 'かめむし', 'あり'] },
            { q: '「きせつ」のもんだい。はるがおわると、どのきせつになるかな？', c: ['なつ', 'あき', 'ふゆ'] },
            { q: 'おとうさんは、どんなひと？', c: ['こうべの、かっこいいおっちゃん', 'こうべの、かっこわるいおっちゃん', 'ふつうのおっちゃん'] },
            { q: 'あやちゃんとほのちゃんの「ねんれい」をたしたら、いくつ？', c: ['10', '12', '8'] },
            { q: 'りんごが1こあったよ。あとから2つたしたよ。ぜんぶでなんこある？', c: ['3こ', '4こ', '5こ'] },
            { q: 'なつにさく「はな」はどれ？', c: ['ひまわり', 'さくら', 'チューリップ'] },
            { q: 'あやちゃんとほのちゃんがあそんでいたよ。そこに、おともだちが「3にん」やってきていっしょにあそんだよ。ぜんぶでなんにん？', c: ['5にん', '4にん', '6にん'] },
        ]);
        //現在の問題カウント
        let currentNum = 0;
        let isAnswered;
        let score = 0;

        //フィッシャーイエーツのシャッフルアルゴリズム
        function shuffle(arr) {
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[j], arr[i]] = [arr[i], arr[j]];
            }
            return arr;
        }

        function checkAnswer(li) {

            if (isAnswered) { return; }
            isAnswered = true;

            if (li.textContent === quizSet[currentNum].c[0]) {
                li.classList.add('correct');
                score++;
            } else {
                li.classList.add('wrong');
            }

            btn.classList.remove('disabled');
        }

        function setQuiz() {

            isAnswered = false;

            //現在の問題文の表示
            question.textContent = quizSet[currentNum].q;

            //前の問題文をループで削除する
            while (choices.firstChild) {
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

            if (currentNum === quizSet.length - 1) {
                btn.textContent = 'クイズのけっか';
            }
        }

        setQuiz();

        btn.addEventListener('click', () => {
            if (btn.classList.contains('disabled')) {
                return;
            }
            btn.classList.add('disabled');

            if (currentNum === quizSet.length - 1) {
                // scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;

                if (score === quizSet.length) {
                    scoreLabel.textContent = `すごい！！ぜんぶせいかいだったよ！`;
                    result.classList.add('perfect');
                } else {
                    // scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
                    scoreLabel.textContent = `もんだい${quizSet.length}このうち、せいかいは ${score}こだったよ `;
                }
                result.classList.remove('hidden');
            } else {
                currentNum++;
                setQuiz();
            }
        });
    }

}