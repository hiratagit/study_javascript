'use strict';

/* ビンゴの仕様とコーディングの流れ

要件：
・横5列　縦5列
・列毎に数字の範囲が決まっている　例：左１列目は1-15 2列目は16-30, 31-45, 46-60, 61-75
・左から3列目、上から3行目の真ん中の枠はfreeで固定


コーディング：

左1列目の場合
・1-15までの数値からランダムに選び数値1つを取り出し、spliceメソッドで配列から削除
・

*/

{

    function createColumn(col) {
        const source = [];
        for(let i = 0; i < 15; i++) {
            source[i] = i + 1 + (15 * col);
        }
    
        const column = [];
        for(let i = 0; i < 5; i++) {
            column[i] = source.splice(Math.floor(Math.random() * source.length ), 1)[0];
        }
        return column;
    }

    function createColmuns() {
        const columns = [];
        for(let i = 0; i < 5; i++) {
            columns[i] = createColumn(i);
        }
        columns[2][2] = "Free";
        return columns;
    }

    function createBingo(columns) {
        const bingo = [];
        for(let row = 0; row < 5; row++) {
            bingo[row] = [];
            for(let col = 0; col < 5; col++) {
                bingo[row][col] = columns[col][row];
            }
        }
        return bingo;
    }

    function renderBingo(bingo) {
        for(let row = 0; row < 5; row++) {
            const tr = document.createElement('tr');
            for(let col = 0; col < 5; col++) {
                const td = document.createElement('td');
                td.textContent = bingo[row][col];
                tr.appendChild(td);
            }
            document.querySelector('tbody').appendChild(tr);
        }
    }

    const columns = createColmuns();
    const bingo = createBingo(columns);
    renderBingo(bingo);
}