"use strict"; 
{

    function reqListener () {
        console.log(this.responseText);
      }
      
      var oReq = new XMLHttpRequest();
      oReq.addEventListener("load", reqListener);
      oReq.open("GET", "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=73d8eb8b72898e11262ee31942a5f71e&freeword=ラーメン&pref=PREF40");
      oReq.send();
      
//     "name" : "開眼! JavaScript ―言語仕様から学ぶJavaScriptの本質",
//     "price": 2420,
//     "date" : "2013/6/19",
//     "publisher" : "オライリージャパン",
//     "ISBN-10" : "487311621X",
//     "size" : "1.5 x 15 x 21 cm",
//     "word" : "japanese",
//    "ranking":  17870
}