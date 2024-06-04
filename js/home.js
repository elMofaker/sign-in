// const logo = document.querySelectorAll("#logo path");

// for (let i = 0; i < logo.length; i++) {
//     console.log(`Letter ${i} length is ${logo[i].getTotalLength()}`);
// }

// icon loading
$(window).on("load", function () {
  $(".content").removeClass("hidden").addClass("fade-in").fadeIn(1000);
  $(".loader").fadeOut(3000, function () {});
});
