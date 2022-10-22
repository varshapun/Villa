const navbar = document.querySelector('.nav-bar')
const navLink = document.querySelectorAll('.nav-links')
const brandLogo = document.querySelector('.brand-logo')

// window.addEventListener('scroll', (event) => {
//   if (window.pageYOffset == 0) {
//     navbar.style.backgroundColor = 'transparent'

//   } else {
//     navbar.style.backgroundColor = '#f4f4f4'

//     navbar.style.opacity = '0'
//     navbar.style.height = '80px'
//     navbar.style.transition = 'all 1s'
//     navbar.style.opacity = '1'
//   }
// })
const slider = tns({
  container: '.my-slider',
  loop: true,
  items: 1,
  slideBy: 'page',
  nav: false,
  autoplay: true,
  speed: 400,
  autoplayButtonOutput: false,
  mouseDrag: true,
  lazyload: true,
  controlsContainer: '#customize-controls',
  responsive: {
    640: {
      items: 2,
    },

    768: {
      items: 3,
    },
  },
})

// Image slider open
const imageContainer = document.querySelector('.image-container')
const discoverImages = document.querySelectorAll('.discover-image')
const imageBox = document.querySelector('.image-box')
const closeBtn = document.querySelector('.close-btn')

// image-click handle
for (const discoverImg of discoverImages) {
  discoverImg.addEventListener('click', function click(e) {
    imageContainer.style.backgroundRepeat = 'no-repeat'
    imageContainer.style.backgroundSize = 'contain'
    imageContainer.style.backgroundPosition = 'center'
    imageBox.style.visibility = 'visible'
    if (e.target.id === '1') {
      imageContainer.style.backgroundImage = 'url(./img/discover-image-1.jpg)'
    } else if (e.target.id === '2') {
      imageContainer.style.backgroundImage = 'url(./img/discover-image-2.jpg)'
    } else if (e.target.id === '3') {
      imageContainer.style.backgroundImage = 'url(./img/discover-image-3.jpg)'
    } else if (e.target.id === '4') {
      imageContainer.style.backgroundImage = 'url(./img/discover-image-4.jpg)'
    } else if (e.target.id === '5') {
      imageContainer.style.backgroundImage = 'url(./img/discover-image-5.jpg)'
    } else if (e.target.id === '6') {
      imageContainer.style.backgroundImage =
        'url(./img//discover-image-6.jpg)'
    }else if (e.target.id === '7') {
      imageContainer.style.backgroundImage =
        'url(./img/discover-image-7.jpg)'
    }
    else if (e.target.id === '8') {
      imageContainer.style.backgroundImage =
        'url(./img/discover-image-8.jpg)'
    }
    else if (e.target.id === '9') {
      imageContainer.style.backgroundImage =
        'url(./img/discover-image-9.jpg)'
    }
    else if (e.target.id === '10') {
      imageContainer.style.backgroundImage =
        'url(./img/discover-image-10.jpg)'
    }
    else if (e.target.id === '11') {
      imageContainer.style.backgroundImage =
        'url(./img/discover-image-11.jpg)'
    }
    else if (e.target.id === '12') {
      imageContainer.style.backgroundImage =
        'url(./img/discover-image-12.jpg)'
    }
  })
}
// close btn handle

closeBtn.addEventListener('click', function click(e) {
  imageBox.style.visibility = 'hidden'
})

const facilityNavIcons = document.querySelectorAll('.facility-nav-icon')
const facilityNavIconIcon = document.querySelectorAll('.facility-nav-icon-icon')
const facilityNavIconP = document.querySelectorAll('.facility-nav-icon-p')
const facilityTextH2 = document.querySelector('.facility-text-h2')
const facilityTextP = document.querySelector('.facility-text-p')
const facilityTextP2 = document.querySelector('.facility-text-p2')

const facilityImage = document.querySelector('.facility-image')
const facilityContainer = document.querySelector('.facility-image')
for (const icon of facilityNavIcons) {
  icon.addEventListener('click', function click(e) {
    if (e.target.id === '1') {
      facilityImage.src = './img/discover-image-1.jpg'
      facilityNavIconIcon[0].classList.add('active')
      facilityNavIconIcon[1].classList.remove('active')
      facilityNavIconIcon[2].classList.remove('active')
      facilityNavIconIcon[3].classList.remove('active')
     
      facilityNavIconP[0].classList.add('active')
      facilityNavIconP[1].classList.remove('active')
      facilityNavIconP[2].classList.remove('active')
      facilityNavIconP[3].classList.remove('active')
     
      // text change
      facilityTextH2.innerText =
        ' Crystal Clear Waters And Cool Atmosphere'
      facilityTextP.innerText =
        'You can enjoy and chill with your family. We maintain all the hygiene standards for pool area and its water. '
      
 facilityTextP2.style.visibility = 'visible'
      facilityTextP2.innerText = ' SWIMMING SCHEDULE: 07:00 AM - 07:00 PM'
    }  else if (e.target.id === '2') {
      console.log(e.target.id)
      facilityImage.src = './img/facilities-playground.jpg'
      facilityNavIconIcon[1].classList.add('active')
      facilityNavIconIcon[0].classList.remove('active')
      facilityNavIconIcon[2].classList.remove('active')
      facilityNavIconIcon[3].classList.remove('active')
    
      facilityNavIconP[1].classList.add('active')
      facilityNavIconP[0].classList.remove('active')
      facilityNavIconP[2].classList.remove('active')
      facilityNavIconP[3].classList.remove('active')
      
      // text change
      facilityTextH2.innerText =
        'Kids Never Felt Better While Having So Much Fun'
      facilityTextP.innerText =
        'Children have their own space to have fun and play games, so you can enjoy a few moments of relaxation in your room.  '
      
      facilityTextP2.style.visibility = 'hidden'
    } else if (e.target.id === '3') {
      console.log(e.target.id)
      facilityImage.src = './img/discover-image-6.jpg'
      facilityNavIconIcon[2].classList.add('active')
      facilityNavIconIcon[0].classList.remove('active')
      facilityNavIconIcon[3].classList.remove('active')
      facilityNavIconIcon[1].classList.remove('active')

      facilityNavIconP[2].classList.add('active')
      facilityNavIconP[0].classList.remove('active')
      facilityNavIconP[3].classList.remove('active')
      facilityNavIconP[1].classList.remove('active')
     
      // text change
      facilityTextH2.innerText = 'Delicious Local Food And  Dishes @ "Phulka" ';
      facilityTextP.innerHtml =
        'We serve delicious food from the local cuisine made with natural ingredients from local farms and markets. Villa is also vegetarian friendly so come on.  ';
 facilityTextP2.style.visibility = 'visible'
      facilityTextP2.innerText = `BREAKFAST SCHEDULE: 07:30 AM - 10:00 AM
                                  LUNCH SCHEDULE    : 12:30 PM - 03:00 PM
                                  DINNER SCHEDULE   : 07:30 PM - 10:00 PM`
    } else if (e.target.id === '4') {
      console.log(e.target.id)
      facilityImage.src = './img/gir-safari.jpg'

      facilityNavIconIcon[3].classList.add('active')
      facilityNavIconIcon[0].classList.remove('active')
      facilityNavIconIcon[2].classList.remove('active')
      facilityNavIconIcon[1].classList.remove('active')
      
      facilityNavIconP[3].classList.add('active')
      facilityNavIconP[0].classList.remove('active')
      facilityNavIconP[2].classList.remove('active')
      facilityNavIconP[1].classList.remove('active')
      
      // text change
      facilityTextH2.innerText =
        'Great Place For Relaxing Summer Mornings And Evenings'
      facilityTextP.innerText =
        'We serve delicious food from the local cuisine made with natural ingredients from local farms and markets. Villa is also vegetarian friendly so come on,  '
  
     facilityTextP2.style.visibility = 'hidden'
    }
  })
}

// for (const icon of facilityNavIconIcon) {
//   icon.addEventListener('mouseover', function hover(e) {
//     icon.style.color = 'rgb(15 118 110)'
//     facilityNavIconP[(e.target.id)-1].style.color = 'rgb(15 118 110)'
//   });
//   icon.addEventListener('mouseout', function hover(e) {
//     icon.style.color = 'rgb(107 114 128)'
//     facilityNavIconP[(e.target.id)-1].style.color = 'rgb(107 114 128)'
//   });
// }
// for (const icon of facilityNavIconP) {
//   icon.addEventListener('mouseover', function hover(e) {
//     icon.style.color = 'rgb(15 118 110)'
//     facilityNavIconIcon[(e.target.id)-1].style.color = 'rgb(15 118 110)'
//   });
//   icon.addEventListener('mouseout', function hover(e) {
//     icon.style.color = 'rgb(107 114 128)'
//     facilityNavIconIcon[(e.target.id)-1].style.color = 'rgb(107 114 128)'
//   });
// }

// review slide
const $owlCarousel = $('.owl-carousel').owlCarousel({
  items: 1,
  loop: true,
  nav: false,
})
$owlCarousel.on('changed.owl.carousel', (e) => {
  $('.owl-slide-animated').removeClass('is-transitioned')
  const $currentOwlItem = $('.owl-item').eq(e.item.index)
  $currentOwlItem.find('.owl-slide-animated').addClass('is-transitioned')
})
/*you have to bind initialized event before owl's initialization (see demo) */
$('.owl-carousel').on('initialized.owl.carousel', () => {
  setTimeout(() => {
    $('.owl-item.active .owl-slide-animated').addClass('is-transitioned')
  }, 200)
})
$('.owl-carousel').on('initialized.owl.carousel', () => {
  setTimeout(() => {
    // other code here

    $('section').show()
  }, 200)
})
function setOwlDotsPosition() {
  const $target = $('.owl-item.active .owl-slide-text')
  doDotsCalculations($target)
}
function doDotsCalculations(el) {
  const height = el.height()
  const { top, left } = el.position()
  const res = height + top + 20

  $('.owl-carousel .owl-dots').css({
    top: `${res}px`,
    left: `${left}px`,
  })
}
$owlCarousel.on('resize.owl.carousel', () => {
  setTimeout(() => {
    setOwlDotsPosition()
  }, 50)
})

// hamburger menu

const menuBtn = document.querySelector('.hamburger-menu')
const sideBar = document.querySelector('.side-bar')
const closeBtnSidebar = document.querySelector('.close-side-bar')
let toggle = false
menuBtn.addEventListener('click', () => {
  if (toggle === false) {
    sideBar.style.visibility = 'visible'
    toggle = true
  } else {
    sideBar.style.visibility = 'hidden'
    toggle = false
  }
})
closeBtnSidebar.addEventListener('click', () => {
  sideBar.style.visibility = 'hidden'
  toggle = false
})
