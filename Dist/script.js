const navbar = document.querySelector('.nav-bar')
const navLink = document.querySelectorAll('.nav-links')
const brandLogo = document.querySelector('.brand-logo')


window.addEventListener('scroll', (event) => {
  if (window.pageYOffset == 0) {
    navbar.style.backgroundColor = 'transparent'
    
    
  } else {
    navbar.style.backgroundColor = '#f4f4f4'
    
    
    navbar.style.opacity = '0'
    navbar.style.height = '80px'
    navbar.style.transition = 'all 1s'
    navbar.style.opacity = '1'
  }
})
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
const imageContainer = document.querySelector('.image-container');
const discoverImages = document.querySelectorAll('.discover-image')
const imageBox = document.querySelector('.image-box');
const closeBtn = document.querySelector('.close-btn');

// image-click handle
for (const discoverImg of discoverImages) {
  discoverImg.addEventListener("click", function click(e) {
    imageContainer.style.backgroundRepeat = 'no-repeat'
      imageContainer.style.backgroundSize = 'contain'
      imageContainer.style.backgroundPosition = 'center'
      imageBox.style.visibility = 'visible'
    if (e.target.id === "1") {
      
      imageContainer.style.backgroundImage = 'url(./img/discover-image-1.jpg)'
       
    }else if (e.target.id === "2") {
      
      imageContainer.style.backgroundImage = 'url(./img/discover-image-2.jpg)'
      
    } else if (e.target.id === "3") {
      
       imageContainer.style.backgroundImage = 'url(./img/discover-image-3.jpg)'
    } else if (e.target.id === "4") {
      
      imageContainer.style.backgroundImage = 'url(./img/discover-image-4.jpg)'
      
    }else if (e.target.id === "5") {
      
      imageContainer.style.backgroundImage = 'url(./img/discover-image-5.jpg)'
      
    }else if (e.target.id === "6") {
      
      imageContainer.style.backgroundImage = 'url(./img/facilities-restaurant.jpg)'
      
    }
      
    

  });
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
const facilityTextSpan = document.querySelector('.facility-text-span')
const facilityImage = document.querySelector('.facility-image')
const facilityContainer = document.querySelector('.facility-image')
for (const icon of facilityNavIcons) {
  icon.addEventListener('click', function click(e) {
   
    if (e.target.id === "1")
    {
      facilityImage.src = "./img/facilities-beach.jpg"
      facilityNavIconIcon[0].classList.add('active')
      facilityNavIconIcon[1].classList.remove('active')
      facilityNavIconIcon[2].classList.remove('active')
      facilityNavIconIcon[3].classList.remove('active')
      facilityNavIconIcon[4].classList.remove('active')
      facilityNavIconP[0].classList.add('active')
      facilityNavIconP[1].classList.remove('active')
      facilityNavIconP[2].classList.remove('active')
      facilityNavIconP[3].classList.remove('active')
      facilityNavIconP[4].classList.remove('active')
      // text change
      facilityTextH2.innerText = 'Crystal Clear Turquoise Waters And Warm Beaches'
      facilityNavIconP.innerText = 'here are 2 beautiful sunny beaches near Villa’s location conveniently equipped with beach chairs, umbrellas, beach bar, showers and trained life guards for '
      facilityTextSpan.innerText = 'your safety.'
      facilityTextP2.innerText = 'SWIMMING SCHEDULE: 08:00 - 23:00'



    }else if (e.target.id === "2")
    {
       facilityContainer.style.transition = 'all 4s ease-in-out'
    
      console.log(e.target.id);
      facilityImage.src = "./img/facilities-parking.jpg"
      facilityNavIconIcon[1].classList.add('active')
      facilityNavIconIcon[0].classList.remove('active')
      facilityNavIconIcon[2].classList.remove('active')
      facilityNavIconIcon[3].classList.remove('active')
      facilityNavIconIcon[4].classList.remove('active')
       facilityNavIconP[1].classList.add('active')
      facilityNavIconP[0].classList.remove('active')
      facilityNavIconP[2].classList.remove('active')
      facilityNavIconP[3].classList.remove('active')
      facilityNavIconP[4].classList.remove('active')
      // text change
      facilityTextH2.innerText = 'Last Thing You Need To Worry About Is Your Car'
      facilityNavIconP.innerText = 'Villa offers free parking for all its customers in a safe and easy to reach area. The designated place is guarded and supervised with surveillance cameras for your '
      facilityTextSpan.innerText = 'peace of mind.'
      facilityTextP2.innerText = 'PARKING SCHEDULE: NON-STOP'
    }else if (e.target.id === "3")
    {
      console.log(e.target.id);
      facilityImage.src = "./img/facilities-playground.jpg"
      facilityNavIconIcon[2].classList.add('active')
      facilityNavIconIcon[0].classList.remove('active')
      facilityNavIconIcon[1].classList.remove('active')
      facilityNavIconIcon[3].classList.remove('active')
      facilityNavIconIcon[4].classList.remove('active')
       facilityNavIconP[2].classList.add('active')
      facilityNavIconP[0].classList.remove('active')
      facilityNavIconP[1].classList.remove('active')
      facilityNavIconP[3].classList.remove('active')
      facilityNavIconP[4].classList.remove('active')
      // text change
       facilityTextH2.innerText = 'Kids Never Felt Better While Having So Much Fun'
      facilityNavIconP.innerText = 'Children have their own space to have fun and play games under adult supervision so you can enjoy a few moments of relaxation in your room or some extreme sports  '
      facilityTextSpan.innerText = 'on the beach.'
      facilityTextP2.innerText = 'PLAY SCHEDULE: 08:00 - 23:00'
    }else if (e.target.id === "4")
    {
      console.log(e.target.id);
      facilityImage.src = "./img/facilities-restaurant-.jpg"
      facilityNavIconIcon[3].classList.add('active')
      facilityNavIconIcon[0].classList.remove('active')
      facilityNavIconIcon[2].classList.remove('active')
      facilityNavIconIcon[1].classList.remove('active')
      facilityNavIconIcon[4].classList.remove('active')
       facilityNavIconP[3].classList.add('active')
      facilityNavIconP[0].classList.remove('active')
      facilityNavIconP[2].classList.remove('active')
      facilityNavIconP[1].classList.remove('active')
      facilityNavIconP[4].classList.remove('active')
       // text change
       facilityTextH2.innerText = 'Delicious Local Food And International Dishes'
      facilityNavIconP.innerText = 'We serve delicious food from the local cuisine made with natural ingredients from local farms and markets. Villa is also vegetarian friendly so come on,  '
      facilityTextSpan.innerText = 'Book one of our room'
      facilityTextP2.innerText = 'SERVING SCHEDULE: 08:00 - 23:00'
    }else if (e.target.id === "5")
    {
      console.log(e.target.id);
      facilityImage.src = "./img/facilities-terrace-768x484.jpg"

      facilityNavIconIcon[4].classList.add('active')
      facilityNavIconIcon[0].classList.remove('active')
      facilityNavIconIcon[2].classList.remove('active')
      facilityNavIconIcon[1].classList.remove('active')
      facilityNavIconIcon[3].classList.remove('active')
       facilityNavIconP[4].classList.add('active')
      facilityNavIconP[0].classList.remove('active')
      facilityNavIconP[2].classList.remove('active')
      facilityNavIconP[1].classList.remove('active')
      facilityNavIconP[3].classList.remove('active')
        // text change
       facilityTextH2.innerText = 'Great Place For Relaxing Summer Mornings And Evenings'
      facilityNavIconP.innerText = 'We serve delicious food from the local cuisine made with natural ingredients from local farms and markets. Villa is also vegetarian friendly so come on,  '
      facilityTextSpan.innerText = 'Book one of our room'
      facilityTextP2.innerText = 'SERVING SCHEDULE: 08:00 - 23:00'
    }
     
     
    
   
  });
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
const $owlCarousel = $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: false,
   
});
 $owlCarousel.on("changed.owl.carousel", e => {
  $(".owl-slide-animated").removeClass("is-transitioned");
  const $currentOwlItem = $(".owl-item").eq(e.item.index);
  $currentOwlItem.find(".owl-slide-animated").addClass("is-transitioned");
 });
/*you have to bind initialized event before owl's initialization (see demo) */
$(".owl-carousel").on("initialized.owl.carousel", () => {
  setTimeout(() => {
    $(".owl-item.active .owl-slide-animated").addClass("is-transitioned");
  }, 200);
})
$(".owl-carousel").on("initialized.owl.carousel", () => {
  setTimeout(() => {
    // other code here
     
    $("section").show();
  }, 200);
});
function setOwlDotsPosition() {
  const $target = $(".owl-item.active .owl-slide-text");
  doDotsCalculations($target);
}
function doDotsCalculations(el) {
  const height = el.height();
  const {top, left} = el.position();
  const res = height + top + 20;
 
  $(".owl-carousel .owl-dots").css({
    top: `${res}px`,
    left: `${left}px`
  });
}
$owlCarousel.on("resize.owl.carousel", () => {
  setTimeout(() => {
    setOwlDotsPosition();
  }, 50);
});

// hamburger menu

const menuBtn = document.querySelector('.hamburger-menu')
const sideBar = document.querySelector('.side-bar')
const closeBtnSidebar = document.querySelector('.close-side-bar')
let toggle = false;
menuBtn.addEventListener('click',() =>  {
  if (toggle === false) {
    sideBar.style.visibility = 'visible';
    toggle=true
  } else {
    sideBar.style.visibility = 'hidden';
    toggle=false
  }
});
closeBtnSidebar.addEventListener('click', () => {
sideBar.style.visibility = 'hidden';
    toggle=false

 });