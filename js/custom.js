// $(document).ready(function (){


//     $("body").niceScroll();
    
//     $('.carousel').carousel({
//         interval:100
//     });
// });


    var text = ["Developer", "Designer", "Covert design","website design","backend","PHP","FRONT-END","OTHERS"];
    var counter = 0;
    var elem = document.getElementById("changeText");
    setInterval(change, 300);
    function change() {
     elem.innerHTML = text[counter];
        counter++;
        if(counter >= text.length) { counter = 0; }
    }
