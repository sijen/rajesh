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
        let n = $(".image").index( this );
      console.log("number :"+n)
      if(bigImg === true){
        $(".image").eq(n).addClass("makebig")
        $(".image").eq(n).removeClass("img")
      }
      else{
        $(".image").eq(n).removeClass("makebig")
        $(".image").eq(n).addClass("img")
      }
      bigImg = !bigImg;
    },
    hover : $(".image").css("cursor","pointer")
    });

    $(".zoomImg").on({
      click : function (){
        let n = $(".zoomImg").index( this );
      console.log("number :"+n)
        $(".thisImg").eq(n).addClass("zoom")
        $(".three").children().eq(n).removeClass("el1-img")
    },
    hover : $(".thisImg").css("cursor","pointer")
    });
    $(".thisImg").on({
      click : function (){
        let n = $(".thisImg").index( this );
      console.log("number :"+n)
        $(".thisImg").eq(n).removeClass("zoom")
        $(".three").children().eq(n).addClass("el1-img")
    },
    hover : $(".thisImg").css("cursor","pointer")
    });
})

// else{
//   $(".thisImg").eq(n).removeClass("zoom")
//   $(".el1-img").eq(n).addClass("el1-img")
// }