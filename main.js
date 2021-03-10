

$('.link_anchor').on('click', function (e) {
  e.preventDefault();
 
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear');
});

const  body = document.querySelector('body');
const burger = document.querySelector('.burger');


burger.addEventListener('click', (e) => {
	e.preventDefault();
	body.classList.toggle('menu-active');
});
