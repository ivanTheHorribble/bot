var fuck = document.getElementById("fuck");
var url =  "https://sp-today.com/app_api/cur_damascus.json";
var url1 = "https://lirarate.org/wp-json/lirarate/v2/rates?currency=LBP&_ver=t2021112122"
function  mia(){



    fetch(url)
    .then(response => response.text())
    .then((response) => {
       var json = JSON.parse(response);
       document.getElementById('hi').innerHTML = "sell :" +''+json[0].ask + '' + " buy :" + '' + json[0].bid;
    })

      }

      function lana (){
        var code =document.getElementById('urk').contentWindow.document.body.innerHTML
        document.getElementById('hi').innerHTML = code ;

    }
