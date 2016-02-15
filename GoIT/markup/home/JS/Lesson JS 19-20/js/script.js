$(function() {
  $('.jcarousel')
    .jcarouselAutoscroll({
      interval: 3000,
      target: '+=1',
      autostart: true
  })
});


$('.jcarousel').jcarouselAutoscroll('start');

$(function(){
  $('ul.tabs li:first').addClass('active');
  $('.block article').hide();
  $('ul.tabs li').on('click',function(){
    $('ul.tabs li').removeClass('active');
    $(this).addClass('active')
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).toggle('slow');
    return false;
  });
})





