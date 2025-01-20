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

const myInterval123999 = setInterval(function(){
    if(document.querySelector('.actions input') !== null){
        document.querySelector('[data-application-name="embedded-viral-link-ui"]').style.display = 'none';
        document.querySelector('.actions input').style.backgroundColor = '#3d0d6d';
        document.querySelector('.actions input').style.border = '1px solid #FFFFFF';
        clearInterval(myInterval123999);
    }
},100);

document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');

      question.addEventListener('click', () => {
          const isActive = item.classList.contains('active');

          // Close all other active items
          faqItems.forEach(i => i.classList.remove('active'));

          // Toggle the clicked item
          if (!isActive) {
              item.classList.add('active');
          }
      });
  });
});


