$('.fa-bars').click(function(){
  $('.hamburger-menu').addClass('active');
  console.log('click');
});
$('.fa-times').click(function(){
  $('.hamburger-menu').removeClass('active');
  console.log('click');
});
