$("#immersive_slider").immersive_slider({
  animation: "bounce", // As usual, you can change the animation to these: slide (default), bounce, fade, slideUp, and bounceUp
  slideSelector: ".slide", // This option will let you assign custom selector for each slides in case .slide is already taken
  container: ".main", // This option lets you define the container of which the background will appear. Make sure the slider is inside this container as well.
  cssBlur: false, // Experimental: In case you don't want to keep adding new data-blurred attributes, trigger this to true and it will generate the blur image on the fly (more info below).
  pagination: true, // Toggle this to false if you don't want a pagination
  loop: true, // Toggle to false if you don't want the slider to loop. Default is true.
  autoStart: false, // Define the number of milliseconds before it navigates automatically. Change this to 0 or false to disable autoStart. The default value is 5000.
});

const mainNavHeight = $(".main-nav").height();

$(".nav-button.about").click((e) => {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $("#about").offset().top - mainNavHeight,
    },
    700
  );
});
$(".nav-button.portfolio").click((e) => {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $("#portfolio").offset().top - mainNavHeight,
    },
    700
  );
});
$(".nav-button.contact").click((e) => {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $("#contact").offset().top - mainNavHeight,
    },
    700
  );
});
$(".scroll-to-top").click((e) => {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    700
  );
});
