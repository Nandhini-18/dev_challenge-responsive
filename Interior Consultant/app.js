$(document).ready(function () {
  $(".menu").click(function () {
    $(".sidebar").css("display", "block");
    $(".author-wrapper").css("z-index", "-1");
  });
  $(".cancel-icon").click(function () {
    $(".sidebar").css("display", "none");
    $(".author-wrapper").css("z-index", "0");
  });
});
