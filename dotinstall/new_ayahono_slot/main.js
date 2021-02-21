'use strict';

{

    window.addEventListener('load', function () {

        let selectedName = "";  //ayane or honoka
        let difficulty = ""; // ease or difficult
        const body = document.querySelector('body');

        /* --------------------------------------------------
          ゲーム開始選択画面
          -------------------------------------------------------*/

        if (!body.classList.contains('game-page')) {

            const openingStart = document.getElementById('opening_start');
            const selectPerson = document.getElementById('select_person');
            const selectGameAyane = document.getElementById('select_game_ayane');
            const selectGameHonoka = document.getElementById('select_game_honoka');

            selectPerson.style.display = "none";
            selectGameAyane.style.display = "none";
            selectGameHonoka.style.display = "none";

            //はじめる 選択
            const openingStartBtn = document.getElementById('opening_start_btn');

            openingStartBtn.addEventListener('click', () => {
                openingStart.style.display = "none";
                selectPerson.style.display = "block";
                selectPerson.classList.add('fadeIn');
            });

            //player 選択
            const selectAyane = document.getElementById('select_ayane');
            const selectHonoka = document.getElementById('select_honoka');

            selectAyane.addEventListener('click', () => {
                selectPerson.style.display = "none";
                selectGameAyane.style.display = "block";
                selectGameAyane.classList.add('fadeIn');
                //sessionStorageに値をセット
                sessionStorage.setItem('selected-player', 'ayane');
            });

            selectHonoka.addEventListener('click', () => {
                selectPerson.style.display = "none";
                selectGameHonoka.style.display = "block";
                selectGameHonoka.classList.add('fadeIn');
                //sessionStorageに値をセット
                sessionStorage.setItem('selected-player', 'honoka');
            });

            //難易度選択
            const easy = document.querySelectorAll('.easy');
            const difficult = document.querySelectorAll('.difficult');

            easy.forEach((el) => {
                el.addEventListener('click', () => {
                    sessionStorage.setItem('difficulty', 'easy');
                });
            });

            difficult.forEach((el) => {
                el.addEventListener('click', () => {
                    sessionStorage.setItem('difficulty', 'difficult');
                });
            });
        }
        /*----------------------------------------------------
       ゲーム
        -------------------------------------------------------*/

        if (body.classList.contains('game-page')) {

            selectedName = sessionStorage.getItem('selected-player');
            difficulty = sessionStorage.getItem('difficulty');

            //setting
            const player = (selectedName === 'ayane') ? "あやちゃん" : "ほのちゃん";

            let playerName = document.getElementsByClassName('player-name');
            for (let i = 0; i < playerName.length; i++) {
                playerName[i].textContent = player;
            }

            const personImageUrl = (player === "あやちゃん") ? 'img/ayane.png' : 'img/honoka.png';

            const images = [
                personImageUrl,
                'img/baikinman.png',
                'img/dokin.png'
            ];

            //出現割合の調整  65% or 33%
            const playerParcentage = (difficulty === 'easy') ? 1 : 33;

            class Panel {
                constructor() {
                    const section = document.createElement('section');
                    section.classList.add('panel');

                    this.img = document.createElement('img');
                    this.img.src = this.getRandamImage();
                    this.img.alt = "スロット画像";

                    this.timeoutId = undefined;

                    this.stop = document.createElement('div');
                    this.stop.textContent = "とめてね";
                    this.stop.classList.add('stop', 'inactive');

                    this.stop.addEventListener('click', () => {
                        if (this.stop.classList.contains('inactive')) {
                            return;
                        }

                        this.stop.classList.add('inactive');
                        clearTimeout(this.timeoutId);

                        panelsLeft--;

                        if (panelsLeft === 0) {
                            spin.classList.remove('inactive');
                            panelsLeft = 3;
                            checkResult();
                        }
                    });

                    section.appendChild(this.img);
                    section.appendChild(this.stop);

                    const main = document.querySelector('main');
                    main.appendChild(section);

                }

                getRandamImage() {

                    let url;
                    let parcentage = Math.floor(Math.random() * 100);

                    if (parcentage <= playerParcentage) {
                        url = images[0];
                    } else if (parcentage >= 50 + (playerParcentage / 2)) {
                        url = images[1];
                    } else {
                        url = images[2];
                    }

                    return url;

                    // return images[Math.floor(Math.random() * images.length)];
                }

                spin() {
                    this.img.src = this.getRandamImage();

                    this.timeoutId = setTimeout(() => {
                        this.spin();
                    }, 50)
                }

                isUnmatched(p1, p2) {
                    return this.img.src !== p1.img.src && this.img.src !== p2.img.src;
                }

                isMatched(p1, p2) {
                    return this.img.src === p1.img.src && this.img.src === p2.img.src;
                }

                unmatch() {
                    this.img.classList.add('unmatched');
                }

                activate() {
                    this.img.classList.remove('unmatched');
                    this.stop.classList.remove('inactive');
                }

            }

            function checkResult() {
                if (panels[0].isUnmatched(panels[1], panels[2])) {
                    panels[0].unmatch();
                }
                if (panels[1].isUnmatched(panels[0], panels[2])) {
                    panels[1].unmatch();
                }
                if (panels[2].isUnmatched(panels[1], panels[0])) {
                    panels[2].unmatch();
                }

                //揃った場合
                if (panels[0].isMatched(panels[1], panels[2])) {

                    let filename_ex = 'img/' + panels[0].img.src.match(".+/(.+?)([\?#;].*)?$")[1];
                    console.log(panels[0].img.src.match(".+/(.+?)([\?#;].*)?$"));

                    if (filename_ex === images[0]) {
                        // omedetouShow(player + "がそろったよ！");
                        const omedetouShow = new ResultShow(player + "がそろったよ！","happy-result", true);
                        omedetouShow.show();

                    } else if (filename_ex === images[1]) {
                        // zannenShow("バイキンマン" + "がそろちゃった・・・");
                        const zannenShow = new ResultShow("バイキンマン" + "がそろちゃった・・・","unhappy-result", false);
                        zannenShow.show();
                    } else {
                        // zannenShow("ドキンちゃん" + "がそろちゃった・・・");
                        const zannenShow = new ResultShow("ドキンちゃん" + "がそろちゃった・・・","unhappy-result", false);
                        zannenShow.show();
                    }
                } else {
                    // zannenShow('なにもそろわなかったよ');
                    const zannenShow = new ResultShow("なにもそろわなかったよ","unhappy-result", false);
                    zannenShow.show();
                }
            }

            let resultPanel = undefined;

            class ResultShow {
                constructor(word, addclass, bubble) {
                    this.word = word;
                    this.addclass = addclass;
                    this.bubble = bubble;
                    body.classList.add(this.addclass);
                    resultPanel = document.createElement('div');
                    resultPanel.classList.add('result-panel');
                    resultPanel.textContent = this.word;
                }
                show(){
                    body.appendChild(resultPanel);
                    setTimeout(function(){
                        resultPanel.classList.add('result-panel-down');
                    }, 50);
                    if(this.bubble) { bubble(); }
                    console.log(this.bubble);
                }
            }

            //おめでとう
            // function omedetouShow(word) {
            //     body.classList.add('happy-result');
            //     resultPanel = document.createElement('div');
            //     resultPanel.classList.add('result-panel');
            //     resultPanel.textContent = word;
            //     body.appendChild(resultPanel);
            //     setTimeout(function(){
            //         resultPanel.classList.add('result-panel-down');
            //     }, 50);
            //     bubble();

            // }
            //ざんねん
            // function zannenShow(word) {
            //     body.classList.add('unhappy-result');
            //     resultPanel = document.createElement('div');
            //     resultPanel.classList.add('result-panel');
            //     resultPanel.textContent = word;
            //     body.appendChild(resultPanel);
            //     setTimeout(function(){
            //         resultPanel.classList.add('result-panel-down');
            //     }, 50);
            // }

            const panels = [
                new Panel(),
                new Panel(),
                new Panel()
            ]

            let panelsLeft = 3;
            let setIntervalId = undefined;

            const spin = document.getElementById('spin');
            spin.addEventListener('click', () => {
                if (spin.classList.contains('inactive')) {
                    return;
                }
                spin.classList.add('inactive');

                body.classList.remove('happy-result');
                body.classList.remove('unhappy-result');
                if (resultPanel) { resultPanel.remove(); }
                if (document.querySelectorAll('.bubble').length) {
                    clearInterval(setIntervalId);
                    const bubbles = document.querySelectorAll('.bubble');

                    for (let el of bubbles) {
                        el.remove();
                    }
                }

                panels.forEach(panel => {
                    panel.activate();
                    panel.spin();
                });
            });



            //テスト用

            // let stop1 = document.getElementsByClassName('stop')[0];
            // let stop2 = document.getElementsByClassName('stop')[1];
            // let stop3 = document.getElementsByClassName('stop')[2];

            // setInterval(() => {
            //     let autoPlay = setTimeout(() => {
            //       spin.click();
            //       setTimeout(() => {
            //           stop1.click();
            //           setTimeout(() => {
            //               stop2.click();
            //               setTimeout(() => {
            //                   stop3.click();
            //               }, 1000);
            //           }, 1000);
            //       }, 1000);
            //     }, 1000);
            // }, 5000)


            function bubble() {

                const container = document.getElementsByClassName('container');
                setIntervalId = setInterval(createBublle, 25);

                function createBublle() {
                    const createElement = document.createElement('span');
                    createElement.classList.add('bubble');
                    let size = Math.random() * 100;
                    createElement.style.width = size + "px";
                    createElement.style.height = size + "px";
                    createElement.style.left = Math.random() * innerWidth + "px";

                    container[0].appendChild(createElement);

                    setTimeout(function () {
                        createElement.remove();
                    }, 4000)
                }
            }

        }

    });

}