// const logo = document.querySelectorAll("#logo path");

// for (let i = 0; i < logo.length; i++) {
//     console.log(`Letter ${i} length is ${logo[i].getTotalLength()}`);
// }

// icon loading
$(window).on("load", function () {
  $(".content").removeClass("hidden").addClass("fade-in").fadeIn(1000);
  $(".loader").fadeOut(3000, function () {});
});

// // add and remov classes
document.querySelector('.btn_login').addEventListener('click', function() {
  document.querySelector('.hid_form').classList.add('add_top');
  document.querySelector('.show_form').classList.add('remove_top');
  setTimeout(function() {
      document.querySelector('.hid_form').style.display = 'none';
      document.querySelector('.show_form').style.display = 'block';
  }, 500);
});

document.querySelector('.btn_sigini').addEventListener('click', function() {
  document.querySelector('.hid_form').classList.remove('add_top');
  document.querySelector('.show_form').classList.remove('remove_top');
  setTimeout(function() {
      document.querySelector('.hid_form').style.display = 'block';
      document.querySelector('.show_form').style.display = 'none';
  }, 500);
});