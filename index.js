$(document).ready(function () {
    // hide all images except the first one
    $(".carousel > img:gt(0)").hide();
    // set interval for the automatic slide show
    setInterval(function () {
      $('.carousel > img:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.carousel').hide();
    }, 5000);
  
    $('.prev').click(function(){
      $('.carousel > img:first')
        .appendTo('.carousel')
        .fadeOut(1000)
        .prev()
        .fadeIn(1000);
    });
  
    $('.next').click(function(){
      $('.carousel > img:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.carousel').hide();
    });
  });

  const botao = document.querySelector(".btn-fixed");

window.addEventListener ("scroll", function (event) {
if (window.scrollY == 0) {
botao.classList.remove("visible");
} else {
botao.classList.add ("visible");
}
});
  
  
  
  
  
