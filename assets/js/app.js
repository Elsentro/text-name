
const commentsSliderCheck = document.querySelectorAll('.swiper-comments');
if (commentsSliderCheck.length > 0) {
  commentsSliderCheck.forEach((slider) => {
    const swiper_comments = new Swiper('.swiper-comments', {
      direction: 'horizontal',
    
    
    
     
      navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
        
      },
      pagination: {
        el: '.comments--pagination',
        clickable: true,
      },
    
      slidesPerView: 1,
      spaceBetween: 24,
      breakpoints: {
        850: {
          slidesPerView: 2,
        
        }
      }
    });
  });
}


const gallerySliderCheck = document.querySelectorAll('.swiper-gallery');
if (gallerySliderCheck.length > 0) {
  gallerySliderCheck.forEach((slider) => {
    const swiper_gallery = new Swiper('.swiper-gallery', {
      direction: 'horizontal',
    
    
    
     
      navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
        
      },
      pagination: {
        el: '.gallery--pagination',
        clickable: true,
      },
      slidesPerView: 1,
      spaceBetween: 24,
      breakpoints: {
        1300: {
          slidesPerView: 3,
        
        },
        850: {
          slidesPerView: 2,
        }
      },
     
    }); 
  });
}


const doctorSliderCheck = document.querySelectorAll('.swiper-doctor');
if (doctorSliderCheck.length > 0) {
  doctorSliderCheck.forEach((slider) => {
   
const swiper_doctor = new Swiper('.swiper-doctor', {
  direction: 'horizontal',



 
  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
    
  },
  slidesPerView: 1.15,
  spaceBetween: 24,
  breakpoints: {
    1300: {
      slidesPerView: 5,
    
    },
    1000: {
      slidesPerView: 4,
    },
    850: {
      slidesPerView: 3,
    },
    560: {
      slidesPerView: 2.2,
    
    },
    490: {
      slidesPerView: 1.5,
    },
    395: {
      slidesPerView: 1.3,
    },
  },
});
  });
}

const certificateSliderCheck = document.querySelectorAll('.swiper-certificate');
if (certificateSliderCheck.length > 0) {
  certificateSliderCheck.forEach((slider) => {
   
const swiper_certificate = new Swiper('.swiper-certificate', {
  direction: 'horizontal',



 
  navigation: {
    nextEl: '.swiper-button-next4',
    prevEl: '.swiper-button-prev4',
    
  },
  slidesPerView: 1.35,
  spaceBetween: 10,
  breakpoints: {
    1200: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
    1000: {
      slidesPerView: 5,
      
    },
    850: {
      slidesPerView: 4,
    },
    560: {
      slidesPerView: 3,
    
    },
    460: {
      slidesPerView: 2,
    
    },
  }
});
  });
}


const panelChech = document.querySelectorAll('.panel-title');
if (panelChech.length > 0) {
  var panelItem = document.querySelectorAll('.panel-title'),
  bodyItem = document.querySelectorAll('.panel-body');
panelItem.__proto__.forEach = [].__proto__.forEach;

var activePanel;
panelItem.forEach(function(item, i, panelItem) {
  item.addEventListener('click', function(e) {
    this.classList.add('panel-active');
    this.nextElementSibling.classList.add('active');
    if (activePanel) {
      activePanel.classList.remove('panel-active');
      activePanel.nextElementSibling.classList.remove('active');
    }
    activePanel = (activePanel === this) ? 0 : this;
  });
});
}



document.querySelector('.burger__menu').addEventListener('click', function () {
  document.querySelector('.burger__menu').classList.toggle("active");
   document.body.classList.toggle("active__burger");
  document.querySelector('.header__bottom-content--burger').classList.toggle("active");
})

const elementShowCheck = document.querySelectorAll('.element-animation');
if (elementShowCheck.length > 0) {
  function onEntry(e) {
    e.forEach(e=>{
        e.isIntersecting && e.target.classList.add("element-show")
    }
    )
  }
  let options = {
    threshold: [.5]
  }
  , observer = new IntersectionObserver(onEntry,options)
  , elements = document.querySelectorAll(".element-animation");
  for (let e of elements)
    observer.observe(e);
}






let header__top = document.getElementById('#header__top');
let header__bottom = document.getElementById('#header__bottom');
    window.addEventListener('scroll', function () {
        if (window.scrollY > header__top.offsetHeight) {
            header__bottom.classList.add("fixed");
        } else {
            header__bottom.classList.remove("fixed");
        }
    });
 

    const mapCheck = document.getElementById('map_container');
    if (mapCheck != null) {
      let options_map = {
        once: true,
        passive: true,
        capture: true
      };
      mapCheck.addEventListener('click', start_lazy_map, options_map);
      mapCheck.addEventListener('mouseover', start_lazy_map, options_map);
      mapCheck.addEventListener('touchstart', start_lazy_map, options_map);
      mapCheck.addEventListener('touchmove', start_lazy_map, options_map);
      let map_loaded = false;
      function start_lazy_map() {
        if (!map_loaded) {
      
          ymaps.ready(init);
      
        function init() {
            const map = document.querySelector('#map');
      
            if (map) {
                var myMap = new ymaps.Map("map", {
                    center: [47.217641, 39.702284],
                    zoom: 16,
                });
                var myPlacemark = new ymaps.Placemark([47.217641, 39.702284], {}, {
                    iconLayout: 'default#image',
      
                });
      
                myMap.geoObjects.add(myPlacemark);
            }
        }
      
        }
      
      
      }
    
    } 
  

  let popupBg = document.querySelector('.popup__bg');
  if (popupBg != null) {
    let popup = document.querySelector('.popup'); 
  let openPopupButtons = document.querySelectorAll('.open-popup'); 
  let closePopupButton = document.querySelector('.close-popup'); 
  openPopupButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault();
        popupBg.classList.add('active'); 
        popup.classList.add('active'); 
    })
  });
  closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active'); 
    popup.classList.remove('active');
  });
  document.addEventListener('click', (e) => { 
    if(e.target === popupBg) { 
        popupBg.classList.remove('active'); 
        popup.classList.remove('active');
    }
  });
  }