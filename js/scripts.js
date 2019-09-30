$(document).ready(function(event){
    $("#design").click(function(){
        $(".sec1").hide();
        $(".click1").show();
    });
    $("#design1").click(function(){
        $(".sec1").show();
        $(".click1").hide();
    });
    $("#dev").click(function(){
        $(".sec2").hide();
        $(".click2").show();
    });
    $("#dev1").click(function(){
        $(".sec2").show();
        $(".click2").hide();
    });
     $("#product").click(function(){
        $(".sec3").hide();
        $(".click3").show();
     });
     $("#product1").click(function(){
        $(".sec3").show();
        $(".click3").hide();
     });

    
     $(".project").hide();
     $(".crosshover").hover(function(){
     $(this).find(".project").toggle();
     });
     

     $(".frm1").submit(function(){
         var name =$("input#name").val();
         alert(name+" we have received your message. Thank you for reaching out to us.");
     });
     
     event.preventDefault(); 
    });
$(document).ready(function(){
$(".image1").hover(function(){
$("this").animate(opacity,"0.4")});
});
