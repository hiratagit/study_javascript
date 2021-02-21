'use strict';
{


    const comSidePlaces = document.querySelectorAll('.card-com img');
    const playerSidePlaces = document.querySelectorAll('.card-player img');

    const btn = document.getElementById('button');

    //mark: 4(spade) 3(heart) 2(diamond) 1(club)
    const markArray = ["クラブ", "ダイヤ", "ハート", "スペード"];

    const cardArray = [ // club
                        {mark: 0, num: 1, src: "card_club_01.jpg"},
                        {mark: 0, num: 2, src: "card_club_02.jpg"},
                        {mark: 0, num: 3, src: "card_club_03.jpg"},
                        {mark: 0, num: 4, src: "card_club_04.jpg"},
                        {mark: 0, num: 5, src: "card_club_05.jpg"},
                        {mark: 0, num: 6, src: "card_club_06.jpg"},
                        {mark: 0, num: 7, src: "card_club_07.jpg"},
                        {mark: 0, num: 8, src: "card_club_08.jpg"},
                        {mark: 0, num: 9, src: "card_club_09.jpg"},
                        {mark: 0, num: 10, src: "card_club_10.jpg"},
                        {mark: 0, num: 11, src: "card_club_11.jpg"},
                        {mark: 0, num: 12, src: "card_club_12.jpg"},
                        {mark: 0, num: 13, src: "card_club_13.jpg"},
                        //diamond
                        {mark: 1, num: 1, src: "card_diamond_01.jpg"},
                        {mark: 1, num: 2, src: "card_diamond_02.jpg"},
                        {mark: 1, num: 3, src: "card_diamond_03.jpg"},
                        {mark: 1, num: 4, src: "card_diamond_04.jpg"},
                        {mark: 1, num: 5, src: "card_diamond_05.jpg"},
                        {mark: 1, num: 6, src: "card_diamond_06.jpg"},
                        {mark: 1, num: 7, src: "card_diamond_07.jpg"},
                        {mark: 1, num: 8, src: "card_diamond_08.jpg"},
                        {mark: 1, num: 9, src: "card_diamond_09.jpg"},
                        {mark: 1, num: 10, src: "card_diamond_10.jpg"},
                        {mark: 1, num: 11, src: "card_diamond_11.jpg"},
                        {mark: 1, num: 12, src: "card_diamond_12.jpg"},
                        {mark: 1, num: 13, src: "card_diamond_13.jpg"},
                        //heart
                        {mark: 2, num: 1, src: "card_heart_01.jpg"},
                        {mark: 2, num: 2, src: "card_heart_02.jpg"},
                        {mark: 2, num: 3, src: "card_heart_03.jpg"},
                        {mark: 2, num: 4, src: "card_heart_04.jpg"},
                        {mark: 2, num: 5, src: "card_heart_05.jpg"},
                        {mark: 2, num: 6, src: "card_heart_06.jpg"},
                        {mark: 2, num: 7, src: "card_heart_07.jpg"},
                        {mark: 2, num: 8, src: "card_heart_08.jpg"},
                        {mark: 2, num: 9, src: "card_heart_09.jpg"},
                        {mark: 2, num: 10, src: "card_heart_10.jpg"},
                        {mark: 2, num: 11, src: "card_heart_11.jpg"},
                        {mark: 2, num: 12, src: "card_heart_12.jpg"},
                        {mark: 2, num: 13, src: "card_heart_13.jpg"},
                        //spade
                        {mark: 3, num: 1, src: "card_spade_01.jpg"},
                        {mark: 3, num: 2, src: "card_spade_02.jpg"},
                        {mark: 3, num: 3, src: "card_spade_03.jpg"},
                        {mark: 3, num: 4, src: "card_spade_04.jpg"},
                        {mark: 3, num: 5, src: "card_spade_05.jpg"},
                        {mark: 3, num: 6, src: "card_spade_06.jpg"},
                        {mark: 3, num: 7, src: "card_spade_07.jpg"},
                        {mark: 3, num: 8, src: "card_spade_08.jpg"},
                        {mark: 3, num: 9, src: "card_spade_09.jpg"},
                        {mark: 3, num: 10, src: "card_spade_10.jpg"},
                        {mark: 3, num: 11, src: "card_spade_11.jpg"},
                        {mark: 3, num: 12, src: "card_spade_12.jpg"},
                        {mark: 3, num: 13, src: "card_spade_13.jpg"}

    ]; 

    // JSON.stringify(array)


    function gameStart() {
        {
            //com側の手配
            const comHand = [];
            //player側の手配
            const plyaerHand = [];
            const cardArrayCopy = JSON.parse(JSON.stringify(cardArray));
        
            for(let i = 0; i < 10; i++) {
                //cardArrayのディープコピーを作る
                const randomIndex = Math.floor(Math.random() * cardArrayCopy.length);
                const cardObj = cardArrayCopy[randomIndex];
                comHand.push(cardObj);
                cardArrayCopy.splice(randomIndex, 1);
    
                //DOMへの反映 引数：index, els, cardArray
                reflectToDom(i, comSidePlaces, comHand);
    
                //配られたカードの中身を確認
                consoleDebag(comHand);
                
            }
        }
        // {

        //     const playerHand = [];
        //     const cardArrayCopy = JSON.parse(JSON.stringify(cardArray));
        
        //     for(let i = 0; i < 5; i++) {
        //         //cardArrayのディープコピーを作る
        //         const randomIndex = Math.floor(Math.random() * cardArrayCopy.length);
        //         const cardObj = cardArrayCopy[randomIndex];
        //         playerHand.push(cardObj);
        //         cardArrayCopy.splice(randomIndex, 1);
    
        //         //DOMへの反映 引数：index, els, cardArray
        //         reflectToDom(i, playerSidePlaces, playerHand);
    
        //         //配られたカードの中身を確認
        //         // consoleDebag(comHand);
                
        //     }
        // }

    }

    function reflectToDom(index, els, cardArray) {
        els[index].src = 'img/' + cardArray[index]["src"];
        els[index].classList.add("card-display-animation");
        setTimeout(function() {
            els[index].classList.remove("card-display-animation");
        }, 1000);

    }


    btn.addEventListener('click', gameStart, false);


    //debag
    function consoleDebag(array) {
        for(let i = 0; i < array.length; i++) {
            const cardMark = markArray[array[i]["mark"]];
            const cardNum = array[i]["num"];
            const src = array[i]["src"];
            console.log(`カードの${i + 1}枚目は、${cardMark}の${cardNum}: ${src}`);
            console.log(cardArray.length);
        }
    }


}