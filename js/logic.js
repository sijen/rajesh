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
    $(".image").on({
      click : function (){
        let n = $(".image").index( this );
      console.log("number :"+n)

        $(".image").eq(n).toggleClass("makebig")
        $(".image").eq(n).toggleClass("img")
    },
    hover : $(".image").css("cursor","pointer")
    });// end of display image in large form


    //  zoom in image of work section
    $(".zoomImg").on({
      click : function (){
        let n = $(".zoomImg").index( this );
      console.log("number :"+n)
        $(".thisImg").eq(n).toggleClass("zoom")
        $(".three").children().eq(n).removeClass("el1-img")
    },
    hover : $(".thisImg").css("cursor","pointer")
    });//end of zoom in image of work section


    //start of image zoom
    $(".thisImg").on({
      click : function (){
        let n = $(".thisImg").index( this );
      console.log("number :"+n)
        $(".thisImg").eq(n).toggleClass("zoom")
        $(".three").children().eq(n).addClass("el1-img")
    },
    hover : $(".thisImg").css("cursor","pointer")
    });//end of image zoom


    //for smooth scroll
    $("a").click(function(event){
      if(this.hash !== ""){
        event.preventDefault();
        // var hash = this.hash;
        $("html").animate({
          scrollTop : $(this.hash).offset().top
        },2100
        // , function(){
   
        //   // Add hash (#) to URL when done scrolling (default click behavior)
        //   // window.location.hash = hash;
        // }
        )//end of animate function
        $("a").css({"color":"white","transition":"2s all"})//for all anchor tag transition
        $(this).css({"color":"#e96d00ea","transition":"2s all"})//for the current anchor tag transition
      }//end of if condition
    });//end of smooth scroll

    //skills animation
    $(".skill-bar-wrapper").each(function(){
      $(this).find(".skill-bar-fill").animate({
        width : $(this).attr('data')
      },2000)
    })
})//end of ready function

// else{
//   $(".thisImg").eq(n).removeClass("zoom")
//   $(".el1-img").eq(n).addClass("el1-img")
// }