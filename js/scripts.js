$(document).ready(function(event){
    $("#design").click(function(){
        $(".sec1").toggle();
        $(".click1").toggle();
    });
    $("#dev").click(function(){
        $(".sec2").toggle();
        $(".click2").toggle();
    });
     $("#product").click(function(){
        $(".sec3").toggle();
        $(".click3").toggle();
     });
 
     event.preventDefault(); 
});