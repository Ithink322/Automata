// FIRST GIF PLAY AND PAUSE //
(function ($) {
  $(".gif-with-play").on("click", function () {
    var $this = $(this),
      $img = $this.children("img"),
      $imgSrc = $img.attr("src"),
      $imgSrcgif = $img.attr("data-srcgif"),
      $imgExt = $imgSrcgif.split(".");

    if ($imgExt[1] === "gif") {
      $this.addClass("loading-hide");

      $img.attr("src", $img.data("srcgif")).attr("data-srcgif", $imgSrc);

      $($img).load(function () {
        $this.removeClass("loading-hide");
      });
    } else {
      $img.attr("src", $imgSrcgif).attr("data-srcgif", $img.data("srcgif"));
    }

    $this.toggleClass("play");
  });
})(jQuery);

// SECOND GIF PLAY AND PAUSE //
(function ($) {
  $(".gif-with-play_B2").on("click", function () {
    var $this = $(this),
      $img = $this.children("img"),
      $imgSrc = $img.attr("src"),
      $imgSrcgif = $img.attr("data-srcgif"),
      $imgExt = $imgSrcgif.split(".");

    if ($imgExt[1] === "gif") {
      $this.addClass("loading-hide_B2");

      $img.attr("src", $img.data("srcgif")).attr("data-srcgif", $imgSrc);

      $($img).load(function () {
        $this.removeClass("loading-hide_B2");
      });
    } else {
      $img.attr("src", $imgSrcgif).attr("data-srcgif", $img.data("srcgif"));
    }

    $this.toggleClass("play_B2");
  });
})(jQuery);

/* Event tracking animation text */

/* sound  firework :hover 

$(function () {
  var myaudio = $("#myaudio")[0];
  $("#fireworks_image").mouseenter(function () {
    myaudio.play();
  });
});
*/

/* sound firework click */
var fireworks_image = document.getElementById("fireworks_image"),
  myaudio = document.getElementById("myaudio");
fireworks_image.addEventListener("click", fPlay, false);
function fPlay() {
  myaudio.play();
}

/* music c-418 :hover */
$(function () {
  var myaudio = $("#mymusic")[0];
  $("#muuz").mouseenter(function () {
    myaudio.play();
  });
});
