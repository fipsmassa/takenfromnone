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

/* Übergabe der Formulardaten */
  function contact(){
    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }

    var mail = getUrlVars()["mail"];
    var vorname = getUrlVars()["vorname"];
    var nachname = getUrlVars()["nachname"];
    var tel = getUrlVars()["tel"];
    var comment = getUrlVars()["comment"];

    console.log(mail);
    console.log(comment);

    var mailEcho = mail.replace(/\%40/g, '@');
    var telEcho = tel.replace(/\%2B/g, '+');
    var commentEcho = comment.replace(/\+/g, ' ').replace(/\%0D/g, ' ').replace(/\%0A/g, ' ').replace(/\%2C/g, ',');

    $(".var-mail").append(mailEcho);
    $(".var-vorname").append(vorname);
    $(".var-nachname").append(nachname);
    $(".var-tel").append(telEcho);
    $(".var-comment").append(commentEcho);
  }

  if(document.getElementById("form-submit")){
    contact();
  }

/* Kennzeichnung der aktiven Seite in der Navigation */
  function setActive(){
    var bodyID = $("body").attr('id');
    switch(bodyID){
      case "gallerie":
        $(".gallerie-item").addClass("active");
        break;
      case "news":
        $(".news-item").addClass("active");
        break;
      case "gigs":
        $(".gigs-item").addClass("active");
        break;
      case "booking":
        $(".booking-item").addClass("active");
        break;
      case "band":
        $(".band-item").addClass("active");
        break;
      case "musik":
        $(".musik-item").addClass("active");
        break;
      case "shop":
        $(".shop-item").addClass("active");
        break;
   }
    console.log("setActive");
  }

  if($("body").hasClass("sub-page")){
    setActive();
  }


});
