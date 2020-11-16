//click the box to toggle back and forth
//the transition version

let clickToggle= true;

$('.box').click(function(){
    if(clickToggle== true){
        $('.box').css("background", "purple");
    } else{
        $('.box').css("background", "orange");
    }
    clickToggle= !clickToggle;
})
