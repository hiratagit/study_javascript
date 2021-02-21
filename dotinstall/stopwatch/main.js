'use strict';

{

    const timer = document.getElementById('timer');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');

    let startTime;
    let timeoutId;
    let elapsedTime = 0;

    function countUp(){  
        const d = new Date(Date.now() - startTime + elapsedTime);
        const m = String(d.getMinutes()).padStart(2, '0');
        const s = String(d.getSeconds()).padStart(2, '0');
        const ms = String(d.getMilliseconds()).padStart(3, '0');

        timer.textContent = `${m}:${s}:${ms}`;

        timeoutId = setTimeout(function(){
            countUp();
        }, 10)
    }

    function setButtonStateInitial(){
        start.classList.remove('inactive');
        stop.classList.add('inactive');
        reset.classList.add('inactive');
    }

    function setButtonStateRunning(){
        start.classList.add('inactive');
        stop.classList.remove('inactive');
        reset.classList.add('inactive');
    }

    function setButtonStateStopped(){
        start.classList.remove('inactive');
        stop.classList.add('inactive');
        reset.classList.remove('inactive');
    }

    setButtonStateInitial();

    start.addEventListener('click', function(){

        if(start.classList.contains('inactive')) return;
        setButtonStateRunning();
        startTime = Date.now();
        countUp();
    });

    stop.addEventListener('click', function(){
        if(stop.classList.contains('inactive')) return;
        setButtonStateStopped()
        clearTimeout(timeoutId);
        elapsedTime += Date.now() - startTime;
    }); 
    
    reset.addEventListener('click', function(){
        if(reset.classList.contains('inactive')) return;
        setButtonStateInitial();
        timer.textContent = '00:00:000';
        elapsedTime = 0;
    });

}