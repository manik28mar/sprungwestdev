// var elem = document.querySelector('.main-carousel');
// var flkty = new Flickity( elem, {
//   // options
//   cellAlign: 'left',
//   contain: true,
//   wrapAround: true,
//   autoPlay: 2000
// });

$('.main-carousel').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    autoPlay: 5000,
    freeScroll: true,
    wrapAround: true,
    fade: true,
    draggable: true,
  });


  function openNav() {
    document.getElementById("nav-bar").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("nav-bar").style.width = "0%";
  }
