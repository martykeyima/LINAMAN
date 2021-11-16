$(function(){

    $(".toggle").on("click", function(){
        if($(".nav-link").hasClass("active")){
            $(".nav-link").removeClass("active");
            document.querySelector(".backgroud").style.display="none";
            document.querySelector(".bars").style.display="block";
        }else{
            $(".nav-link").addClass("active");
            document.querySelector(".backgroud").style.display="block";
            document.querySelector(".bars").style.display="none";
        }
    });

    $(".drop-1").on("click", function(){
        if($(".drop-item-1").hasClass("active")){
            $(".drop-item-1").removeClass("active");
        }else{
            $(".drop-item-1").addClass("active");
        }
    });


    $(".drop-2").on("click", function(){
        if($(".drop-item-2").hasClass("active")){
            $(".drop-item-2").removeClass("active");
        }else{
            $(".drop-item-2").addClass("active");
        }
    });

    $(".drop-3").on("click", function(){
        if($(".drop-item-3").hasClass("active")){
            $(".drop-item-3").removeClass("active");
        }else{
            $(".drop-item-3").addClass("active");
        }
    });
});
