'use strict';
{

    window.addEventListener('DOMContentLoaded', function() {

        const comSidePlaces = document.querySelectorAll('.card-com img');
        const playerSidePlaces = document.querySelectorAll('.card-player img');
        const areaWrapp = document.querySelectorAll('.area-container');

        const btn = document.getElementById('button');
    
        //markの序列: 4(spade) > 3(heart) > 2(diamond) > 1(club)

        function makeCardArray () {
            const cardArray = [];
            const markArray = ["club", "diamond", "heart", "spade"]

            for(let i = 0; i < 4; i++) {
                for(let j = 1; j < 14; j++) {
                    const cardObj = { mark: 0, num: 0, src: "" };
                    
                    cardObj["mark"] = i;
                    cardObj["num"] = j;

                    let cardImageNum = j % 13 + 1 ;
                    if(cardImageNum  < 10 ) {
                        cardImageNum = "0" + cardImageNum;
                    }

                    cardObj["src"] = "card_" + markArray[i] + "_"  + cardImageNum + ".jpg";
                    cardArray.push(cardObj);
                }
            }
            return cardArray;
        }


        //各カードをObjectとして配列に格納
        const cardArray = makeCardArray();
    
        //ゲームスタート
        btn.addEventListener('click', gameStart, false);

        let gameCount = 0;
    
        function gameStart() {

            gameCount ++;
            
            //ボタンを一時的に無効に
            btn.disabled = true;
            btn.classList.add('isRunning');
    
            //com側の手札 （最終的に1勝負毎の最高の手札を格納）
            let comHand = [];
            //player側の手札
            let playerHand = [];
            
            //成立役のポイントをこれまでの手札と比較する為の変数　最大値を更新すれば手札を入れ替える
            let maxJugePointObj1 = { handName: "", point: 0  };
            let maxJugePointObj2 = { handName: "", point: 0 };
    
            //内部の手札を配る上限値（要調整）
            const Max_Loop_Count = gameCount * 50;
            //ループを抜けるために必要なポイント　6の場合はフラッシュ以上の役が必要
            // const Requried_Hand_Point = 600;
            
            let i = 0;
    
            while(i < Max_Loop_Count) {
                //cardArrayのディープコピー
                const cardArrayCopy = JSON.parse(JSON.stringify(cardArray));
    
                //各側の手札 一時保管配列
                const tmpComHand = [];
                const tmpPlayerHand = [];
    
                //カードを交互に格納していくと同時に一枚づつコピーから削除
                for(let i = 0; i < 10; i++) {
                    const randomIndex = Math.floor(Math.random() * cardArrayCopy.length);
                    const cardObj = cardArrayCopy[randomIndex];
    
                    if(i % 2 === 0) {
                        tmpComHand.push(cardObj);
                        cardArrayCopy.splice(randomIndex, 1);       
                    }else{
                        tmpPlayerHand.push(cardObj);
                        cardArrayCopy.splice(randomIndex, 1);  
                    }
                }
    
                //役判定　Requried_Hand_Point以上が得られたらループを抜ける
                //judgeHand(array) : arrayの役のオブジェクト（handComposition[？]）を判定し返す
    
                const jugePointObj1 = judgeHand(tmpComHand);
                const jugePointObj2 = judgeHand(tmpPlayerHand);
    
                if(jugePointObj1["point"] > maxJugePointObj1["point"]) {
                    //更新
                    maxJugePointObj1 = jugePointObj1;
                    //各側の手札として格納
                    comHand = tmpComHand;
                }
    
                if(jugePointObj2["point"] > maxJugePointObj2["point"]) {
                    //更新
                    maxJugePointObj2 = jugePointObj2;
                    //各側の手札として格納
                    playerHand = tmpPlayerHand;
                }
    
                // if(jugePointObj2["point"] === 1000 || jugePointObj1["point"] === 1000) {
                //     console.log(i + "回目で成立");
                //     clearInterval(timer);
                // }
    
                //ある程度の役が片方に成立したらループを抜ける
                // if(jugePoint1["point"] >= Requried_Hand_Point || jugePoint2["point"] >= Requried_Hand_Point) {
                //     comHand = tmpComHand;
                //     playerHand = tmpPlayerHand;
                //     console.log(i + "回目でフラッシュ成立");
                //     console.log(comHand);
                //     console.log(playerHand);
                //     break;
                // }
    
                i++;
            }

            /* ↑↑↑↑↑↑↑↑↑ ループ終了 ↑↑↑↑↑↑↑↑↑ */

    
            //DOMへの反映 引数：els, cardArray
            reflectToDOM(comSidePlaces, comHand);
            reflectToDOM(playerSidePlaces, playerHand);

            // 今回の勝負結果を反映
            reflectToResult( maxJugePointObj1, maxJugePointObj2);
    
        }
    
        
        //役判定 
        const handComposition = [
            {handName : "ロイヤルストレートフラッシュ", point: 1000 },
            {handName : "ストレートフラッシュ",         point: 900 },
            {handName : "フォーカード",                point: 800 },
            {handName : "フルハウス",                  point: 700 },
            {handName : "フラッシュ",                  point: 600 },
            {handName : "ストレート",                  point: 500 },
            {handName : "スリーカード",                point: 400 },
            {handName : "ツーペア",                    point: 300 },
            {handName : "ワンペア",                    point: 200 },
            {handName : "ノーハンド",                  point: 100 },
        ]
    
    
        /*------------------------------------------------------
          役  判  定
        -------------------------------------------------------*/
        function judgeHand(handArray) {

            //数字順にソート
            handArray.sort(function(a, b) {
                return a["num"] - b["num"];
            });

            //配列にnumの要素を抽出する　例[ 2, 5, 8, 8, 13 ]
            const numArray = [];
            for(let i = 0; i < handArray.length; i++) {
                numArray.push(handArray[i]["num"]);
            }

            //フラッシュの判定
            if( handArray.every( v => v["mark"] === handArray[0]["mark"] )) {
    
                //最終的なスラッシュの内容を格納
                let flashJudge;
                
                //ロイヤルストレートフラッシュの判定 最小値が9（表示は10）ならロイヤル確定
                if(Math.min(...numArray) === 9){
                    
                    flashJudge = handComposition[0];  //ロイヤルストレートフラッシュ
                    
                }else{
                    //Aがある場合の並び変え
                    if(Math.max(...numArray) === 13) {
                            const ace = handArray.pop();
                            handArray.splice(0, 0, ace);
                    }
                    
                    for(let i = 0; i < handArray.length - 1; i++) {
                        if((handArray[i]["num"] % 13 ) + 1 !== (handArray[i + 1]["num"] % 13)){
                            flashJudge = handComposition[4];  //フラッシュ
                            break;
                        }
                        
                        flashJudge = handComposition[1];  //ストレートフラッシュ
                    }
                }
                return flashJudge;
            }
    
            //ワンペア～フォーカードの判定

            let forCardCount = 0;
            let threeCardCoount = 0;
            let onePareCount = 0;　
        
            for(let i = 0; i < numArray.length; i++) {
                const result = numArray.filter(function(v){
                    return v === numArray[i];
                }).length;
    
                if(result === 3) {
                    threeCardCoount ++;
                }
                if(result === 2) {
                    onePareCount ++;
                }
                if(result === 4) {
                    forCardCount ++;
                }
            }

            if(forCardCount > 0) {
                return handComposition[2]; //フォーカード
            }

            if(threeCardCoount > 0 && onePareCount > 0) {
                return handComposition[3]; //フルハウス
            }else if(threeCardCoount > 0) {
                return handComposition[6]; //スリーカード
            }

            if(onePareCount === 4) {
                return handComposition[7]; //ツゥーペア
            }

            if(onePareCount === 2) {
                return handComposition[8]; //ワンペア
            }
    
            return handComposition[9] //ノーハンド
        }

        /*--------------------------------------------
            手札のDOMへの反映
        ---------------------------------------------*/
    
        function reflectToDOM(els, cardArray) {
    
            for(let i = 0; i < cardArray.length; i++) {
                els[i].src = 'img/' + cardArray[i]["src"];
            }
    
            for(let i = 0; i < areaWrapp.length; i++) {
    
                areaWrapp[i].classList.add("card-display-animation");
                setTimeout(function() {
                    areaWrapp[i].classList.remove("card-display-animation");
                }, 2000);
            }
        }


        /*---------------------------------------------------
        勝敗結果をDOMへ反映
        -----------------------------------------------------*/

        const comResultText = document.querySelector('.com-result');
        const yourResultText = document.querySelector('.your-result');

        const pointBarComside = document.querySelector('.point-bar_comside');
        const pointBarYourside = document.querySelector('.point-bar_yourside');

        const resultPerOneGame = document.querySelector('.result_per_one_game');

        const totalScore = document.querySelector('.total-score');
        const totalScoreH3 = document.querySelector('.total-score h3');
        const totalScoreAnchor = document.querySelector('.total-score-anchor');
        totalScoreAnchor.href = location.href;

        //total pointの初期値
        let comTotalPoints = 0;
        let yourTotalPoints = 0;

        function reflectToResult(pointObj1, pointObj2) {
            comResultText.textContent = pointObj1["handName"];
            yourResultText.textContent = pointObj2["handName"];

            comResultText.classList.add("card-display-animation");
            yourResultText.classList.add("card-display-animation");

            resultPerOneGame.classList.remove("visible");

            setTimeout(function() {
                comResultText.classList.remove("card-display-animation");
                yourResultText.classList.remove("card-display-animation");
            }, 2000);

            //total Point　への反映
            const tmpComTotalPoints = comTotalPoints;
            const tmpYourTotalPoints = yourTotalPoints;

            if(pointObj1["point"] > pointObj2["point"]) {
                comTotalPoints += 20;
                resultPerOneGame.textContent = "You Lose";
                resultPerOneGame.style.color = "blue";
                resultPerOneGame.style.borderColor = "blue";
            }else if(pointObj1["point"] < pointObj2["point"]){
                yourTotalPoints += 20;
                resultPerOneGame.textContent = "You Win";
                resultPerOneGame.style.color = "red";
                resultPerOneGame.style.borderColor = "red";
            }else {
                resultPerOneGame.textContent = "Draw";
                resultPerOneGame.style.color = "rgb(198, 201, 49)";
                resultPerOneGame.style.borderColor = "rgb(198, 201, 49)";
            }

            pointBarComside.style.width = tmpComTotalPoints + "%";
            pointBarYourside.style.width = tmpYourTotalPoints + "%";

            new Promise( resolve => {

                setTimeout(() => {
                    pointBarComside.style.width = comTotalPoints + "%";
                    pointBarYourside.style.width = yourTotalPoints + "%";
                    resultPerOneGame.classList.add("visible"); 
                    resolve();
                }, 2000);

            }).then(() =>{

                setTimeout(function() {
                    btn.disabled = false;
                    btn.classList.remove('isRunning');
                    
                    //最終結果表示
                    if(comTotalPoints === 100) {
                        totalScoreH3.textContent = "あなたの負け";
                        totalScore.classList.add('visible');
                    }
                    if(yourTotalPoints === 100) {
                        totalScoreH3.textContent = "あなたの勝ち！";
                        totalScore.classList.add('visible');
                    }

                }, 2000);
            });
        
        }


    });
}