$(document).ready(() => {
  let a = 0;
  $(window).scroll(() => {
    const oTop = $('.count').offset().top - window.innerHeight;
    if (a === 0 && $(window).scrollTop() > oTop) {
      $('.count').each(() => {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text(),
        }, {
          duration: 4000,
          easing: 'swing',
          step(now) {
            $(this).text(Math.ceil(now));
          },
        });
      });
      $('.process-video video').trigger('play');
      a = 1;
    }
  });
});
