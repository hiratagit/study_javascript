"use strict";

{
    const today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth(); 

    function getCalenderHead() {
        const dates = [];
        //今月の0日目を指定することで先月の末日を取得
        const d = new Date(year, month, 0).getDate();
        //今月初日の曜日の数値を取得（日曜0....土曜6）
        const n = new Date(year, month, 1).getDay();

        for(let i = 0; i < n; i++) {
            dates.unshift({
                date: d - i,
                isTday: false,
                isDisabled : true,
            });
        }
        return dates;
    }

    function getCalenderTail() {
        const dates = [];
        //翌月の0日目を指定することで今月の末日を取得する事が出来る
        const lastDay = new Date(year, month + 1, 0).getDay();

        for(let i = 1; i < 7 - lastDay; i++) {
            dates.push({
                date: i,
                isToday: false,
                isDisabled: true,
            });
        }
        return dates;
    }
    
    function getCalenderBody() {
        const dates = []; // date:日付、day:曜日

        //翌月の0日目を指定することで今月の末日を取得する事が出来る
        const lastDate = new Date(year, month + 1, 0).getDate();

        for(let i = 1; i <= lastDate; i++) {
            dates.push({
                date: i,
                isToday: false,
                isDisabled: false,
            });
        }

        if(year === today.getFullYear() && month === today.getMonth()) {
            dates[today.getDate() - 1].isToday = true;
        }

        return dates;
    }

    function clearCalender() {
        const tbody = document.querySelector('tbody');
    
        while(tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }
    }

    function renderWeeks() {
        //スプレッド構文...で全ての配列を展開して格納
        const dates = [
            ...getCalenderHead(),
            ...getCalenderBody(),
            ...getCalenderTail(),
        ];

        const weeks = [];
        const weeksCount = dates.length / 7;

        for(let i = 0; i < weeksCount; i++) {
            weeks.push(dates.splice(0, 7));
        }

        weeks.forEach(week => {
            const tr = document.createElement('tr');
            week.forEach( date => {
                const td = document.createElement('td');

                td.textContent = date.date;
                if(date.isToday) {
                    td.classList.add('today');
                }
                if(date.isDisabled) {
                    td.classList.add('disabled');
                }

                tr.appendChild(td);
            });

            document.querySelector('tbody').appendChild(tr);
        });
    }

    function renderTitle() {
        const title = `${year}/${String(month + 1).padStart(2, "0")}`;
        document.getElementById('title').textContent = title;
    }

    function createCalender() {
        clearCalender();
        renderTitle();
        renderWeeks();
    }
    
    document.getElementById('prev').addEventListener('click', function() {

        month--;
        if(month < 0) {
            year --;
            month = 11;
        }
        createCalender();
    });

    document.getElementById('next').addEventListener('click', function() {
        month++;
        if(month > 11) {
            year ++;
            month = 0;
        }
        createCalender();
    });

    document.getElementById('today').addEventListener('click', function() {
        year = today.getFullYear();
        month = today.getMonth();

        createCalender();
    });

    createCalender();
    
}
