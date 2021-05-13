$(document).ready(function(){
    $("#nep").hide();
    $("#en").click(function(){
      $("#nep").show("slow");
      $(this).hide("slow");
    });
    $("#nep").click(function(){
        $("#en").show("slow");
        $(this).hide("slow");
    });

    // to display image in large form
    var bigImg = true;
    $(".image").on({
      
      click : function (){
      var n = $(".image").index( this );
      if(bigImg == true){
        $(".element").eq(n).css("grid-template-columns","auto")
        n = null
      }
      else{
        $(".element").eq(n).css("grid-template-columns","auto auto")
        n = null
      }
      bigImg = !bigImg;
    },
    hover : $(".image").css("cursor","pointer")
    })
})