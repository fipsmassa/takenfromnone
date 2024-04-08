$(function() {


/* Anpassung der Größe der Navigation */
 $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 150) {
          $("#nav").addClass("thin").removeClass("regular");
      } else {
        $("#nav").removeClass("thin").addClass("regular");
      }
  });

  $(".overlay .close").click(function(){
    $(".overlay").toggleClass("enabled").toggleClass("disabled");
    $(".home_new").toggleClass("no-scroll");
  })

  $(".nav-burger").click(function(){
    $("#tfn-navbar").toggleClass("show").toggleClass("hidden");
    $(this).toggleClass("cross");
  })

    $(".nav-item").click(function(){
      $("#tfn-navbar").toggleClass("show").toggleClass("hidden");
      $(".nav-burger").toggleClass("cross");
    })

    $(".lyrics-link.ftts").click(function(){
      $(".lyrics-text.ftts-text").toggleClass("show").toggleClass("hidden");
      $(".lyrics").toggleClass("no-scroll");
    })

    $(".lyrics-link.bbwr-track").click(function(){
      $(".lyrics-text.bbwr-track-text").toggleClass("show").toggleClass("hidden");
      $(".lyrics").toggleClass("no-scroll");
    })

    $(".lyrics-link.holy").click(function(){
      $(".lyrics-text.holy-text").toggleClass("show").toggleClass("hidden");
      $(".lyrics").toggleClass("no-scroll");
    })

    $(".lyrics-link.tiny").click(function(){
      $(".lyrics-text.tiny-text").toggleClass("show").toggleClass("hidden");
      $(".lyrics").toggleClass("no-scroll");
    })

    $(".lyrics-link.never").click(function(){
      $(".lyrics-text.never-text").toggleClass("show").toggleClass("hidden");
      $(".lyrics").toggleClass("no-scroll");
    })

    $(".lyrics-link.mr").click(function(){
      $(".lyrics-text.mr-text").toggleClass("show").toggleClass("hidden");
      $(".lyrics").toggleClass("no-scroll");
    })

    $(".lyrics-link.satisfaction").click(function(){
      $(".lyrics-text.satisfaction-text").toggleClass("show").toggleClass("hidden");
      $(".lyrics").toggleClass("no-scroll");
    })

    $(".lyrics-link.mountains").click(function(){
      $(".lyrics-text.mountains-text").toggleClass("show").toggleClass("hidden");
      $(".lyrics").toggleClass("no-scroll");
    })

    $(".lyrics-link.lonestar").click(function(){
      $(".lyrics-text.lonestar-text").toggleClass("show").toggleClass("hidden");
      $(".lyrics").toggleClass("no-scroll");
    })

    $(".lyrics-link.nice").click(function(){
      $(".lyrics-text.nice-text").toggleClass("show").toggleClass("hidden");
      $(".lyrics").toggleClass("no-scroll");
    })

    $(".lyrics-link.remember").click(function(){
      $(".lyrics-text.remember-text").toggleClass("show").toggleClass("hidden");
      $(".lyrics").toggleClass("no-scroll");
    })

    $(".lyrics-link.alright").click(function(){
      $(".lyrics-text.alright-text").toggleClass("show").toggleClass("hidden");
      $(".lyrics").toggleClass("no-scroll");
    })

    $(".lyrics-overlay-inner .close-lyrics").click(function(){
      $(this).closest(".lyrics-text").toggleClass("show").toggleClass("hidden");
      $(".lyrics").toggleClass("no-scroll");
    })

});
